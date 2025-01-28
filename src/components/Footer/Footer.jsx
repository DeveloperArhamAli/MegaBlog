import Logo from "../Logo"

function Footer() {
    return (
        <section className="flex flex-col items-center justify-between px-3 py-2 bg-gray-400 border-t-2 border-t-black">
            <Logo width="300px" className="text-xl uppercase" />
            <p className="text-base text-center">Copyright &copy; 2025 by <a href="https://mega-blog-arham-alis-projects.vercel.app" target="_blank" className="font-bold">MEGABLOG</a> | All Rights Reserved | Powered by <a target="_blank" href="https://www.instagram.com/vitsites" className="font-bold">VITSITES</a></p>
        </section>
    )
}
export default Footer