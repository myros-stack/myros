import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur section-fade-b">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

        {/* Logo + Icon */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/icon.png"
            alt="Myros icon"
            width={32}
            height={32}
            className="bg-transparent"
          />
          <Image
            src="/images/logo.png"
            alt="Myros logo"
            width={100}
            height={24}
            className="bg-transparent"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#how" className="hover:text-ink">How it works</a>
          <a href="#testimonials" className="hover:text-ink">Testimonials</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
          <Link href="/login" className="hover:text-ink">Sign in</Link>
          <Link href="/signup" className="rounded-full border border-black/10 px-3 py-1.5 hover:bg-black hover:text-white transition">
            Get Started
          </Link>
        </nav>

      </div>
    </header>
  );
}