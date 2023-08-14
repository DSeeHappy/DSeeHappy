'use client'

import Image from "next/image";
import {
    ArrowPathIcon, CameraIcon,
    ChatBubbleLeftIcon, CodeBracketSquareIcon,
    CogIcon, CubeTransparentIcon,
    DevicePhoneMobileIcon,
    DeviceTabletIcon, DocumentTextIcon, LightBulbIcon, PaintBrushIcon,
    SwatchIcon, UserCircleIcon
} from "@heroicons/react/24/solid";

export default function About(){
    return (
        <>
            <section
                className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -z-20"
                id="about">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                    </svg>
                </div>
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">About Me</p>
                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Software
                                    & Photography</h3>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    My enjoyment of software is only rivaled by snowboarding and photography
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <Image
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="/scenery/wptree.png"
                            height={500}
                            width={500}
                            alt="Tree in Winter Park photo by DSeeHappy"
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                                <p className=" text-3xl text-black leading-5 font-semibold tracking-tight">Skills</p>
                                <ul role="list" className="mt-8 space-y-4 text-gray-600 gri ">
                                    <li className="flex gap-x-3">
                                        <SwatchIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                    aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Photoshop</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ChatBubbleLeftIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                            aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Spanish</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <DeviceTabletIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                          aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Dart | Flutter Mobile Development</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <DevicePhoneMobileIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                               aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Kotlin | Android Development</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CodeBracketSquareIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                               aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Python</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <PaintBrushIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                        aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">HTML | CSS</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                          aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">JavaScript | TypeScript</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LightBulbIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                       aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">React</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ArrowPathIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                       aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">NextJs</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CubeTransparentIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                             aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Gatsby</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <UserCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                        aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">UI | UX</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CogIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                 aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Go</strong>
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CameraIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                    aria-hidden="true"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Photography</strong>
                  </span>
                                    </li>
                                </ul>
                                <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Continuous
                                    Learning</h4>
                                <p className="mt-8">
                                    Technology progresses at a pace that&apos;s often breathtaking, I enjoy and seek
                                    this challenge. Every time I explore my current limits, I discover more to learn. As
                                    long as I continue to learn and study, I will reach a level I never imagined
                                    possible.
                                </p>
                                <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Collaborative
                                    Mindset
                                </h4>
                                <p className="mt-6">
                                    Transitioning from a background in customer service to software development has been
                                    an unexpected asset. This foundation gives me a unique perspective on user needs,
                                    management concerns, and tight deadlines. It equips me to collaborate effectively
                                    with stakeholders and team members, ensuring we prioritize the most impactful
                                    solutions and avoid costly missteps.
                                </p>
                                <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Creativity Mindset
                                </h4>
                                <p className="mt-6">
                                    Some see software development as just analytical, but I find creativity essential.
                                    It&apos;s key in designing solutions, understanding user needs, and ensuring our products
                                    not only work well but also appeal to users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}