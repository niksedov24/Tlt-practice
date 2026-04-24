import type React from "react"

type Props = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";


}

const Button = ({ children, className, type, }: Props) => {
    return (
        <button className={className} type={type}>{children}</button>
    )
}

export default Button