import { Link } from 'react-router-dom'
import { FaPlay, FaArrowRight } from 'react-icons/fa'
import HeroImg from "../../images/Hero-img.png"
import { Partners } from '../../components/partners'
import { Directions } from './Directions'
import { Advantages } from './Advantages'
import { FAQ } from './FAQ'
import { Blog } from './Blog'
import { Contact } from './Contact'





export const Hero = () => {
    return (
        <section className="relative bg-linear-to-br from-primary-50 via-white to-primary-50 overflow-hidden py-20">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="animate-fade-in">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="text-primary-600">Образование,</span>
                            <br />
                            доступное <span className="text-primary-600">24/7</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Получите качественное образование в любое время и в любом месте.
                            Государственная аккредитация, практико-ориентированные курсы и поддержка кураторов.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/catalog"
                                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center font-semibold inline-flex items-center justify-center gap-2"
                            >
                                Начать обучение
                                <FaArrowRight />
                            </Link>
                            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2">
                                <FaPlay className="h-4 w-4" />
                                Смотреть видео
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={HeroImg}
                                alt="Студенты за работой"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Partners />
            <Directions />
            <Advantages />
            <FAQ />
            <Blog />
            <Contact />
        </section>
    )
}


