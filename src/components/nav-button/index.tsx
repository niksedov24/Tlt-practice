import { Link } from "react-router-dom"

type Props = {
    children: React.ReactNode;
    className?: string;
    href: string;


}

const NavButton = ({ children, className, href }: Props) => {
    return (
        <Link to={href} className={className}> {children} </Link>
    )
}

export default NavButton