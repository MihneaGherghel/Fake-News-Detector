import logoImage from "../../public/logo.png"
export default function Header({title,subtitle}) {
    return (
        <>
            <img src={logoImage} alt="Logo Image" className="w-40 h-40"/>
            <p className="text-3xl text-gray-700 font-bold">{title}</p>
            <p className="text-base mt-3">{subtitle}</p>
        </>
    )
}