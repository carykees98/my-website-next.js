import { Footer, Header } from './index'
import Head from 'next/head'

function To_do() {
	return (
		<div className="flex h-screen">

		</div>
	)
}

export default function Page() {
	return (
		<>
			<Head>
				<title>To-Do List</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header currentPage='to-do' />
			<To_do />
			<Footer />
		</>
	)
}