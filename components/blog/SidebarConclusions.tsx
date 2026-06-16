export default function SidebarConclusions({ conclusions }: { conclusions: string[] }) {
  return (
    <aside
      className="bg-neutral-50 border-l-[3px] border-lume-yellow rounded-r-card px-6 py-7 flex flex-col gap-5"
      aria-label="Principais conclusões"
    >
      <p className="font-sans text-xs font-semibold text-neutral-400 tracking-[0.16em] uppercase">
        Principais conclusões
      </p>

      <ul className="flex flex-col gap-4" role="list">
        {conclusions.map((c, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1 w-4 h-4 rounded-full border-2 border-lume-yellow flex items-center justify-center shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lume-yellow" />
            </span>
            <p className="font-sans text-sm text-neutral-600 leading-[1.65]">{c}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}
