from pydantic import BaseModel,EmailStr
from pydantic import constr

class Product(BaseModel):
    id: int
    name: str
    price: float



class ContactIn(BaseModel):
    name: str
    email: EmailStr
    number: constr(pattern=r'^\d{10}$')  # type: ignore # Accepts exactly 10 digits
    address: str
