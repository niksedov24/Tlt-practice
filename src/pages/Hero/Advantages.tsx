import { FaCertificate, FaLaptopCode, FaChalkboardTeacher, FaBookOpen, FaHeadset, FaMobileAlt } from 'react-icons/fa'

const advantages = [
    {
        icon: FaCertificate,
        title: 'Государственная аккредитация',
        description: 'Дипломы и удостоверения установленного государством образца'
    },
    {
        icon: FaLaptopCode,
        title: 'Современная онлайн-платформа',
        description: 'Интуитивно понятный интерфейс и доступ к материалам 24/7'
    },
    {
        icon: FaChalkboardTeacher,
        title: 'Практико-ориентированные курсы',
        description: 'Реальные проекты и кейсы от ведущих экспертов'
    },
    {
        icon: FaBookOpen,
        title: 'Доступ к библиотеке',
        description: 'Материалы остаются доступными после окончания обучения'
    },
    {
        icon: FaHeadset,
        title: 'Поддержка кураторов',
        description: 'Персональные наставники помогают на всем пути обучения'
    },
    {
        icon: FaMobileAlt,
        title: 'Мобильное обучение',
        description: 'Учитесь с любого устройства в удобное время'
    }
]

export const Advantages = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Почему выбирают <span className="text-primary-600">нас</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Мы создали образовательную среду, которая помогает достигать целей быстро и эффективно
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((adv, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-up"

                        >
                            <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                <adv.icon className="h-7 w-7 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                            <p className="text-gray-600">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}