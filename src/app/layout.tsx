import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supratmos - Blockchain Made Simple',
  description: 'Supratmos brings the power of Supra L1 blockchain directly to Telegram. Create wallets, manage tokens, and perform DeFi operations through simple chat commands.',
  keywords: ['Telegram Bot', 'Supra L1', 'Blockchain', 'DeFi', 'Cryptocurrency', 'Wallet'],
  authors: [{ name: 'Supratmos' }],
  openGraph: {
    title: 'Supratmos - Blockchain Made Simple & Accessible',
    description: 'Brings DeFi functionality directly into Telegram chats. Create wallets, manage tokens, and perform operations through simple chat commands.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supratmos - Blockchain Made Simple',
    description: 'Brings DeFi functionality directly into Telegram chats',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}