export default function HamburgerButton({toggleMenu}){
    return (
        <button onClick={toggleMenu} className=" z-50 sm:hidden absolute top-4 right-4 flex flex-col items-end justify-center w-12 h-12 bg-transparent border-none focus:outline-none">
            <span className="w-12 h-[3.2px] bg-black mb-1 rounded"></span>
            <span className="w-12 h-[3.2px] bg-black mb-1 rounded"></span>
            <span className="w-12 h-[3.2px] bg-black mb-1 rounded"></span>
        </button>
    )
}