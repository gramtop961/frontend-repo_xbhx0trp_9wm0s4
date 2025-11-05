import { useEffect, useMemo, useState } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function CountdownTimer({ targetDate }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate])
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(Math.max(0, target - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [target])

  const totalSeconds = Math.floor(timeLeft / 1000)
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)

  return (
    <div className="flex items-center gap-3 sm:gap-4" aria-live="polite" aria-label="Countdown timer">
      <TimeBlock label="Days" value={pad(days)} />
      <Separator />
      <TimeBlock label="Hours" value={pad(hours)} />
      <Separator />
      <TimeBlock label="Minutes" value={pad(minutes)} />
    </div>
  )
}

function TimeBlock({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
    </div>
  )
}

function Separator() {
  return <span className="text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-400">:</span>
}
