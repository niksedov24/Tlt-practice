import Yandex from "../../images/yandex.png"
import Sber from "../../images/sber.png"
import Tbank from "../../images/tbank.png"
import Ozon from "../../images/ozon.png"
import Wb from "../../images/wb.png"
import Vk from "../../images/wk.png"


export const Partners = () => {
    const partners = [
        { name: 'Яндекс', logo: Yandex },
        { name: 'Сбер', logo: Sber },
        { name: 'Тинькофф', logo: Tbank },
        { name: 'VK', logo: Vk },
        { name: 'Ozon', logo: Ozon },
        { name: 'Wildberries', logo: Wb }
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-3">Наши партнёры</h2>
                    <p className="text-gray-600">Ведущие компании доверяют нашим выпускникам</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="flex justify-center">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}