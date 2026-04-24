import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom py-12 px-50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="">
                        <h3 className="text-xl font-bold mb-4">Academix</h3>
                        <p className="text-gray-400 text-sm">
                            Образование, доступное 24/7. Качественное онлайн-обучение с
                            государственной аккредитацией.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <Link to="/" className="hover:text-white">
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link to="/catalog" className="hover:text-white">
                                    Каталог курсов
                                </Link>
                            </li>
                            <li>
                                <Link to="/library" className="hover:text-white">
                                    Библиотека
                                </Link>
                            </li>
                            <li>
                                <Link to="/cabinet" className="hover:text-white">
                                    Личный кабинет
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Контакты</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center space-x-2">
                                <FaPhone className="h-4 w-4" />
                                <span>+7 (495) 123-45-67</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaEnvelope className="h-4 w-4" />
                                <span>info@academix</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaMapMarkerAlt className="h-4 w-4" />
                                <span>г. Москва, ул. Образовательная, д. 1</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaYoutube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2026 academix. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};
