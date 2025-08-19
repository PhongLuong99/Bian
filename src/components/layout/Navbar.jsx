import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-display text-2xl font-bold text-primary-600">
              Portfolio
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/#about" className="text-gray-700 hover:text-primary-600">About</Link>
            <Link to="/#projects" className="text-gray-700 hover:text-primary-600">Projects</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar