import "./App.css";
import Porfile from "./assets/lord_img.jpg";
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
                            <h1 className="font-bold text-2xl">Sahil Portfolio</h1>
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
                                <h2 className="text-white font-bold text-4xl mt-1 gradiant-text">Web developer</h2>
                            </div>
                            <div>
                                <p className="mt-4 text-gray-400">
                                    lorem ipsum dolor sit amet, consectetur adip
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
                                lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                lorem ipsum dolor sit amet, consectetur adip
                                </p>
                                <div className="flex mt-12 gap-2">
                                    <button onClick={() => window.open("https://sahil-randive-weather-app.netlify.app/", "_blank")} className="flex-1 text-sm py-3 bg-blue-400 border rounded-full hover:border-blue-500 ">
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
                                lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                lorem ipsum dolor sit amet, consectetur adip
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
                                lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                lorem ipsum dolor sit amet, consectetur adip
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
                                lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                lorem ipsum dolor sit amet, consectetur adip
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
                                lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                lorem ipsum dolor sit amet, consectetur adip
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
                                lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                lorem ipsum dolor sit amet, consectetur adip
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
                                    <h2 className="font-semibold">CSS & Bootstrap</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">
                                        JavaScript, TypeScript
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
                                    <h2 className="font-semibold">Java</h2>
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
                                    <h2 className="font-semibold">Node</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Additional skills section */}
                <section>
                    <div className="container-lg">
                        <div className="flex flex-col md:flex-row w-full p-8 rounded-lg section-card">
                            <div className="flex flex-1 flex-col sm:gap-y-6 gap-y-4">
                                <div className="max-w-lg text-label heading-text text-2xl font-semibold">
                                    <h1>Contact Me</h1>
                                </div>
                                <div className="max-w-lg w-3/ text-label body-text">
                                    <p>Let's chat about your ambitions, and we'll craft a killer portfolio that will blow minds and open doors you never knew existed.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 flex-1">
                                <form>
                                    <div className="row gx-2 gy-2">
                                        <div className="col-xl-12 col-md-12 col-sm-12">
                                            <div>
                                                <label className="block text-sm font-semibold leading-6 body-text">Email</label>
                                                <div className="mt-2.5">
                                                    <input type="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mt-2.5 block text-sm font-semibold leading-6 body-text">First Name</label>
                                                <div className="mt-2.5">
                                                    <input type="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mt-2.5 block text-sm font-semibold leading-6 body-text">Last Name</label>
                                                <div className="mt-2.5">
                                                    <input type="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <label className="mt-2.5 block text-sm font-semibold leading-6 body-text">Last Name</label>
                                                <div className="mt-2.5">
                                                    <textarea className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" rows="7" placeholder="Enter your message">    
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="flex items-end col-xl-12 col-md-12 col-sm-12">
                                                <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 hover:border-blue-500 hover:text-blue-500 sm:text-sm sm:leading-6" style={{margin: "0px"}}>Request Demo</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

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
