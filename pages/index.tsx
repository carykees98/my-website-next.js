import Head from 'next/head'
import Link from 'next/link'

export function Header(props: { currentPage: string }) {
  return (
    <header className="bg-slate-600 text-white border-b-2 border-white justify-center h-fit">
      <ul className="list-none">
        <li className="inline-block p-2 m-1 text-3xl rounded-xl hover:border-white hover:border-2">
          <Link href=".">Home</Link>
        </li>
        <li className="inline-block p-3 text-3xl">
          <Link href="to-do">To-Do</Link>
        </li>
      </ul>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-800 border-t-2 border-black text-white">
      footers
    </footer>
  )
}

export default function Home() {
  let currentPage: string = 'Home'

  return (
    <>
      <Head>
        <title>{currentPage}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header currentPage={currentPage} />

      <div className="flex bg-slate-800 text-white">
        <Link href="to-do">This is a test</Link>
      </div>

      <Footer />
    </>
  )
}
