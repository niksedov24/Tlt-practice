import { Link } from 'react-router-dom'

import LibraryBg from "../../images/LibraryBg.png"
import LibraryCard from "../../images/Library-card1.png"
import LibraryCard2 from "../../images/Library-card2.png"
import LibraryCard3 from "../../images/Library-card3.png"
import LibraryBg2 from "../../images/library-Bg2.png"
import { NewsCard } from './newCard'
import { WebinarCard } from './webinarCard'


const newsItems = [
    {
        id: 1,
        title: 'Скидка 40% на все курсы до 1 мая',
        description: 'Успей записаться по старой цене? Нет, по новой — ещё дешевле! Промокод внутри.',
        date: '25 апреля 2026',

    },
    {
        id: 2,
        title: '«С завода в IT: как я сменил профессию»',
        description: 'Реальный путь Дмитрия от сварщика до junior fullstack-разработчика.',
        date: '20 апреля 2026',

    },
    {
        id: 3,
        title: 'Новый курс: AI-инженер с нуля',
        description: 'Набор на программу стартует 15 мая. Успей записаться со скидкой 20%.',
        date: '18 апреля 2026',

    },
    {
        id: 4,
        title: 'Как собрать портфолио без опыта',
        description: 'Пошаговая инструкция от HR-директора крупной IT-компании.',
        date: '15 апреля 2026',

    },
    {
        id: 5,
        title: 'Вебинар: «Как войти в IT после 30»',
        description: 'Реальные истории и советы от тех, кто сменил профессию в зрелом возрасте.',
        date: '12 апреля 2026',

    }
]

export const Library = () => {

    return (
        <div className="bg-white min-h-screen">

            {/* Блок "Сообщество единомышленников" */}
            <section className="relative   text-white py-20">
                <div className="absolute  inset-0 ">
                    <img
                        src={LibraryBg}
                        alt=""
                        className="w-full rounded-2xl h-full object-cover"
                    />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">

                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Сообщество <span className="text-primary-600">единомышленников</span>
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            О нас, о тебе, о том, как мы превращаем знания в навыки.
                            Читай — и узнаешь, почему наши студенты достигают целей быстрее.
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-50">
                <div className="text-l max-w-3xl">

                    <h2 className="text-4xl  font-bold mb-4">
                        <span className="">Новости</span>
                    </h2>

                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="relative mb-25">
                        <>
                            <img className=' w-full h-full object-cover' src={LibraryCard} alt="" />
                            <NewsCard
                                className='bg-white absolute bottom-0 z-500  right-0 translate-y-[100px]   w-60 rounded-xl p-5 shadow-md hover:shadow-lg transition-all group cursor-pointer'
                                title="Скидка 40% на все курсы до 1 мая"
                                description="Успей записаться по старой цене? Нет, по новой — ещё дешевле! Промокод внутри."
                                date="25 апреля 2026"
                            />
                        </>
                    </div>
                    <div className="relative mb-25">
                        <>
                            <img className=' w-full h-full object-cover' src={LibraryCard2} alt="" />
                            <NewsCard
                                className='bg-white absolute z-500 bottom-0  right-0 translate-y-[100px]   w-60 rounded-xl p-5 shadow-md hover:shadow-lg transition-all group cursor-pointer'
                                title="С завода в IT: как я сменил профессию"
                                description="Успей записаться по старой цене? Нет, по новой — ещё дешевле! Промокод внутри."
                                date="20 апреля 2026"
                            />
                        </>
                    </div>
                    <div className="relative mb-25">
                        <>
                            <img className=' w-full h-full object-cover' src={LibraryCard3} alt="" />
                            <NewsCard
                                className='bg-white absolute bottom-0 z-500  right-0 translate-y-[100px]   w-60 rounded-xl p-5 shadow-md hover:shadow-lg transition-all group cursor-pointer'
                                title="Новый курс: AI-инженер с нуля"
                                description="Набор на программу стартует 15 мая. Успей записаться со скидкой 20%."
                                date="25 апреля 2026"
                            />
                        </>
                    </div>
                    <div className="relative mb-25">
                        <>
                            <img className=' w-full h-full object-cover' src={LibraryCard} alt="" />
                            <NewsCard
                                className='bg-white absolute bottom-0 z-500  right-0 translate-y-[100px]   w-60 rounded-xl p-5 shadow-md hover:shadow-lg transition-all group cursor-pointer'
                                title="Как собрать портфолио без опыта"
                                description="Пошаговая инструкция от HR-директора крупной IT-компании"
                                date="25 апреля 2026"
                            />
                        </>
                    </div>
                    <div className="relative mb-25">
                        <>
                            <img className=' w-full h-full object-cover' src={LibraryCard2} alt="" />
                            <NewsCard
                                className='bg-white absolute bottom-0 z-500  right-0 translate-y-[100px]   w-60 rounded-xl p-5 shadow-md hover:shadow-lg transition-all group cursor-pointer'
                                title="Скидка 40% на все курсы до 1 мая"
                                description="Успей записаться по старой цене? Нет, по новой — ещё дешевле! Промокод внутри."
                                date="25 апреля 2026"
                            />
                        </>
                    </div>
                    <div className="relative mb-25">
                        <>
                            <img className=' w-full h-full object-cover' src={LibraryCard3} alt="" />
                            <NewsCard
                                className='bg-white absolute bottom-0 z-500  right-0 translate-y-[100px]   w-60 rounded-xl p-5 shadow-md hover:shadow-lg transition-all group cursor-pointer'
                                title="Вебинар: «Как войти в IT после 30"
                                description="Реальные истории и советы от тех, кто сменил профессию в зрелом возрасте."
                                date="25 апреля 2026"
                            />
                        </>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className='bg-cover py-20 px-15   mx-auto bg-center w-[967px] h-[360px]' style={{ backgroundImage: `url(${LibraryBg2})` }}>
                    <h2 className='text-3xl mb-5 w-[630px] text-white font-bold'>Учитесь с гарантией: мы найдём вам работу или вернём полную стоимость курса*</h2>
                    <h3 className='text-2xl' >Смотрите уроки, делайте домашки и развивайте навыки на реальных проектах.</h3>
                </div>
            </section >

            <section className="py-16 bg-gray-50">
                <div className="">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl  font-bold mb-4">
                            Мепроприятия
                        </h2>
                    </div>
                    <div className="flex mb-10 justify-between ">
                        <button> <h2 className="text-2xl cursor-pointer">
                            Предстоящие
                        </h2></button>
                        <button>
                            <h2 className="text-2xl cursor-pointer">
                                Прошедшие
                            </h2>
                        </button>
                    </div>
                    <div className="flex gap-12.5 justify-center">
                        <WebinarCard />
                        <WebinarCard />
                        <WebinarCard />
                    </div>
                </div>

            </section >


        </div >
    )
}