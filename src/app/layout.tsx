import "../../styles/globals.css";
import Navbar from "../components/navbar";

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script src="https://kit.fontawesome.com/425a90f7fa.js" crossOrigin="anonymous"></script>
      </head>
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
