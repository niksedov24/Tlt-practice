import { Link } from "react-router-dom";
import {
    FaGraduationCap,
    FaChartLine,
    FaUniversity,
    FaUsers,
} from "react-icons/fa";

const directions = [
    {
        icon: FaGraduationCap,
        title: "Программы профессиональной переподготовки",
        description: "Смена профессии за 6-12 месяцев с гарантией трудоустройства",
        color: "from-blue-500 to-blue-600",
        href: "/catalog",
    },
    {
        icon: FaChartLine,
        title: "Курсы повышения квалификации",
        description: "Актуальные знания для карьерного роста и развития",
        color: "from-green-500 to-green-600",
        href: "/catalog",
    },
    {
        icon: FaUniversity,
        title: "Высшее образование",
        description: "Бакалавриат и магистратура с государственным дипломом",
        color: "from-purple-500 to-purple-600",
        href: "/catalog",
    },
    {
        icon: FaUsers,
        title: "Дополнительное образование",
        description: "Курсы для взрослых и детей: языки, творчество, развитие",
        color: "from-orange-500 to-orange-600",
        href: "/catalog",
    },
];

export const Directions = () => {
    return (
        <section className="py-20">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Направления <span className="text-primary-600">обучения</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Выберите программу, которая соответствует вашим целям и интересам
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {directions.map((dir, index) => (
                        <Link
                            key={index}
                            to={dir.href}
                            className={`group relative overflow-hidden rounded-2xl bg-linear-to-r ${dir.color} p-8 text-white hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="relative z-10">
                                <dir.icon className="h-12 w-12 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">{dir.title}</h3>
                                <p className="text-white/90 mb-4">{dir.description}</p>
                                <span className="inline-block bg-white/20 rounded-lg px-4 py-2 text-sm font-semibold group-hover:bg-white/30 transition-colors">
                                    Подробнее →
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
