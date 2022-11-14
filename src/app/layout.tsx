import { Navbar } from "../components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://kit.fontawesome.com/425a90f7fa.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
