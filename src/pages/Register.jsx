import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { api } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const submitData = async (event) => {
    event.preventDefault();

    try {
      await api.post("users/register", formData);

      alert("registration successful");
      setFormData({
        username: "",
        email: "",
        password: ""
      })

      navigate("/");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-anime mb-4 text-barbiePink">Register</h2>
      <form className="space-y-4" onSubmit={submitData}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData?.username || ""}
          required
          onChange={handleFormChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData?.email || ""}
          required
          onChange={handleFormChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData?.password || ""}
          required
          onChange={handleFormChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-barbiePink text-white p-2 rounded hover:bg-softPurple transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
