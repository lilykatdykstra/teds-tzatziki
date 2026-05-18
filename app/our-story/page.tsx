import type { Metadata } from "next";
import Image from "next/image";
import { getStory } from "@/lib/sanity/api";
import { getSanityImageUrl } from "@/lib/sanity/image";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const story = await getStory();
  return {
    title: story.seoTitle ?? "Our Story | Ted's Premium Tzatziki",
    description: story.seoDescription,
  };
}

function StoryBody({ body }: { body: string }) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-6 text-lg leading-relaxed text-stone/80">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </div>
  );
}

export default async function OurStoryPage() {
  const story = await getStory();
  const founderPhoto = story.founderPhoto
    ? getSanityImageUrl(story.founderPhoto, 700)
    : "/images/restaurant-sign.png";

  return (
    <article>
      <section className="border-b border-sand bg-gradient-to-b from-sky-light/50 to-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              {story.sectionEyebrow && (
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coney-red">
                  {story.sectionEyebrow}
                </p>
              )}
              <h1 className="mt-3 font-display text-4xl leading-tight text-stone sm:text-5xl">
                {story.title}
              </h1>
            </div>
            <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-xl">
              <Image
                src={founderPhoto}
                alt={story.founderPhotoAlt ?? "Ted's founder and restaurant"}
                width={500}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <StoryBody body={story.body} />

        {story.quote && (
          <blockquote className="mt-12 rounded-r-2xl border-l-4 border-olive bg-white p-8 shadow-sm">
            <p className="font-display text-xl italic text-stone">
              &ldquo;{story.quote}&rdquo;
            </p>
            {story.quoteAttribution && (
              <footer className="mt-4 text-sm font-semibold text-olive">
                — {story.quoteAttribution}
              </footer>
            )}
          </blockquote>
        )}
      </section>
    </article>
  );
}
