import "./globals.css";


export const metadata = {
  title: "Valentines 2025",
  description: "Đại sent you a letter!",
  metadataBase: new URL('https://cuaa.fn.run.place'),
  openGraph: {
    images: "heart.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
