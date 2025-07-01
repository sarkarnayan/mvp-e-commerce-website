from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import products, users

from routers import contact


app = FastAPI()

app.include_router(contact.router)


 # CORS setup for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://192.168.0.104:3000"],  # Add exact IP here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)
app.include_router(users.router)

@app.get("/")
def root():
     return {"message": "API is running"}
