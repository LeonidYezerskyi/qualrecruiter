import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <div className="pointer-events-auto px-6 pt-6 sm:px-8 lg:px-10 xl:px-12">
        <Link
          href="/"
          className="inline-block rounded-[4px] bg-white p-[2px] shadow-sm ring-1 ring-black/10 transition-opacity duration-200 hover:opacity-95"
        >
          <Image
            src="/logo.png"
            alt="QualRecruiter"
            width={800}
            height={220}
            sizes="(max-width: 768px) min(calc(100vw - 5rem), 420px), 380px"
            className="block h-auto max-h-11 w-auto max-w-[min(calc(100vw-5rem),420px)] object-contain object-left sm:max-h-12 md:max-h-[3.35rem]"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
