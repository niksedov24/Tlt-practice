

const students = [
    {
        id: 1,
        lastName: 'Седов',
        firstName: 'Никита',
        patronymic: 'Валерьевич',
        date: '14.04.26',
        downloads: 2,
        policy: 'Не зачет',
        grade: 'Отчет'
    },
    {
        id: 2,
        lastName: 'Иванов',
        firstName: 'Иван',
        patronymic: 'Иванович',
        date: '15.04.26',
        downloads: 3,
        policy: 'Зачет',
        grade: 'Практическая работа 1'
    },
    {
        id: 3,
        lastName: 'Петрова',
        firstName: 'Анна',
        patronymic: 'Сергеевна',
        date: '14.04.26',
        downloads: 1,
        policy: 'Не зачет',
        grade: 'Контрольная работа 2'
    },
    {
        id: 1,
        lastName: 'Седов',
        firstName: 'Никита',
        patronymic: 'Валерьевич',
        date: '14.04.26',
        downloads: 2,
        policy: 'Не зачет',
        grade: 'Отчет'
    },
    {
        id: 2,
        lastName: 'Иванов',
        firstName: 'Иван',
        patronymic: 'Иванович',
        date: '15.04.26',
        downloads: 3,
        policy: 'Зачет',
        grade: 'Практическая работа 1'
    },
    {
        id: 3,
        lastName: 'Петрова',
        firstName: 'Анна',
        patronymic: 'Сергеевна',
        date: '14.04.26',
        downloads: 1,
        policy: 'Не зачет',
        grade: 'Контрольная работа 2'
    },
    {
        id: 1,
        lastName: 'Седов',
        firstName: 'Никита',
        patronymic: 'Валерьевич',
        date: '14.04.26',
        downloads: 2,
        policy: 'Не зачет',
        grade: 'Отчет'
    },
    {
        id: 2,
        lastName: 'Иванов',
        firstName: 'Иван',
        patronymic: 'Иванович',
        date: '15.04.26',
        downloads: 3,
        policy: 'Зачет',
        grade: 'Практическая работа 1'
    },
    {
        id: 3,
        lastName: 'Петрова',
        firstName: 'Анна',
        patronymic: 'Сергеевна',
        date: '14.04.26',
        downloads: 1,
        policy: 'Не зачет',
        grade: 'Контрольная работа 2'
    }
]

export const StudentTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                    <tr>
                        <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Фамилия</th>
                        <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Имя</th>
                        <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Отчество</th>
                        <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Дата</th>
                        <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Попытка</th>
                        <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Оценка</th>
                        <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">Задание</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{student.lastName}</td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{student.firstName}</td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{student.patronymic}</td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{student.date}</td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{student.downloads}</td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs ${student.policy === 'Зачет'
                                    ? ' text-green-700'
                                    : ' text-red-700'
                                    }`}>
                                    {student.policy}
                                </span>
                            </td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">
                                <span className="">
                                    {student.grade}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}