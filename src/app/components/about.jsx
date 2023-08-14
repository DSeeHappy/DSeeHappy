'use client'


import Image from "next/image";

export default function About(){
    return (
        <>
            <section
                id="about">

                <div className="relative isolate overflow-hidden pt-14  ">
                    <img
                        src="/scenery/breckmountains.png"
                        alt="Mountain in Breckenridge photo by DSeeHappy"
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative rounded-full px-3 py-1 text-sm leading-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                                Software Developer experienced in Flutter | Android | Web
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="flex items-center rounded-tr-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                <Image
                                    className="mx-auto h-48 w-48 rounded-ee-full md:h-56 md:w-56 object-cover scale-110 shadow-2xl "
                                    src='/me/Daniel-Sanchez.webp' height={500} width={500}
                                    alt=""/>
                                <div className="align-middle">
                                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl ">
                                        Hi I am Juan Daniel Sanchez Chavez
                                    </h1>
                                    <br/>
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl ">
                                        Call me Daniel
                                    </h2>
                                </div>
                            </div>
                            <div className=" grid grid-cols-1 divide-y rounded-bl-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                <p className="p-5 text-3xl leading-8 text-white ">
                                    I&apos;m a software developer with proficiency in Android, Flutter, and web
                                    development.
                                </p>
                                <p className="text-center pt-10 m-6 text-2xl leading-8 text-white ">
                                    Passionate about design, testing, and ensuring decisive communication between team members
                                    and
                                    stakeholders.
                                </p>
                                <p className="p-4 text-3xl leading-8 text-white ">
                                    Committed to crafting customer focused solutions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu bg-gray-200/5 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] bg-blue-900"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}