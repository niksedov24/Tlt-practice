import { Link } from "react-router-dom";

import Blog1 from "../../images/Blog1.png"
import Blog2 from "../../images/Blog2.png"
import Blog3 from "../../images/Blog3.png"

const blogPosts = [
    {
        id: 1,
        title: "Новый курс по Data Science стартует в апреле",
        excerpt:
            "Изучите современные методы анализа данных и машинного обучения с ведущими экспертами...",
        date: "25 марта 2026",
        author: "Анна Петрова",
        image:
            Blog1,
    },
    {
        id: 2,
        title: "Изменения в расписании вебинаров на апрель",
        excerpt:
            "Обратите внимание на обновленное расписание вебинаров и мастер-классов...",
        date: "20 марта 2026",
        author: "Иван Смирнов",
        image:
            Blog2,
    },
    {
        id: 3,
        title: 'Публикация преподавателя: "Будущее онлайн-образования"',
        excerpt:
            "Профессор Сергей Козлов делится insights о развитии образовательных технологий...",
        date: "15 марта 2026",
        author: "Сергей Козлов",
        image:
            Blog3,
    },
];

export const Blog = () => {
    return (
        <section className="py-20">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Новости и <span className="text-primary-600">публикации</span>
                    </h2>
                    <p className="text-gray-600">
                        Будьте в курсе последних событий и новых программ
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <span className="flex items-center gap-1">

                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">

                                        {post.author}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    <Link
                                        to={"/catalog"}
                                        className="hover:text-primary-600"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Link
                                    to={"/catalog"}
                                    className="text-primary-600 font-semibold hover:text-primary-700"
                                >
                                    Читать далее →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
