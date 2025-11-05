export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600"></span>
          <span className="text-lg font-semibold tracking-tight text-gray-900">City Run</span>
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <a href="#register" className="text-sm text-gray-600 hover:text-gray-900">Register</a>
          <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
        </nav>
        <a
          href="#register"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          Register
        </a>
      </div>
    </header>
  )
}
