import Logo from "../Logo"

function Footer() {
    return (
        <section className="flex items-center justify-between px-10 py-8 bg-gray-400 border-t-2 border-t-black">
            <Logo width="300px" className="text-xl uppercase" />
            <p className="text-base">&copy; Copyright 2025. All Rights Reserved | <a target="_blank" href="https://www.instagram.com/vitsites" className="font-bold">VITSITES</a></p>
        </section>
    )
}
export default Footer