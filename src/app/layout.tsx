import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magic Internet Money",
  description: "Magic Internet Money",
  openGraph: {
    title: "Magic Internet Money",
    description: "Magic Internet Money",
    images: ['/Twitter_Banner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Magic Internet Money",
    description: "Magic Internet Money",
    images: ['/Twitter_Banner.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Standard favicon that browsers look for by default */}
        <link rel="icon" href="/Pfp_.png" />
        
        {/* PNG favicons in different formats */}
        <link rel="icon" type="image/png" href="/Pfp_.png" />
        <link rel="shortcut icon" type="image/png" href="/Pfp_.png" />
        
        {/* Force browsers to reload the favicon */}
        <link rel="icon" type="image/png" href="/Pfp_.png?v=2" />
        
        {/* Force desktop layout at fixed width for all devices */}
        <meta name="viewport" content="width=1280, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#1a1030" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Essential Meta Tags for Social Sharing */}
        <meta property="og:title" content="Magic Internet Money" />
        <meta property="og:description" content="Magic Internet Money" />
        <meta property="og:image" content="https://www.mimbnb.com//Twitter_Banner.png" />
        <meta property="og:url" content="https://www.mimbnb.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Magic Internet Money" />
        <meta name="twitter:description" content="Magic Internet Money" />
        <meta name="twitter:image" content="https://www.mimbnb.com/Twitter_Banner.png" />
        
        {/* Simple mobile detection - only adds class without forcing desktop layout */}
        <Script id="mobile-detection" strategy="beforeInteractive">
          {`
            (function() {
              if (typeof window !== 'undefined') {
                const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                if (isMobile) {
                  document.documentElement.classList.add('is-mobile');
                }

                window.addEventListener('resize', function() {
                  const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  if (isMobile) {
                    document.documentElement.classList.add('is-mobile');
                  } else {
                    document.documentElement.classList.remove('is-mobile');
                  }
                });
              }
            })();
          `}
        </Script>
        
        {/* Link to external mobile CSS file */}
        <link rel="stylesheet" href="/mobile-fix.css" />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
