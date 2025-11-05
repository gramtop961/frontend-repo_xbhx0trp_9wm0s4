import { useMemo, useState } from 'react'

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '10K',
    note: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const whatsappNumber = '1234567890' // Replace with your WhatsApp number (country code + number)

  const whatsappLink = useMemo(() => {
    const text = `Race Registration%0A` +
      `Name: ${form.fullName}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A` +
      `Category: ${form.category}%0A` +
      (form.note ? `Note: ${form.note}%0A` : '')
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }, [form])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.fullName || !form.email || !form.phone) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and phone number.' })
      return
    }
    setStatus({ type: 'success', message: 'Thanks! Your registration has been recorded. We will contact you shortly.' })
  }

  return (
    <section id="register" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register for the Race</h2>
          <p className="mt-2 text-gray-600">Prefer WhatsApp? Submit the form or send your details directly via WhatsApp.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 555 000 1234"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                >
                  <option>5K</option>
                  <option>10K</option>
                  <option>21K</option>
                  <option>42K</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note (optional)</label>
              <textarea
                id="note"
                name="note"
                rows={3}
                value={form.note}
                onChange={handleChange}
                placeholder="Any additional information"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            {status.message && (
              <div
                className={`rounded-md p-3 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-200' : 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-200'}`}
              >
                {status.message}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Submit Form
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
              >
                Send via WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
