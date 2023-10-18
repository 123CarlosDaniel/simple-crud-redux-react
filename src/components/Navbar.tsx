import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex px-8 py-2 space-x-4 text-lg font-semibold tracking-wide'>
        <Link to={"/"} className='px-2 bg-gradient-to-br from-green-500 to-green-800 rounded-xl'>Home</Link>
        <Link to={"add-card"} className='px-2 transition-colors duration-200 border border-red-500 rounded-xl hover:bg-red-500 hover:border-transparent'>Add Card</Link>
    </nav>
  )
}
