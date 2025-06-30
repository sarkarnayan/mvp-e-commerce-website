from fastapi import APIRouter

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.get("/me")
def get_user():
    return {"username": "test_user", "email": "user@example.com"}
