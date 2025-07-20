import { useState } from "react"
import { useRouter } from 'next/navigation'
import { FaHeart } from "react-icons/fa6"
import { FaBars } from "react-icons/fa"

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Detalles", href: "/detalles" },
        { name: "Responder a invitación", href: "/asistencia" },
    ]


    return (
        <nav className="fixed top-0 z-50 w-full shadow-xl backdrop-blur-md bg-black/35 border">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">

                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <div
                                role="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <FaBars className="w-8 h-8" />
                            </div>
                        </div>


                        <div className="flex space-x-4 text-white font-['palisadeFont'] text-4xl">
                            <span>A</span>

                            <FaHeart className="w-8 h-8 fill-red-500" />

                            <span>E</span>
                        </div>

                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-['brillantFont']"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>



                </div>

                {open && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 border border-white/30">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-xl font-medium text-white hover:text-purple-500 hover:bg-gray-50 font-['forumFont']"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
