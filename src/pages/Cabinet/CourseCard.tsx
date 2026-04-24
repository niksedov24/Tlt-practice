import Button from "../../components/button";
import { FiArrowDownRight } from 'react-icons/fi'
type Props = {
    title: string,
    description: string,
    lessons: string;

}
export const CourseCard = ({ title, description, lessons }: Props) => {
    return (
        <div className="w-[797px] h-[156px] bg-secondary-200 rounded-2xl flex justify-between  py-5 px-10">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl text-gray-900 font-semibold">{title}</h2>
                <h3 className="text-xl font-semibold">{description}</h3>
                <p className="text-xl text-gray-700 font-semibold">{lessons}</p>
            </div>
            <div className="flex flex-col gap-7 ">
                <Button className="bg-success-600 px-4 py-2 rounded-lg font-bold text-neutral-50">Завершен</Button>
                <button className="w-12 h-12 rounded-full mx-auto  bg-secondary-400   text-white flex items-center justify-center hover:bg-secondary-700 transition-all">
                    <FiArrowDownRight size={24} />
                </button>
            </div>
        </div>
    )
}

