'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";

const navigation = [
    { name: 'about', href: '#about' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
]
export default function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex flex-1">
                        <div className="hidden lg:flex lg:gap-x-20">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}
                                      className="text-sm font-semibold leading-6 text-gray-900">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Daniel Sanchez</span>
                        <Image className="h-8 w-auto" src="/DSeeHappy.webp" height={100} width={100} alt="DSeeHappy"/>
                    </Link>
                    <div className="flex flex-1 justify-end ">
                        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 flex items-center ">
                            <p>Resume</p> <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                                 fill="currentColor" className="w-5 h-5">
                            <path
                                d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/>
                            <path
                                d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/>
                        </svg></span>

                        </Link>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10"/>
                    <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-1">
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">DSeeHappy</span>
                                <Image
                                    className="h-8 w-auto"
                                    src="/DSeeHappy.webp"
                                    alt="DSeeHappy"
                                    height={100}
                                    width={100}
                                />
                            </Link>
                            <div className="flex flex-1 justify-end">
                                <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
                                    Resume <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-6 space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    );
}