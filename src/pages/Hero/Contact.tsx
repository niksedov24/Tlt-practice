import { useState } from "react";
import {

    FaTelegram,
    FaWhatsapp,
} from "react-icons/fa";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12">

                    <div className="animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Контактная <span className="text-primary-600">информация</span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить
                            на ваши вопросы!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Адрес главного корпуса
                                    </h3>
                                    <p className="text-gray-600">
                                        г. Москва, ул. Образовательная, д. 1
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        м. Университет, выход №3
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Телефоны приемной комиссии
                                    </h3>
                                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                                    <p className="text-gray-600">
                                        +7 (800) 555-35-35 (бесплатно по РФ)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Email поддержки
                                    </h3>
                                    <p className="text-gray-600">info@academix</p>
                                    <p className="text-gray-600">support@academix</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">

                                <div>
                                    <h3 className="font-semibold text-gray-900">Режим работы</h3>
                                    <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                                    <p className="text-gray-600">Вс: выходной</p>
                                </div>
                            </div>
                        </div>


                        <div className="mt-8">
                            <h3 className="font-semibold text-gray-900 mb-3">
                                Мы в мессенджерах
                            </h3>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                                >
                                    <FaTelegram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up">
                        <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Ваше имя *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                    placeholder="Иван Иванов"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                    placeholder="ivan@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Сообщение *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                                    placeholder="Задайте свой вопрос..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                            >
                                Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
