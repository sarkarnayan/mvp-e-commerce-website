# routers/websockets.py
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import json

router = APIRouter()

class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

ws_manager = ConnectionManager() # Use a distinct name to avoid conflicts

@router.websocket("/ws/products")
async def websocket_endpoint(websocket: WebSocket):
    await ws_manager.connect(websocket)
    try:
        while True:
            # Keep the connection alive
            await websocket.receive_text()
    except WebSocketDisconnect:
        ws_manager.disconnect(websocket)
        print("Client disconnected")

# Function to trigger updates from other parts of your application
async def notify_product_update(product_data: dict):
    message = json.dumps({"type": "product_update", "data": product_data})
    await ws_manager.broadcast(message)