import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const flexBetween = "flex items-between justify-between"
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 py-6 z-30 w-full`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT Side */}
                        <img src={Logo} alt='logo' />

                        {/* RIGHT Side */}
                        {isAboveMediumScreen ? (
                            <div className={`${flexBetween} w-full`}>

                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page='Home' />
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page='Benefits' />
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page='Our Classes' />
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page='Contact Us' />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (<button
                            className="rounded-full bg-secondary-500 p-2 hover:bg-primary-500"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="text-white h-6 w-6" />
                        </button>)}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {!isAboveMediumScreen && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full z-40 w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page='Home' />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page='Benefits' />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page='Our Classes' />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page='Contact Us' />
                    </div>

                </div>
            )}
        </nav>
    )
}

export default Navbar