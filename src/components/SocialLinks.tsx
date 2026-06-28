import { X } from "lucide-react";

const SIZE = 18;

function InstagramIcon() {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.3 1.9 1.5 3.3 3.5 3.6v2.7c-1.3 0-2.5-.4-3.5-1.1v6.6c0 3-2.4 5.2-5.2 5.2-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2.4 0 .8 0 1.1.1v2.8a2.4 2.4 0 0 0-1.1-.3 2.4 2.4 0 1 0 0 4.8c1.3 0 2.4-1 2.5-2.3V3h2.7Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.3v5.4l4.6-2.7-4.6-2.7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H9.1v2.8h2.4V21h3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11 16.5v-6M11 13c0-1.4 1-2.5 2.4-2.5s2.1 1.1 2.1 2.5v3.5" />
    </svg>
  );
}

const LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/proton.robotics.iq", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@proton.robotics.iq", Icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@proton_robotics_iq", Icon: YouTubeIcon },
  { label: "Facebook", href: "https://www.facebook.com/Proton.Robotics.iq", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/proton-team/", Icon: LinkedInIcon },
  { label: "X", href: "https://x.com/proton_robotics", Icon: () => <X size={SIZE} strokeWidth={1.6} /> },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-ink/45 hover:text-accent transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
