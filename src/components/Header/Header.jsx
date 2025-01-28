import { Container, Logo, LogoutBtn } from "../index"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        }
    ]

    const [navToggle, setNavToggle] = useState(false)

    return (
        <header className="py-3 shadow bg-blue-500 text-white">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="70px" className="text-xl uppercase"/>
                        </Link>
                    </div>
                    {/* <div> */}
                        <button className="text-2xl transform rotate-90 sm:hidden" onClick={(() => {setNavToggle(!navToggle)})}>|||</button>

                        <ul className={`flex flex-col items-center gap-3 absolute right-full top-0 bg-blue-500 text-white p-4 rounded-lg navbar duration-1000 h-screen w-3/4 sm:relative sm:h-fit sm:flex-row sm:right-0 ${navToggle ? "translate-x-full" : "translate-x-0"}`}>

                            <div className="w-full flex justify-between items-center sm:hidden">
                                <Logo className={`w-full text-2xl`} />
                                <button className="text-xl text-red-500 bg-white rounded px-2" onClick={() => {setNavToggle(false)}}>X</button>
                            </div>

                            <div className="w-full mt-10 flex flex-col items-center gap-3 mb-auto sm:flex-row sm:mt-0 sm:w-fit sm:absolute sm:right-0">
                                {navItems.map((item) => item.active ? (
                                    <li key={item.name} className="w-full sm:w-fit" onClick={() => {setNavToggle(false)}}>
                                        <NavLink to={item.slug} className={({isActive}) => `inline-block px-6 py-2 duration-200 rounded-lg w-full sm:w-fit ${isActive ? "bg-white text-blue-500 font-bold" : ""}`}>{item.name}</NavLink>
                                    </li>
                                ) : null
                                )}
                                {authStatus && (
                                    <li className="w-full bg-red-500 rounded sm:w-fit" onClick={() => {setNavToggle(false)}}>
                                        <LogoutBtn />
                                    </li>
                                )}
                            </div>
                        </ul>
                    {/* </div> */}
                </nav>
            </Container>
        </header>
    )
}
export default Header