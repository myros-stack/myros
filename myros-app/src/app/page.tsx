import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";
import YearUpdater from "@/components/year-updater";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div
      className="text-ink antialiased"
      style={{
        background: "linear-gradient(135deg, #FFFDF9 10%, #FCECCE 15%, #E0F7FA 60%, #D0F0F5 90%)",
        minHeight: "100vh"
      }}>

        <Navigation />

        {/* Hero Section */}
        <section id="hero" className="section-fade-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12 pt-16 lg:pt-20 grid lg:grid-cols-12 gap-10 items-center">

            {/* Left: copy + form */}
            <div className="lg:col-span-6">
              <h1 className="text-4xl md:text-5xl tracking-tight font-semibold leading-tight">
                Family privacy, finally simple
              </h1>
              <p className="mt-4 text-lg text-muted">
                We scan people-search and data-broker sites, then erase what shouldn&apos;t be there—so your family stays private by default.
              </p>

              {/* Email form */}
              <form action="https://formspree.io/f/xzzaweqp" method="POST" className="mt-8 flex w-full max-w-md rounded-full overflow-hidden shadow-sm border border-line/60 bg-white">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-4 py-2 text-sm text-ink placeholder-muted focus:outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-black text-white font-medium rounded-r-full hover:bg-black/90 transition"
                >
                  Join waitlist
                </button>
              </form>
            </div>

            {/* Right: hero image */}
            <div className="lg:col-span-6">
              <div className="w-full h-[360px] lg:h-[480px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl shadow-sm border border-line/60 flex items-center justify-center">
                <span className="text-muted text-lg">Product Preview</span>
              </div>
            </div>

          </div>
        </section>

        {/* Value Strip */}
        <section id="why" className="section-fade-b">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 py-14 grid md:grid-cols-3 gap-4">

            {/* Item 1 */}
            <div className="reveal" data-wait>
              <h3 className="text-lg font-semibold">Together, protected</h3>
              <p className="mt-2 text-sm text-muted">
                Add your kids, manage roles, and keep your family&apos;s privacy in sync.
              </p>
            </div>

            {/* Item 2 */}
            <div className="reveal" data-wait style={{transitionDelay: '0.08s'}}>
              <h3 className="text-lg font-semibold">Privacy that speaks your language</h3>
              <p className="mt-2 text-sm text-muted">
                Tailored opt-out workflows across MENA &amp; Asia for true local coverage.
              </p>
            </div>

            {/* Item 3 */}
            <div className="reveal" data-wait style={{transitionDelay: '0.16s'}}>
              <h3 className="text-lg font-semibold">Transparency, guaranteed</h3>
              <p className="mt-2 text-sm text-muted">
                Every removal comes with before-and-after receipts, so you always know the job is done.
              </p>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="section-fade-b">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 py-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-10">How it works</h2>

            <div className="grid md:grid-cols-3 gap-10 items-start">

              {/* 01 · SCAN */}
              <article>
                <div className="w-full h-64 rounded-2xl shadow-sm border border-line/60 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">Scan</span>
                  </div>
                </div>
                <div className="mt-4 text-xs tracking-widest text-muted uppercase">01 · Scan</div>
                <h3 className="mt-1 text-xl font-semibold text-ink">Find exposures</h3>
                <p className="mt-2 text-muted">
                  We scan data brokers, public search, inbox leaks, and risky social posts.
                </p>
              </article>

              {/* 02 · ERASE */}
              <article>
                <div className="w-full h-64 rounded-2xl shadow-sm border border-line/60 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-semibold">Erase</span>
                  </div>
                </div>
                <div className="mt-4 text-xs tracking-widest text-muted uppercase">02 · Erase</div>
                <h3 className="mt-1 text-xl font-semibold text-ink">Send verified requests</h3>
                <p className="mt-2 text-muted">
                  We automate opt-outs &amp; deletions, then store confirmations as receipts.
                </p>
              </article>

              {/* 03 · MONITOR */}
              <article>
                <div className="w-full h-64 rounded-2xl shadow-sm border border-line/60 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-semibold">Monitor</span>
                  </div>
                </div>
                <div className="mt-4 text-xs tracking-widest text-muted uppercase">03 · Monitor</div>
                <h3 className="mt-1 text-xl font-semibold text-ink">Monitor &amp; re-remove</h3>
                <p className="mt-2 text-muted">
                  Weekly monitoring with re-removal if data reappears. Always-on safety.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="section-fade-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight reveal" data-wait>What families say</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <figure className="rounded-2xl border border-line p-6 reveal bg-white" data-wait>
                <blockquote className="text-[15px] leading-relaxed">
                  &quot;Myros removed our details from 30+ broker sites in a week and gave receipts for each one.&quot;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted">— Parent of 2, Dubai</figcaption>
              </figure>
              <figure className="rounded-2xl border border-line p-6 reveal bg-white" data-wait style={{transitionDelay: '0.08s'}}>
                <blockquote className="text-[15px] leading-relaxed">
                  &quot;I finally feel in control of what&apos;s online about my kids. The weekly monitoring is worth it alone.&quot;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted">— Mother, Singapore</figcaption>
              </figure>
              <figure className="rounded-2xl border border-line p-6 reveal bg-white" data-wait style={{transitionDelay: '0.16s'}}>
                <blockquote className="text-[15px] leading-relaxed">
                  &quot;Simple, calm, and transparent. The receipts made my spouse an instant believer.&quot;
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted">— Father, Abu Dhabi</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-fade-b">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight reveal" data-wait>FAQ</h2>
            <div className="mt-8 space-y-4">
              <details className="rounded-xl border border-line p-5 group reveal bg-white" data-wait>
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
                  How does Myros remove data from broker sites?
                  <span className="ml-4 text-muted group-open:rotate-90 transition">›</span>
                </summary>
                <p className="mt-3 text-sm text-muted">We send verified opt-out and deletion requests to data brokers, then track confirmations. Each action is logged with a receipt you can export.</p>
              </details>

              <details className="rounded-xl border border-line p-5 group reveal bg-white" data-wait style={{transitionDelay: '0.08s'}}>
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
                  What does &quot;monitor&quot; mean?
                  <span className="ml-4 text-muted group-open:rotate-90 transition">›</span>
                </summary>
                <p className="mt-3 text-sm text-muted">We run weekly checks across sources we&apos;ve cleared. If data reappears, we re-remove and add a new receipt.</p>
              </details>

              <details className="rounded-xl border border-line p-5 group reveal bg-white" data-wait style={{transitionDelay: '0.16s'}}>
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
                  Is this safe for children&apos;s data?
                  <span className="ml-4 text-muted group-open:rotate-90 transition">›</span>
                </summary>
                <p className="mt-3 text-sm text-muted">Yes. We minimize data, encrypt at rest/in transit, and you can request a full export or deletion any time.</p>
              </details>

              <details className="rounded-xl border border-line p-5 group reveal bg-white" data-wait style={{transitionDelay: '0.24s'}}>
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
                  Which countries do you support?
                  <span className="ml-4 text-muted group-open:rotate-90 transition">›</span>
                </summary>
                <p className="mt-3 text-sm text-muted">We&apos;re focused on MENA &amp; Asia first, with growing broker coverage and local workflows. Tell us your country in the waitlist.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="waitlist">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="rounded-2xl border border-line p-8 reveal bg-white" data-wait>
              <h3 className="text-xl font-semibold tracking-tight">Get early access</h3>
              <p className="mt-2 text-sm text-muted">Join the waitlist to try the private beta. We&apos;ll invite families in small cohorts.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3" action="https://formspree.io/f/xzzaweqp" method="POST">
                <input className="flex-1 rounded-full border border-black/10 px-4 py-3" type="email" name="email" placeholder="you@example.com" required />
                <button className="rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-900 transition" type="submit">Join waitlist</button>
              </form>
              <p className="mt-2 text-xs text-muted">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-muted">
            <div>© <YearUpdater /> Myros.ai</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-ink" href="#">Privacy</a>
              <a className="hover:text-ink"
                 href="mailto:heymantri@gmail.com?subject=Website%20Contact%20Request">
                Contact
              </a>
            </div>
          </div>
        </footer>

        <ScrollReveal />
    </div>
  );
}