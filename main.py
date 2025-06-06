import asyncio

from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse

from nova_client import nova_sonic_stream

app = FastAPI()


@app.websocket("/stream")
async def stream(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket connection established")

    # Send greeting prompt to Nova Sonic and stream back voice
    greeting_prompt = (
        "You are a friendly assistant. Please greet the user and ask how you can help."
    )
    await nova_sonic_stream(websocket, greeting_prompt)

    # Stream audio from user to Bedrock after greeting
    try:
        while True:
            audio_chunk = await websocket.receive_bytes()
            await nova_sonic_stream(websocket, user_input_audio=audio_chunk)
    except Exception as e:
        print(f"WebSocket closed: {e}")
        await websocket.close()
