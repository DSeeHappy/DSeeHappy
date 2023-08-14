import Image from 'next/image'
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import Contact from "@/app/components/contact";
import Introduction from "@/app/components/introduction";

export default function Home() {
    return (
        <main>
            <Introduction/>
            <About/>
            <Projects/>
            <Contact/>
        </main>
    );
}
