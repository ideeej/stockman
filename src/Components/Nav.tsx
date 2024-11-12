import Link from "next/link";

export default function Nav() {
    return (
        <>
            <nav className="
            flex justify-items-center text-center
            ">
                <Link className="flex-col grow p-2 text-slate-950 bg-slate-50 justify-items-center" href={"/scan"}>
                    <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#000000"></path></g></svg>
                    Escanear
                </Link>
                <Link className="flex-col grow p-2 text-slate-950 bg-slate-50 justify-items-center" href={"/"}>
                    <svg width="32px" height="32px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#000000"></path> </g></svg>
                    Home
                </Link>
                <Link className="flex-col grow p-2 text-slate-950 bg-slate-50 justify-items-center" href={"/list"}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path opacity="0.5" d="M20 12L4 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 17L4 17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                    Listagem
                </Link>
            </nav>
        </>
    )
}