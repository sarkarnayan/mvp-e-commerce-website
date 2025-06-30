from fastapi import APIRouter
from models.schemas import ContactIn
from database import conn

router = APIRouter()

@router.post("/submit-contact")
def submit_contact(contact: ContactIn):
    try:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO user_contacts (name, email, number, address)
            VALUES (%s, %s, %s, %s)
        """, (contact.name, contact.email, contact.number, contact.address))
        conn.commit()
        return {"message": "Contact saved successfully!"}
    except Exception as e:
        return {"error": str(e)}
