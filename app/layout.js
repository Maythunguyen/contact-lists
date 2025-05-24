
import "./globals.css";


export const metadata = {
  title: "Contact List App",
  description: "A simple contact list application built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
