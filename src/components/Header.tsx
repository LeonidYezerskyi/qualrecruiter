import Link from "next/link";

export function Header() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <div className="pointer-events-auto px-6 pt-6 sm:px-8 lg:px-10 xl:px-12">
        <Link
          href="/"
          className="inline-block rounded-[4px] bg-white px-4 py-2.5 shadow-sm ring-1 ring-black/10 transition-opacity duration-200 hover:opacity-95"
        >
          <span className="text-sm font-semibold tracking-tight text-ink md:text-base">
            QualRecruiter
          </span>
        </Link>
      </div>
    </header>
  );
}
