import "./App.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Todo from "./assets/todo.png";
import Weather from "./assets/weather.png";
import RandomQ from "./assets/randomQ.png";
import Money from "./assets/money_converter.png";
import Game from "./assets/game.png";
import News from "./assets/news.png";
import { useEffect, useState } from "react";

function App() {
    const [scrolling, setScrolling] = useState(false);

    const onPageScroll = () => {
        if (window.pageYOffset > 200) {
            setScrolling(true)
        } else {
            setScrolling(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onPageScroll)
        return () => {
            window.removeEventListener("scroll", onPageScroll)
        }
    }, [])

    return (
        <div className="max-w-4xl m-auto relative">
            <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
                <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
                    <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                        <div>
                            <h1 className="font-bold text-2xl">Alex Portfolio</h1>
                        </div>
                        <div>
                            <ul className="flex gap-4">
                                <li>
                                    <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                                        Technologies
                                    </a>
                                </li>
                                <li>
                                    <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                                        About me
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main className="relative mt-28">
                {/* Intro/Banner section */}
                <section>
                    <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                        <div>
                            <h2 className="font-bold text-4xl">Hello, I'm Sahil Randive,</h2>
                            <div>
                                <h2 className="font-bold text-4xl mt-1 gradiant-text">Web developer</h2>
                            </div>
                            <div>
                                <p className="mt-4 text-gray-400">
                                    Former digital-marketing specialist, seeking to apply
                                    competent development skills with focus on collaboration,
                                    communication, and passion
                                </p>
                                <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                    Download resume
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div >
                                <img src={Porfile} className="relative z-10 w-[300px] m-auto sm:w-[800px]" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Projects section */}
                <section id="projects">
                    <div className="container m-auto px-4 sm:py-12">
                        <h2 className="text-2xl font-semibold">Projects</h2>
                        <div className="flex flex-col sm:flex-row gap-10 mt-11">
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Weather} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Furniture store landing page
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive HTML/CSS layout for online furniture store. HTML5,
                                    CSS3 (SCSS)
                                </p>
                                <div className="flex mt-12 gap-2">
                                    <button onClick={() => window.open("https://sahil-randive-weather-app.netlify.app/", "_blank")} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        Checkout github
                                    </button>
                                </div>
                            </div>
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Todo} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Designer furniture store landing page
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive HTML/CSS layout for online store of designer
                                    furniture. HTML5, CSS3 (SCSS)
                                </p>
                                <div className="flex gap-2 mt-12">
                                    <button onClick={() => window.open("https://sahil-todo.netlify.app/", "_blank")} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        Checkout github
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Money} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Landing page for front-end developer
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive HTML/CSS layout for landing page for front-end
                                    developer. HTML5, CSS3 (SCSS)
                                </p>
                                <div className="flex gap-4 mt-12">
                                    <button onClick={() => window.open("https://sahil-currency-converter.netlify.app/", "_blank")} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 ">
                                        Checkout github
                                    </button>
                                </div>
                            </div>
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={RandomQ} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Website redesign for The Venus project
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                                    (SCSS)
                                </p>
                                <div className="flex gap-2 mt-12">
                                    <button onClick={() => window.open("https://sahil-quote-generator.netlify.app/", "_blank")} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        Checkout github
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Game} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Landing page for front-end developer
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive HTML/CSS layout for landing page for front-end
                                    developer. HTML5, CSS3 (SCSS)
                                </p>
                                <div className="flex gap-4 mt-12">
                                    <button onClick={() => window.open("https://sahil-tic-tac-toe-game.netlify.app/", "_blank")} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        Checkout github
                                    </button>
                                </div>
                            </div>
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={News} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Website redesign for The Venus project
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                                    (SCSS)
                                </p>
                                <div className="flex gap-2 mt-12">
                                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        Checkout github
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Technoglies section */}
                <section className="py-10" id="technologies">
                    <div className="container m-auto px-4">
                        <h2 className="text-2xl font-semibold">Technologies</h2>
                        <div className="mt-14">
                            <div>
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">HTML</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">
                                        JavaScript, TypeScript, JQuery
                                    </h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">UI design in Figma</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">Angular</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">React</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">React Native</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Additional skills section */}

            </main>
            <footer>
                <div className="container m-auto flex justify-between px-4 py-6">
                    <div>
                        <p className="text-gray-300 text-sm">Copyright @ 2023</p>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <a>
                                    <img src={Facebook} className="w-5" />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={LinkedIn} className="w-5" />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={Instagram} className="w-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            {
                scrolling && (
                    <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
                        window.scrollTo(0, 0);
                    }}>
                        <img src={ArrowDown} />
                    </button>
                )
            }
        </div>
    );
}

export default App;
