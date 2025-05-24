import { FaUsers, FaCheck, FaTimesCircle, FaCalendar, FaClock } from 'react-icons/fa';

export default function Dashboard() {
    const data = [
        { name: 'Invitados', value: 120, icon: <FaUsers />, color: 'bg-yellow-500' },
        { name: 'Confirmados', value: 80, icon: <FaCheck />, color: 'bg-green-500' },
        { name: 'No confirmados', value: 40, icon: <FaTimesCircle />, color: 'bg-red-500' },
    ];

    return (


        <div className="flex items-center justify-center w-full min-h-screen p-4 bg-white border-2">

            <div className="flex flex-col items-center justify-around w-full sm:w-[80%] h-screen mx-auto p-4 rounded-lg shadow-xl bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-4">

                <div className="text-[50px] font-bold font-['weddingSecondaryFont'] text-orange-500 border-b">Dashboard</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {data.map((item, index) => (
                        <div key={index} className={`p-4 rounded-lg shadow-md ${item.color}`}>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold sm:text-2xl">{item.value}</span>
                                {item.icon}
                            </div>
                            <span className="text-md sm:text-lg">{item.name}</span>
                        </div>
                    ))}
                </div>


                <div className="mt-4 text-center">
                    <h2 className="text-lg font-bold font-['forumFont']" >Detalles de los Invitados</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-sm sm:text-base md:text-lg lg:text-xl">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Nombre</th>
                                    <th className="px-4 py-2">Teléfono</th>
                                    <th className="px-4 py-2">Confirmado</th>
                                    <th className="px-4 py-2">Adicionales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2">Invitado</td>
                                        <td className="px-4 py-2">5544667788</td>
                                        <td className="px-4 py-2">{item.name === 'Confirmados' ? 'Sí' : 'No'}</td>
                                        <td className="px-4 py-2">0</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>


        </div>
    );
}