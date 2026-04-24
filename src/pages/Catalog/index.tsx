import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaArrowRight } from 'react-icons/fa'

export const courses = [
    {
        id: 1,
        title: 'Фронт-мастер: Создай свою вселенную',
        description: 'Преврати идеи в код. Научись создавать сайты, от которых у пользователей перехватывает дыхание',

        teacher: 'Алексей Горин',
        tech: ['React 19', 'TypeScript', 'Next.js'],
        hours: 240,
        price: 49900,
        rating: 4.9,
        students: 1240
    },
    {
        id: 2,
        title: 'AI-инженер: Покори нейросети',
        description: 'Научись создавать нейросети и внедрять AI в реальные проекты',

        teacher: 'Елена Нейроманова',
        tech: ['Python', 'PyTorch', 'LLM'],
        hours: 320,
        price: 69900,
        rating: 4.95,
        students: 890
    },
    {
        id: 3,
        title: 'UX/UI-волшебник: Дизайн эмоций',
        description: 'Создавай продукты, которые люди будут обожать',

        teacher: 'Диана Артемьева',
        tech: ['Figma', 'Анимация', 'Webflow'],
        hours: 220,
        price: 39900,
        rating: 4.88,
        students: 2340
    },
    {
        id: 4,
        title: 'Проджект-ниндзя: Управляй миром',
        description: 'Научись управлять проектами, командами и хаосом',

        teacher: 'Максим Шторм',
        tech: ['Agile', 'Scrum', 'Jira'],
        hours: 160,
        price: 34900,
        rating: 4.92,
        students: 1850
    }
]

const expressCourses = [
    { id: 5, title: 'Python для начинающих: Первый код', duration: '1.5 месяца', price: 9900, },
    { id: 6, title: 'Английский для IT-шников', duration: '3 месяца', price: 19900, },
    { id: 7, title: 'Excel PRO: Магия таблиц', duration: '2 месяца', price: 14900, }
]

export const Catalog = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const filters = [
        { id: 'all', name: 'Все курсы' },
        { id: 'marketing', name: 'Маркетинг' },
        { id: 'programming', name: 'Программирование' },
        { id: 'design', name: 'Дизайн и UX' }
    ]

    return (
        <div className="bg-gray-50  min-h-screen">

            <section className="relative rounded-2xl  wid bg-linear-to-r from-primary-900 to-primary-800 text-white py-20">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6">
                            <span className="text-sm">Более 15 000 студентов уже выбрали свой путь</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Выбери свою <span className="text-primary-300">траекторию роста</span>
                        </h1>
                        <p className="text-lg text-gray-200">
                            Не просто курсы — твой персональный навигатор в мире профессий будущего
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-custom py-25">

                <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-5 py-2 rounded-full font-medium transition-all ${activeFilter === filter.id
                                ? 'bg-primary-600 text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>


                <div className="mb-6">
                    <h2 className="text-2xl text-center font-bold">Курсы <span className='text-primary-600'>Academix</span> </h2>
                </div>


                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {courses.map(course => (
                        <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group">
                            <div className="flex">

                                <div className="p-4 flex-1">
                                    <h3 className="font-bold text-lg text-center mb-1 group-hover:text-primary-600 transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-500 text-center text-sm mb-2 line-clamp-2">{course.description}</p>
                                    <div className="flex justify-center  flex-wrap gap-1 mb-3">
                                        {course.tech.map((tech, idx) => (
                                            <span key={idx} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        <span className="text-xs text-center bg-gray-100 px-2 py-0.5 rounded">
                                            {course.hours} ч
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-primary-600">{course.price.toLocaleString()} ₽</span>
                                        <Link
                                            to="/catalog"
                                            className="bg-primary-600 text-white text-[13px] px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center font-semibold inline-flex items-center justify-center gap-2"
                                        >
                                            Выбрать курс
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mb-16">
                    <Link
                        to="/catalog"
                        className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center font-semibold inline-flex items-center justify-center gap-2"
                    >
                        Показать больше
                        <FaArrowRight />
                    </Link>
                </div>


                <div>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2"> Экспресс- <span className='text-primary-600'>курсы</span></h2>
                        <p className="text-gray-500">Быстрый старт без воды — всего за 1-3 месяца</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {expressCourses.map(course => (
                            <div key={course.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all group">

                                <h3 className="font-bold mb-2 group-hover:text-primary-600 transition-colors">{course.title}</h3>
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                    <span> {course.duration}</span>
                                    <span> Сертификат</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-primary-600">{course.price.toLocaleString()} ₽</span>
                                    <button className="text-primary-600 text-sm font-semibold">
                                        Записаться →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}