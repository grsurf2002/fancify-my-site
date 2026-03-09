const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg font-bold tracking-wider text-foreground">
          UPGRADE
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Upgrade Surfing. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/hugodsc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/watch?app=desktop&v=cZIjdCa-yJs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
