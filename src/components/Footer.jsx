export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} City Run. All rights reserved.</p>
      </div>
    </footer>
  )
}
