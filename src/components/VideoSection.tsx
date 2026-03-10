const VideoSection = () => {
  return (
    <section id="video" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Watch Us Surf
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Latest Video
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Your coach in action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card aspect-video">
          <iframe
            src="https://www.youtube.com/embed/cZIjdCa-yJs"
            title="Gabriel Ribeiro Surfing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
