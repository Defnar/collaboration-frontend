export default function Login() {
  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-lg shadow'>
      <h2 className='text-xl font-bold mb-4'>Login</h2>
      <form className='space-y-4'>
        <input type='email' placeholder='Email' className='w-full border rounded p-2' />
        <input type='password' placeholder='Password' className='w-full border rounded p-2' />
        <button className='w-full bg-purple-500 text-white py-2 rounded'>Login</button>
      </form>
    </div>
  );
}