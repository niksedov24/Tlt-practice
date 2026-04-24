
import { FaArrowRight } from 'react-icons/fa'
import LibraryCard from "../../images/Library-card1.png"
type Props = {
    title: string,
    description: string,
    date: string,
    className?: string,

}
export const NewsCard = ({ title, description, date, className }: Props) => {
    return (
        <>

            <div className={className}>

                <div className="flex items-center w-40 py-2 px-5 rounded-2xl bg-primary-600 gap-2 text-sm text-white mb-3">

                    <span className='text-center'>{date}</span>
                </div>


                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {title}
                </h3>


                <p className="text-gray-500 text-sm mb-4 leading-relaxed whitespace-pre-line">
                    {description}
                </p>


                <button
                    className="text-primary-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                    Читать далее
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
            </div></>

    )
}