from fastapi import APIRouter
from models.schemas import Product
from typing import List

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)

@router.get("./products", response_model=List[Product])
def get_products():
    return [
        {
            "id": 1,
            "name": "Mul Cotton Saree",
            "price": 999,
            "image": "https://chhapa.in/cdn/shop/files/HandBlockPrintMulCottonSaree-1_1800x1800.jpg"
        },
        {
            "id": 2,
            "name": "Chanderi Saree",
            "price": 1299,
            "image": "https://chhapa.in/cdn/shop/files/ChanderiSareeWithBorder-2_1800x1800.jpg"
        }
    ]
