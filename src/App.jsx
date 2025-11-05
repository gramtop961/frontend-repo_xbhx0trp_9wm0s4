import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Run through the heart of the city</h2>
              <p className="mt-3 text-gray-600">
                Experience a scenic route, live music, and a supportive crowd. Whether you’re a first-time runner or chasing a new personal best, our race day has something for everyone.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Certified course with hydration every 2 km</li>
                <li>• Finisher medal and race kit included</li>
                <li>• Professional timing and safety support</li>
              </ul>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-white to-indigo-100 shadow-inner sm:h-80">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(79,70,229,0.15),transparent_35%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-lg bg-white/70 px-6 py-4 text-center shadow backdrop-blur">
                  <p className="text-sm font-medium text-gray-700">Race Day</p>
                  <p className="text-3xl font-extrabold tracking-tight text-blue-700">Sunday, 30 Days From Now</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
