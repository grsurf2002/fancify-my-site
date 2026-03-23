import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import reviewPhoto1 from "@/assets/review-photo-1.jpeg";
import reviewPhoto2 from "@/assets/review-photo-2.jpeg";
import reviewPhoto3 from "@/assets/review-photo-3.jpeg";
import reviewPhoto4 from "@/assets/review-photo-4.jpeg";
import yaelPhoto1 from "@/assets/review-yael-1.jpeg";
import yaelPhoto2 from "@/assets/review-yael-2.jpeg";
import yaelPhoto3 from "@/assets/review-yael-3.jpeg";
import yaelPhoto4 from "@/assets/review-yael-4.jpeg";
import pedroPhoto1 from "@/assets/review-pedro-1.jpeg";
import pedroPhoto2 from "@/assets/review-pedro-2.jpeg";
import pedroPhoto3 from "@/assets/review-pedro-3.jpeg";
import marinaPhoto1 from "@/assets/review-marina-1.jpeg";
import nickPhoto1 from "@/assets/review-nick-1.jpeg";
import romanPhoto1 from "@/assets/review-roman-1.jpeg";
import romanPhoto2 from "@/assets/review-roman-2.jpeg";
import romanPhoto3 from "@/assets/review-roman-3.jpeg";
import martijnPhoto1 from "@/assets/review-martijn-1.jpeg";
import martijnPhoto2 from "@/assets/review-martijn-2.png";
import martijnPhoto3 from "@/assets/review-martijn-3.jpeg";
import martijnNewPhoto1 from "@/assets/review-martijn-new-1.png";
import martijnNewPhoto2 from "@/assets/review-martijn-new-2.jpeg";
import johanensPhoto1 from "@/assets/review-johanens-1.jpeg";
import johanensPhoto2 from "@/assets/review-johanens-2.jpeg";
import nickNewPhoto1 from "@/assets/review-nick-new-1.jpeg";
import nickNewPhoto2 from "@/assets/review-nick-new-2.jpeg";
import filippoPhoto1 from "@/assets/review-filippo-1.jpeg";
import filippoPhoto2 from "@/assets/review-filippo-2.jpeg";
import nicoPhoto1 from "@/assets/review-nico-1.jpeg";
import nicoPhoto2 from "@/assets/review-nico-2.jpeg";
import joaquimPhoto1 from "@/assets/review-joaquim-1.jpeg";
import davidePhoto1 from "@/assets/review-davide-1.jpeg";
import davidePhoto2 from "@/assets/review-davide-2.jpeg";
import roryPhoto1 from "@/assets/review-rory-1.jpeg";
import madsPhoto1 from "@/assets/review-mads-1.jpeg";
import yevgeniyPhoto1 from "@/assets/review-yevgeniy-1.png";
import yevgeniyPhoto2 from "@/assets/review-yevgeniy-2.jpeg";
import yevgeniyPhoto3 from "@/assets/review-yevgeniy-3.jpeg";
import manuelJorgePhoto1 from "@/assets/review-manuel-jorge.jpeg";

const paulPhotos = [reviewPhoto1, reviewPhoto2, reviewPhoto3, reviewPhoto4];
const yaelPhotos = [yaelPhoto1, yaelPhoto2, yaelPhoto3, yaelPhoto4];
const pedroPhotos = [pedroPhoto1, pedroPhoto2, pedroPhoto3];
const marinaPhotos = [marinaPhoto1];
const nickPhotos = [nickPhoto1];
const romanPhotos = [romanPhoto2, romanPhoto1, romanPhoto3];
const martijnPhotos = [martijnPhoto1, martijnPhoto2, martijnPhoto3];
const martijnNewPhotos = [martijnNewPhoto1, martijnNewPhoto2];
const johanensPhotos = [johanensPhoto1, johanensPhoto2];
const nickNewPhotos = [nickNewPhoto1, nickNewPhoto2];
const filippoPhotos = [filippoPhoto1, filippoPhoto2];
const nicoPhotos = [nicoPhoto1, nicoPhoto2];
const joaquimPhotos = [joaquimPhoto1];
const davidePhotos = [davidePhoto1, davidePhoto2];
const roryPhotos = [roryPhoto1];
const madsPhotos = [madsPhoto1];
const yevgeniyPhotos = [yevgeniyPhoto1, yevgeniyPhoto3];
const manuelJorgePhotos = [manuelJorgePhoto1];

