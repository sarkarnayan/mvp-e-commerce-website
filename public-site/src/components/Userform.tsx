import React, { useState } from "react";
import { createUser, UserPayload } from "../services/api";
import "./footer.css"; // Import your CSS styles

const UserForm = () => {
  const [formData, setFormData] = useState<UserPayload>({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(formData);
      setMessage("✅ Info submitted successfully!");
      setFormData({ name: "", email: "", number: "", address: "" });
    } catch (error) {
      console.error(error);
      setMessage("❌ Submission failed. Please try again.");
    }
  };

  return (
    <div className="user-form-section">
      <h3>📬 Submit Your Info</h3>
      <form onSubmit={handleSubmit} className="user-form">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="number" // 🔁 was phone
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserForm;
