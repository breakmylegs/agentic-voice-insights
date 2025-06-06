import asyncio
import json
import os
from datetime import datetime

import boto3
import botocore.auth
import botocore.awsrequest
import httpx

BEDROCK_REGION = "us-east-1"
MODEL_ID = "amazon.nova-sonic-v1:0"
BEDROCK_URL = (
    f"https://bedrock-runtime.{BEDROCK_REGION}.amazonaws.com/model/{MODEL_ID}/invoke"
)

USE_LOCAL_STUB = None

if USE_LOCAL_STUB is None:
    print("Select audio source mode:")
    print("1. Local test audio (no AWS)")
    print("2. Connect to AWS Bedrock Nova Sonic")
    choice = input("Enter 1 or 2: ").strip()
    USE_LOCAL_STUB = choice == "1"

if not USE_LOCAL_STUB:
    session = boto3.Session()
    credentials = session.get_credentials()
    if credentials is None:
        raise RuntimeError(
            "AWS credentials not found. Please configure them or use local test mode."
        )
    credentials = credentials.get_frozen_credentials()


def sign_request(headers, body_bytes):
    request = botocore.awsrequest.AWSRequest(
        method="POST", url=BEDROCK_URL, data=body_bytes, headers=headers
    )
    signer = botocore.auth.SigV4Auth(credentials, "bedrock", BEDROCK_REGION)
    signer.add_auth(request)
    return dict(request.headers)


async def nova_sonic_stream(websocket, prompt=None, user_input_audio=None):
    if USE_LOCAL_STUB:
        await local_stub_response(websocket)
    else:
        await bedrock_stream(websocket, prompt)


async def local_stub_response(websocket):
    print("[Local Mode] Sending stub audio")
    try:
        with open("greeting.wav", "rb") as f:
            data = f.read()
            await websocket.send_bytes(data)
    except FileNotFoundError:
        print("greeting.wav not found. Please add a test WAV file.")


async def bedrock_stream(websocket, prompt):
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-amzn-bedrock-accept": "audio/pcm",
        "x-amzn-bedrock-content-type": "application/json",
    }

    payload = {
        "input": {
            "text": prompt or "",
        },
        "voice": {"voiceId": "Nova"},
    }

    body = json.dumps(payload).encode("utf-8")
    signed_headers = sign_request(headers, body)

    async with httpx.AsyncClient(http2=True) as client:
        try:
            response = await client.post(
                BEDROCK_URL, headers=signed_headers, content=body, timeout=None
            )
            async for chunk in response.aiter_bytes():
                await websocket.send_bytes(chunk)
        except Exception as e:
            print(f"Nova Sonic streaming error: {e}")
