import Link from "next/link"

function Navbutton(props: { pageName: String }) {
	let fileName: string

	if (props.pageName === 'Home') {
		fileName = ""
	} else {
		fileName = props.pageName.toLowerCase()
	}
	return (
		<li className="navButton"><Link href={"./" + fileName}>{props.pageName}</Link></li>
	)
}

export function Navbar() {
	/* const [profileShown, setProfileShown] = useState(false) */

	const pages: string[] = ['Home', 'To-Do']

	return (
		<header className="bg-slate-600 text-white border-b-2 border-white h-fit grid grid-flow-col grid-cols-2">
			<ul className="list-none w-fit justify-center px-">
				{pages.map((page) => <Navbutton pageName={page} key={page} />)}
			</ul>
			<div className="flex float-right content-center">
				<button className="float-right w-fit" /* onClick={() => setProfileShown(!profileShown)} */>Profile</button>
			</div>
		</header>
	)
}