import CountdownTimer from './CountdownTimer'

export default function Hero() {
  const raceDate = new Date()
  // Set a sample race date 30 days from now for demo purposes
  raceDate.setDate(raceDate.getDate() + 30)

  const whatsappNumber = '1234567890' // Replace with your WhatsApp number (country code + number)

  const whatsappLink = (prefill = '') => {
    const text = prefill ||
      `Hi! I want to register for the running race. Please share the details.`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
            2025 City Run
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Register for the Run
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Lace up and join thousands on race day. Secure your spot now and start the countdown to an unforgettable run.
          </p>

          <div className="mt-10 flex justify-center">
            <CountdownTimer targetDate={raceDate} />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Register via Form
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