const reviews = [
  // Reviews with photos first
  {
    name: "Paul Tavares",
    text: "Started training last year with Gabriel and Hugo and improved more in a year than in the last 10 surfing by myself! These guys are amazing and they push you with knowledge and experience to give you the confidence you need to get a bit better every session 👍👍",
    photos: paulPhotos,
  },
  {
    name: "Yael Manor",
    text: "Surfing is definitely challenging (especially in mid 40s) but these guys make super exciting, and fun. They have plenty of experience and genuinely love what they're doing, which makes every lesson both professional and personal. They are great surfers themselves, and tailor the technical feedback to each student and the day's conditions. Between the on-beach instruction and the detailed video analysis, they're 100% invested in your progress. Thanks to them, I'm catching epic waves and loving every minute of it.",
    photos: yaelPhotos,
  },
  {
    name: "Roman Van Loo",
    text: "Joined their coaching about half a year ago and it's been a very pleasant experience. The vibe is great, the tips they give are very helpful and I'm happy with the progress I've made with them. Definitely recommend!",
    photos: romanPhotos,
  },
  {
    name: "Davide Fontana",
    text: "Just finished an amazing month of surf coaching and video analysis, mainly in Ericeira and surrounding areas, with a short but special weekend trip to the Algarve. The combination of in-water coaching and detailed video feedback really helped me understand my mistakes and improve session after session. Huge thanks to the amazing coaches Gabriel and Hugo for their support, precision, and constant motivation 🤙 The Algarve trip wasn't just about surfing — it was also about the people. We created real friendships and connections that made the whole experience even more meaningful and reminded me how much surfing is about sharing moments. I've seen real progress in my technique, positioning, and overall confidence in the water. Highly recommend this experience to anyone who wants to level up their surfing!",
    photos: davidePhotos,
  },
  {
    name: "Yevgeniy Polev",
    text: "Have been training with Hugo and Gabriel for over a year now. I'm more than happy with the progress I've made with them. If you're ready to commit for at least a couple of months you'll see how your confidence and skills grow. Definitely recommend!",
    photos: yevgeniyPhotos,
  },
  {
    name: "Pedro Henrique Nascimento e Silva",
    text: "Treinos de surf com vídeo analise, os treinadores são super profissionais e confiáveis. Os treinos com an Upgrade me estão a levar a outro nível, com feedbacks precisos e boas ondas. Recomendo!",
    photos: pedroPhotos,
  },
  {
    name: "Martijn van Heeswijk",
    text: "Surf coaching with Gabriel and Hugo helped me to progress significantly faster as they identify (basic) flaws in your surfing technique and have actionable tips & advice on how to improve on those. They are very knowledgeable and experienced surfers themselves and genuinely care to make you progress in the best and fastest way possible. Also very fun guys to hang out with - would highly recommend to anyone who wants to take their surfing to the next level",
    photos: martijnNewPhotos,
  },
  {
    name: "Johanens Hirsch",
    text: "I had the pleasure to work with both, Hugo and Gabriel several times when I'm traveling to Portugal. They have a great attitude, fun groups and especially good coaching style. Especially together they are a really good Team and I could see my surfing improving step by step. Would highly recommend and really look forward to train with you guys again!",
    photos: johanensPhotos,
  },
  {
    name: "Nick van Dijk",
    text: "Started the coaching with upgrade last year and after a period of travelling I came back because I liked it a lot. The tips and video analysis are very helpful and I feel a lot of improvement in my surfing. Also the people in the vibe in the group is always good and I really enjoy the sessions out together so I would definitely recommend this to anyone staying in the area.",
    photos: nickNewPhotos,
  },
  {
    name: "Filippo Galli",
    text: "I have been coaching with them for more than a year. Moving from intermediate towards more and more advanced. Focusing on keeping more speed on the waves, cutbacks and beginning of snaps. Hugo and Gabriel really helped me improving. I love their approach to surfing, and how they teach breaking down things into easier steps. Thank you guys and let's keep surfing better! 🤙",
    photos: filippoPhotos,
  },
  {
    name: "Ni Co",
    text: "I had an excellent experience with Upgrade Surfing. The coaching is highly professional, structured, and tailored to individual skill levels. The instructors provide clear, detailed feedback that significantly helps improve technique, confidence, and overall performance in the water. What stands out most is their serious and committed approach to progression. Each session is purposeful, with a strong focus on measurable improvement rather than just casual practice. This makes it an ideal choice for anyone who is genuinely interested in advancing their surfing skills. Thanks to their guidance, I have seen a clear improvement in my surfing ability. I would highly recommend Upgrade Surfing to anyone looking for high-quality, professional coaching and real progress.",
    photos: nicoPhotos,
  },
  {
    name: "Joaquim Cassapo",
    text: "Loved to grow up my surfing with this guys, pretty good surfers, also pretty good coaching!! If you wanna learn more and improve your surfing this guys are the best option in town for sure!! 5 stars",
    photos: joaquimPhotos,
  },
  {
    name: "Marina Dias",
    text: "I've been taking surf lessons with Gabriel and Hugo for about a month now, and I couldn't recommend them more. They're knowledgeable, patient, and make every session both enjoyable and effective. I've already seen a big improvement in my surfing. If you're looking for great coaches who make you feel confident in the water, they're the ones!",
    photos: marinaPhotos,
  },
  {
    name: "Rory White",
    text: "Gabriel & Hugo are the pure surf energy, sharing their passion for the ocean & the local community. Their advice always helps to expand my awareness in the ocean, learning the right mindset & technique, and have more fun! Thanks lads",
    photos: roryPhotos,
  },
  {
    name: "Mads Thiele",
    text: "Gabriel and Hugo are really the best surf coaches in Ericeira. No matter your level they make you improve every session. And really awesome guys as well :)",
    photos: madsPhotos,
  },
  {
    name: "Manuel Jorge",
    text: "Hands down the best surf lessons in Ericeira. Gabriel and Hugo make learning surfing feel effortless and fun. They have this amazing energy that makes everyone comfortable, and the video feedback with such clear footage really helped me correct my technique fast. Every session felt like a perfect mix of coaching and good vibes.",
    photos: manuelJorgePhotos,
  },
  // Reviews without photos
  {
    name: "Manuel Jorge",
    text: "Hands down the best surf coach in Ericeira. I improved more in a few sessions than I ever did before. From the first session, everything felt different from a typical surf lesson. It wasn't just about getting in the water. There was a clear focus on progression, technique, and really understanding what I was doing and why. The coaching was super personalized, and you can tell there's a lot of experience behind it. What I really appreciated was how each session built on the previous one. Small adjustments made a huge difference, and I started catching waves more consistently and with much more confidence. Also, the choice of surf spots was always spot-on for the conditions and my level, which made every session feel productive and safe. If you're looking for surf lessons or surf coaching in Ericeira and actually want to improve (not just stand on a board once), I can't recommend this enough.",
  },
  {
    name: "Tommaso Pianta",
    text: "Trained with Hugo and Gabriel for a few months. Seeing yourself on video and having immediate and good feedback is key to improve your surfing. If you're feeling stuck I would totally recommend Upgrade to step up your surfing skills",
  },
  {
    name: "Leon Braun",
    text: "I had many great surf sessions. Gabriel and Hugo have been a great help. The video analysis is a game changer.",
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
  <div className="w-full min-w-full md:min-w-[400px] max-w-full md:max-w-[400px] shrink-0 rounded-xl border border-border bg-card p-4 md:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] snap-start">
    {review.photos && <PhotoCarousel photos={review.photos} />}
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4 break-words">
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
    <section id="reviews" className="py-20 px-2 md:px-4">
      <div className="container">
        <p className="text-primary text-sm md:text-base font-semibold tracking-widest uppercase text-center mb-2">
          Trusted by Surfers
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-wider text-foreground text-center uppercase">
          Reviews
        </h2>
        <p className="mt-4 text-muted-foreground text-center text-lg">
          Google Reviews — 5.0 ⭐
        </p>

        <div className="relative mt-12">
          <button
            onClick={() => scroll("left")}
            className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card border border-border items-center justify-center shadow-lg transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2 snap-x snap-mandatory md:snap-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card border border-border items-center justify-center shadow-lg transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
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
