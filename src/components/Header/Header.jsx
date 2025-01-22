import { Container, Logo, LogoutBtn } from "../index"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

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

    return (
        <header className="py-3 shadow bg-blue-500 text-white">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="70px" className="text-xl uppercase"/>
                        </Link>
                    </div>
                    <ul className="flex items-center gap-3">
                        {navItems.map((item) => item.active ? (
                            <li key={item.name}>
                                <NavLink to={item.slug} className={({isActive}) => `inline-block px-6 py-2 duration-200 rounded-lg ${isActive ? "bg-white text-blue-500 font-bold" : ""}`}>{item.name}</NavLink>
                            </li>
                        ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
export default Header