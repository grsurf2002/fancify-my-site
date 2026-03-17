import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import reviewPhoto1 from "@/assets/review-photo-1.jpeg";
import reviewPhoto2 from "@/assets/review-photo-2.jpeg";
import reviewPhoto3 from "@/assets/review-photo-3.jpeg";
import reviewPhoto4 from "@/assets/review-photo-4.jpeg";

const paulPhotos = [reviewPhoto1, reviewPhoto2, reviewPhoto3, reviewPhoto4];

const reviews = [
  {
    name: "Paul Tavares",
    text: "Started training last year with Gabriel and Hugo and improved more in a year than in the last 10 surfing by myself! These guys are amazing and they push you with knowledge and experience to give you the confidence you need to get a bit better every session 👍👍",
    photos: paulPhotos,
  },
  {
    name: "Marina Dias",
    text: "I've been taking surf lessons with Gabriel and Hugo for about a month now, and I couldn't recommend them more. They're knowledgeable, patient, and make every session both enjoyable and effective. I've already seen a big improvement in my surfing. If you're looking for great coaches who make you feel confident in the water, they're the ones!",
  },
  {
    name: "Yael Manor",
    text: "Surfing is definitely challenging (especially in mid 40s) but these guys make super exciting, and fun. They have plenty of experience and genuinely love what they're doing, which makes every lesson both professional and personal. They are great surfers themselves, and tailor the technical feedback to each student and the day's conditions. Between the on-beach instruction and the detailed video analysis, they're 100% invested in your progress. Thanks to them, I'm catching epic waves and loving every minute of it.",
  },
  {
    name: "Rory White",
    text: "Gabriel & Hugo are the pure surf energy, sharing their passion for the ocean & the local community. Their advice always helps to expand my awareness in the ocean, learning the right mindset & technique, and have more fun! Thanks lads",
  },
  {
    name: "Roman Van Loo",
    text: "Joined their coaching about half a year ago and it's been a very pleasant experience. The vibe is great, the tips they give are very helpful and I'm happy with the progress I've made with them. Definitely recommend!",
  },
  {
    name: "Gonçalo Meneses",
    text: "Best coaching in town!! 💪💪💪",
  },
  {
    name: "Tommaso Pianta",
    text: "Trained with Hugo and Gabriel for a few months. Seeing yourself on video and having immediate and good feedback is key to improve your surfing. If you're feeling stuck I would totally recommend Upgrade to step up your surfing skills",
  },
  {
    name: "Mads Thiele",
    text: "Gabriel and Hugo are really the best surf coaches in Ericeira. No matter your level they make you improve every session. And really awesome guys as well :)",
  },
  {
    name: "Yevgeniy Polev",
    text: "Have been training with Hugo and Gabriel for over a year now. I'm more than happy with the progress I've made with them. If you're ready to commit for at least a couple of months you'll see how your confidence and skills grow. Definitely recommend!",
  },
  {
    name: "Leon Braun",
    text: "I had many great surf sessions. Gabriel and Hugo have been a great help. The video analysis is a game changer.",
  },
  {
    name: "Pedro Henrique Nascimento e Silva",
    text: "Treinos de surf com vídeo analise, os treinadores são super profissionais e confiáveis. Os treinos com an Upgrade me estão a levar a outro nível, com feedbacks precisos e boas ondas. Recomendo!",
  },
];

const PhotoCarousel = ({ photos }: { photos: string[] }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-[220px] md:h-[280px] rounded-lg overflow-hidden mb-4">
      <img
        src={photos[current]}
        alt="Surf coaching moment"
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 border border-border flex items-center justify-center backdrop-blur-sm"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 border border-border flex items-center justify-center backdrop-blur-sm"
            aria-label="Next photo"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {photos.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ReviewCard = ({ review }: { review: { name: string; text: string; photos?: string[] } }) => (
  <div className="min-w-[300px] md:min-w-[400px] max-w-[400px] shrink-0 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
    {review.photos && <PhotoCarousel photos={review.photos} />}
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      "{review.text}"
    </p>
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
        <span className="text-sm font-bold text-primary">
          {review.name.charAt(0)}
        </span>
      </div>
      <span className="font-heading text-sm font-semibold text-foreground">
        {review.name}
      </span>
    </div>
  </div>
);

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -420 : 420;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-wider text-foreground text-center uppercase">
          Reviews
        </h2>
        <p className="mt-4 text-muted-foreground text-center text-lg">
          Google Reviews — 5.0 ⭐
        </p>

        <div className="relative mt-12">
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
