import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const { setToken, setUser, api } = useContext(AuthContext);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("users/login", formData);

      const { token, user } = response.data;

      console.log(token);

      setToken(token);
      setUser(user);

      setFormData({
        email: "",
        password: "",
      });

      navigate("/");

    } catch (err) {
      console.log(err);
      alert("email/password wrong");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-anime mb-4 text-barbiePink">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full p-2 border rounded"
          required
          onChange={handleFormChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full p-2 border rounded"
          required
          onChange={handleFormChange}
        />
        <button
          type="submit"
          className="w-full bg-barbiePink text-white p-2 rounded hover:bg-softPurple transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
