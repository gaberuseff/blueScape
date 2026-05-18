import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 8.25V7.1c0-.78.51-1.1 1.22-1.1H16V3h-1.9C11.86 3 10.5 4.44 10.5 6.65v1.6H8.75V11h1.75v10h3V11h2.1l.4-3z" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 8.5s-.18-1.31-.73-1.88c-.7-.73-1.48-.73-1.84-.78C15.84 5.5 12 5.5 12 5.5h-.01s-3.84 0-6.43.34c-.36.05-1.14.05-1.84.78C3.18 7.19 3 8.5 3 8.5S2.82 10.03 2.82 11.56v.88C2.82 13.97 3 15.5 3 15.5s.18 1.31.73 1.88c.7.73 1.62.71 2.03.79 1.46.14 6.24.33 6.24.33s3.84 0 6.43-.34c.36-.05 1.14-.05 1.84-.78.55-.57.73-1.88.73-1.88s.18-1.53.18-3.06v-.88c0-1.53-.18-3.06-.18-3.06Zm-8.02 6.17V9.5l4.05 2.59-4.05 2.58Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4.2a7.8 7.8 0 0 0-6.71 11.8L4.2 20l4.14-1.07A7.8 7.8 0 1 0 12 4.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 8.95c.18-.4.37-.41.55-.41h.44c.15 0 .39-.06.6.44.22.51.74 1.78.8 1.9.07.12.12.27.02.44-.1.16-.15.26-.29.4-.14.14-.3.31-.43.42-.14.12-.3.25-.13.55.17.3.76 1.25 1.64 2.02 1.12 1 1.96 1.33 2.24 1.48.28.15.44.13.61-.07.17-.2.72-.83.92-1.11.2-.28.4-.24.66-.14.26.1 1.66.78 1.95.92.29.14.48.21.55.33.08.12.08.71-.19 1.4-.27.69-1.57 1.35-2.16 1.42-.59.07-1.07.15-3.58-.89-3.03-1.25-4.98-4.32-5.13-4.52-.15-.2-1.22-1.61-1.22-3.08 0-1.47.76-2.18 1-2.48Z"
        fill="currentColor"
      />
    </svg>
  );
}