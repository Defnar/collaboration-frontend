export default function Register() {
  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-anime mb-4 text-barbiePink">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-barbiePink text-white p-2 rounded hover:bg-softPurple transition">
          Register
        </button>
      </form>
    </div>
  );
}