import { Suspense } from "react"
import { DarkMode } from "./DarkMode"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"
import Search from "./Search"
import LoadingCard from "../card/LoadingCard"


const Navbar = () => {
  return (
    <Suspense fallback={<LoadingCard />}>
    <nav>
        <div className="container flex flex-col justify-between
        py-8 sm:flex-row sm:items-center gap-4">
            {/* logo */}
            <Logo />
            {/* search */}
            <Search />
            {/* Darkmode&profile */}
            <div className="flex gap-4">
            <DarkMode />
            <DropdownListMenu />
            
            </div>
        </div>
    </nav>
    </Suspense>
  )
}
export default Navbar