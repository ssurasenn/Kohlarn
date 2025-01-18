import Link from "next/link"
import { Button } from "../ui/button"

const Logo = () => {
  return (
    <Button size='lg' asChild >
        <Link 
        href={'/'}
        className="text-2xl rounded-md shadow-md px-2">
            Koh Larn
        </Link>
    </Button>
  )
}
export default Logo