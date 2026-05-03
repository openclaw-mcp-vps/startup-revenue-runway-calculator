import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Revenue Runway Calculator — Know Your Startup\'s Survival Timeline',
  description: 'Connect your bank accounts and get real-time burn rate analysis, revenue growth tracking, and scenario-based runway predictions. Built for early-stage founders.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d4be9bc3-9fb8-49c1-baeb-50e29b43d68e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
