import { FaArrowRight, FaLink, FaPen } from "react-icons/fa"
import { Link } from "react-router-dom"
import CabinetLogo from "../../images/CabinetLogo.png"
import CabinetVisa from "../../images/CabinetVisa.png"

import Button from "../../components/button"
import { StudentTable } from "./Journal"


const Cabinet = () => {
    return (<>
        <section className="py-16 bg-gray-50">
            <div className="flex justify-between">
                <div className="flex flex-col justify-end sm:flex-row gap-4">

                    <Link
                        to="/cabinet"
                        className="border-2 border-primary-600 text-primary-600 px-4 py-1 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
                    >
                        Студент
                        <FaArrowRight />
                    </Link>
                    <Link
                        to="/cabinetTeacher"
                        className="bg-primary-600 text-white px-4 py-1 rounded-lg hover:bg-primary-700 transition-colors text-center font-semibold inline-flex items-center justify-center gap-2"
                    >
                        Учитель
                        <FaArrowRight />
                    </Link>
                </div>
                <div className="flex flex-col justify-end sm:flex-row gap-4">
                    <button className="border-2 border-primary-600 text-primary-600 px-4 py-1 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2">
                        Распечатать
                    </button>
                    <Link
                        to="/cabinet"
                        className="bg-primary-600 text-white px-4 py-1 rounded-lg hover:bg-primary-700 transition-colors text-center font-semibold inline-flex items-center justify-center gap-2"
                    >
                        Редактировать
                        <FaArrowRight />
                    </Link>
                </div>

            </div>

            <div className="mt-10 flex justify-between px-10  py-10 border-t-1 border-primary-600">
                <div className="flex w-[144px] h-[144px] flex-col text-center">
                    <img className="w-[144px] h-[144px]" src={CabinetLogo} alt="" />
                    <h2 className="font-bold  text-xl">Амина Седова</h2>
                    <h3 className="font-bold text-secondary-500 text-sm">Студент</h3>
                    <p className="text-gray-700 font-semibold">aminasal@mail.ru</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 justify-center items-center">
                        <h2 className="font-bold text-2xl">Основная информация</h2>
                        <FaPen className="cursor-pointer" />
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">Дата рождения</p>
                        <p className="font-bold text-gray-700">14.04.2008</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">Адресс</p>
                        <p className="font-bold text-gray-700">Тольятти</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">Почта</p>
                        <p className="font-bold text-gray-700">aminasal.ru</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">Курс</p>
                        <p className="font-bold text-gray-700">ИСИП-22</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2 ">
                        <h2 className="font-bold text-2xl">Платежные данные</h2>
                        <FaPen className="cursor-pointer" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">Номер карточки:</h2>
                        <p className="text-sm text-gray-700">223 *** **** 252</p>
                    </div>
                    <div className="">
                        <img src={CabinetVisa} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-gray-50">
            <div className="text-l mb-10  ">
                <h2 className="text-3xl text-center   font-bold mb-4">
                    <span className="">Журнал</span>
                </h2>
            </div>
            <StudentTable />
        </section>

        <section className="py-16 bg-gray-50">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3 w-[360px] h-[195px]">
                    <div className="flex gap-2 justify-between items-center">
                        <h2 className="font-bold text-2xl">Файлы</h2>
                        <Button className="bg-white px-2 py-1 rounded-lg border-1 text-primary-600">Скачать</Button>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">Practice_02</p>
                        <p className="font-bold text-gray-700">5,2kb</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">SedovaPractice</p>
                        <p className="font-bold text-gray-700">1,7mb</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">HomeWork5</p>
                        <p className="font-bold text-gray-700">8,3mb</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-gray-500 font-semibold">Practice_08</p>
                        <p className="font-bold text-gray-700">1,6kb</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2  items-center">
                        <h2 className="font-bold text-2xl">Ссылки на полезные материалы</h2>
                        <FaLink className="cursor-pointer" />
                    </div>
                    <div className="inline-flex flex-col  gap-3"> <a className="text-xl hover:border-primary-600 pb-1 transition-al  border-b-1 text-gray-700 " href="#">Коллекция Бесплатных картинок</a>
                        <a href="#" className="text-xl hover:border-primary-600 pb-1 transition-al  border-b-1 text-gray-700 ">Российская Электронная школа</a>
                        <a href="#" className="text-xl hover:border-primary-600 pb-1 transition-al  border-b-1 text-gray-700 ">Википедия</a>
                        <a href="#" className="text-xl hover:border-primary-600 pb-1 transition-al  border-b-1 text-gray-700 ">Министерство России</a></div>

                </div>
            </div>

        </section>
    </>
    )






}

export default Cabinet