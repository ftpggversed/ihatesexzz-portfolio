// app/layout.tsx
import './globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'IHateSexzz Portfolio',
  // …
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* attribute="class" tells next-themes to toggle a `class="dark"` on <html> */}
      <ThemeProvider attribute="class">
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
