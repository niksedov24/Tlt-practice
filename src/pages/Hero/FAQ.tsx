import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
        question: "Как начать обучение?",
        answer:
            "Для начала обучения необходимо зарегистрироваться на платформе, выбрать интересующий курс и оплатить его. После оплаты вам откроется доступ к материалам, и вы сможете начать обучение в удобное время.",
    },
    {
        question: "Как проходит аттестация?",
        answer:
            "Аттестация проходит в формате онлайн-тестирования и выполнения практических заданий. По окончании каждого модуля предусмотрены проверочные тесты, а в конце курса - итоговая аттестация.",
    },
    {
        question: "Выдается ли диплом государственного образца?",
        answer:
            "Да, по окончании обучения выдается диплом или удостоверение установленного государством образца. Все документы имеют государственную лицензию и признаются работодателями.",
    },
    {
        question: "Можно ли учиться с мобильного телефона?",
        answer:
            "Да, наша платформа полностью адаптирована для мобильных устройств. Вы можете смотреть лекции, выполнять задания и общаться с преподавателями с любого смартфона или планшета.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Часто задаваемые <span className="text-primary-600">вопросы</span>
                    </h2>
                    <p className="text-gray-600">
                        Ответы на самые популярные вопросы об обучении
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <span className="text-lg font-semibold text-left">
                                    {faq.question}
                                </span>
                                <FaChevronDown
                                    className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="mt-2 p-6 bg-white rounded-lg shadow-md animate-fade-in">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
