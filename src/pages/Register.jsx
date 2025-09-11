export default function Register() {
  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-lg shadow'>
      <h2 className='text-xl font-bold mb-4'>Register</h2>
      <form className='space-y-4'>
        <input type='text' placeholder='Username' className='w-full border rounded p-2' />
        <input type='email' placeholder='Email' className='w-full border rounded p-2' />
        <input type='password' placeholder='Password' className='w-full border rounded p-2' />
        <button className='w-full bg-blue-500 text-white py-2 rounded'>Register</button>
      </form>
    </div>
  );
}