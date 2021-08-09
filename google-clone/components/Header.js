import { useRef } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

function Header() {

    const searchInputRef = useRef(null);
    const router = useRouter();


    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`)

    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2015/11/02/14/01/google-1018443_960_720.png"
                    height={40}
                    width={120}
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-500 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-x-125"
                        onClick={() => searchInputRef.current.value = ""}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 sm:inline-flex text-blue-500" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
            </div>
        </header>
    )
}

export default Header
