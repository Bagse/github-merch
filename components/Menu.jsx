import Link from "next/link"

function Menu() {
  return (
    <div className="bg-slate-800 ">
        <nav className="flex items-center justify-around px-5 py-3 shadow shadow-[white]">
        <div className="flex gap-5 text-lg font-semibold">
            <Link href={"/"}>
                <li className="hover:text-sky-500">Home</li>
            </Link>
            <Link href={"/store"}>
                <li className="hover:text-sky-500">Store</li>
            </Link>
            <Link href={"/faq"}>
                <li className="hover:text-sky-500">FAQ</li>
            </Link>
        </div>
        <div className="text-lg font-semibold hover:text-sky-500">
            <a href="#">Cart (0)</a>
        </div>
    </nav>
    </div>
    
  )
}

export default Menu