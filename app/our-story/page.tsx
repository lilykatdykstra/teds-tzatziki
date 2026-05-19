import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story | Ted's Premium Tzatziki",
  description: "The story of Ted Velman, Greek immigrant and founder of Ted's Coney Island in Des Moines.",
};

export default function OurStoryPage() {
  return (
    <article>
      <section className="border-b border-sand bg-gradient-to-b from-sky-light/50 to-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-coney-red">
                Our Story
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight text-stone sm:text-5xl">
                Hero tagline
              </h1>
            </div>
            <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-xl">
              <Image
                src="/images/ted.jpg"
                alt="Ted"
                width={500}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-6 text-lg leading-relaxed text-stone/80">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>

        <blockquote className="mt-12 rounded-r-2xl border-l-4 border-olive bg-white p-8 shadow-sm">
          <p className="font-display text-xl italic text-stone">
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold text-olive">
            — The Ted&apos;s Family
          </footer>
        </blockquote>
      </section>
    </article>
  );
}
