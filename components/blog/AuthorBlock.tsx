import Image from 'next/image'
import { type Author, formatDate, readingTime } from '@/lib/posts'

type Props = {
  author: Author
  publishedAt: string
  wordCount: number
  compact?: boolean
}

export default function AuthorBlock({ author, publishedAt, wordCount, compact = false }: Props) {
  const photoW = compact ? 32 : 40
  const photoH = compact ? 32 : 40

  return (
    <div className="flex items-center gap-3">
      <Image
        src={author.photo}
        alt={author.name}
        width={photoW}
        height={photoH}
        className="rounded-full object-cover shrink-0"
        style={{ width: photoW, height: photoH }}
      />
      <div className="flex flex-col gap-0.5">
        <span className={`font-sans font-semibold text-[#1A1A1A] ${compact ? 'text-sm' : 'text-base'}`}>
          {author.name}
        </span>
        {!compact && (
          <span className="font-sans text-sm text-neutral-400">{author.role}</span>
        )}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-sans text-xs text-neutral-400">
            {formatDate(publishedAt)}
          </span>
          {!compact && (
            <>
              <span className="text-neutral-300" aria-hidden="true">·</span>
              <span className="font-sans text-xs text-neutral-400">
                {readingTime(wordCount)} min de leitura
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
