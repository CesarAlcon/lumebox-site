import { readingTime } from '@/lib/posts'
import { Clock } from 'lucide-react'

export default function ReadingTime({
  wordCount,
  className = '',
}: {
  wordCount: number
  className?: string
}) {
  const mins = readingTime(wordCount)
  return (
    <span className={`inline-flex items-center gap-1.5 font-sans text-sm text-neutral-400 ${className}`}>
      <Clock size={13} aria-hidden="true" />
      {mins} min de leitura
    </span>
  )
}
