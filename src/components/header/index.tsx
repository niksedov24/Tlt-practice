import { Link } from "react-router-dom"
import Logo from "../../images/Logo.png"
import Seach from "../../images/Search.png"
import Button from "../button"
import NavButton from "../nav-button"

const index = () => {
    return (
        <header>
            <div className="p-5 flex justify-between">
                <div className="flex gap-2 items-center">
                    <Link className="flex gap-2 items-center" to="/">
                        <img className="cursor-pointer" src={Logo} alt="" />
                        <h2 className="text-primary-600 font-bold text-xl cursor-pointer">Academix</h2>
                    </Link>

                </div>
                <div className="flex gap-2 items-center">
                    <nav>
                        <ul className="flex gap-7.5 items-center">
                            <NavButton className="text-gray-700 hover:text-primary-600 transition-colors" href="/">Главная</NavButton>
                            <NavButton className="text-gray-700 hover:text-primary-600 transition-colors" href="/catalog">Каталог курсов</NavButton>
                            <NavButton className="text-gray-700 hover:text-primary-600 transition-colors" href="/library">Библиотека</NavButton>
                            <NavButton className="text-gray-700 hover:text-primary-600 transition-colors" href="/cabinet">Личный кабинет</NavButton>

                        </ul>
                    </nav>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="cursor-pointer" src={Seach} alt="Search" />
                    <Button className="bg-primary-600 px-4 py-2 rounded-lg text-neutral-50">Выйти</Button>
                </div>
            </div>
        </header>
    )
}

export default index