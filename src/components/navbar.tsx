import Link from "next/link"

function Navbutton(props: { pageName: String }) {
	let fileName: string

	if (props.pageName === 'Home') {
		fileName = "."
	} else {
		fileName = props.pageName.toLowerCase()
	}
	return (
		<Link href={"./" + fileName} className="text-4xl p-6">{props.pageName}</Link>
	)
}

export default function Navbar() {
	const pages: string[] = ['Home', 'To-Do']

	return (
		<header className="bg-sky-800 text-white border-b-2 border-white h-16 grid grid-flow-col grid-cols-4">
			<div className="border-r-2 border-white"></div>
			<div className="justify-center items-center border-r-2 border-white h-full w-full">
				<nav >
					{pages.map((page) => <Navbutton pageName={page} key={page} />)}
				</nav>
			</div>
			<div className="border-r-2 border-white">
			</div>
			<div className="">
			</div>
		</header>
	)
}