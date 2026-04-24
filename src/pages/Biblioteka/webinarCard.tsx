import webinarImg from "../../images/webinarImg.png"

export const WebinarCard = () => {
    return (
        <div className="w-[295px] h-[495px]">
            <img className=" mb-2" src={webinarImg} alt="" />
            <h2 className="text-2xl font-bold  mb-2">Вебинар с экспертами  в стеке UI/UX Design</h2>
            <h4 className="text-xl  font-semibold text-secondary-500  mb-2">09.04.2026</h4>
            <p className="w-[235px] text-gray-700">На встрече с экспертами на реальных кейсах разберём, почему возникает проблемы с изучением дизайна.</p>
        </div>
    )
}