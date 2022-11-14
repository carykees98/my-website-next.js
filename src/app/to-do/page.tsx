import Head from 'next/head'

function To_do() {

	const notes: { title: string, content: string }[] = []

	return (
		<div className="flex h-screen">
			<div id="add">

			</div>
			<div id="notes">
				{notes.map((note) => <Sticky_note title={note.title} content={note.content} />)}
			</div>
		</div>
	)
}

function Sticky_note(props: { title: string, content: string }) {
	return (
		<div className="bg-yellow-400 w-100 h-100 grid grid-rows-2">
			<div className="text-black h-fit max-h-4">
				<b>{props.title}</b>
			</div>
			<div className="text-black">
				{props.content}
			</div>
		</div>
	)
}

export default function Page() {
	let currentPage: string = 'To-Do'

	return (
		<>
			<Head>
				<title>To-Do List</title>
			</Head>
			<To_do />
		</>
	)
}