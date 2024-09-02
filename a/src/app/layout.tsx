// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'WordPress Alternative',
  description: 'A blog using Next.js and Netlify CMS',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Blog</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Blog</p>
        </footer>
      </body>
    </html>
  );
}
