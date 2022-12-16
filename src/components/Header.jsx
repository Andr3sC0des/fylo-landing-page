import React from "react"
import { default as logo } from "../assets/logo.svg"

import illustration from "../assets/illustration-1.svg"

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className={`mt-4 mx-4 sm:mt-12 sm:mx-12 flex justify-between items-center`}>
                    <img src={logo} alt="" className="h-6 my-auto md:h-8" />
                    <ul className="flex place-content-center">
                        <li><a className={`block p-4 hover:text-gray-400 text-xs md:text-base`} href="">Features</a></li>
                        <li><a className={`block p-4 hover:text-gray-400 text-xs md:text-base`} href="">Team</a></li>
                        <li><a className={`block p-4 hover:text-gray-400 text-xs md:text-base`} href="">Sign In</a></li>
                    </ul>
                </nav>

                <section className="flex flex-col md:flex-row-reverse justify-around items-center px-4 mt-8">

                    <img src={illustration} alt="" className="block w-80 md:w-2/4"/>

                    <article>
                        <h1 className="font-raleway text-3xl font-bold text-center mt-8 text-very-dark-blue md:max-w-md md:text-left ">All your files in one secure location, accessible anywhere.</h1>
                        <p className="font-opensans text-very-dark-blue font-medium mt-8 text-center md:max-w-md md:text-left">Fylo stores your most important files in one secure location.
                            Access them wherever you need, share and collaborate with friends,
                            family, and co-workers.</p>

                        <form className="md:flex md:gap-4 md:mt-8">
                            <input type="text" className="h-10 pl-8 block mx-auto rounded-sm mt-8 w-4/5 border border-black md:mt-0 md:w-4/5" placeholder="Enter your email..." />
                            <button className="h-10 block mx-auto bg-bright-blue font-bold rounded-sm w-4/5 mt-4 text-white md:mt-0 md:w-1/3">Get Started</button>
                         
                        </form>
                        
                    </article>


                </section>

            </header>
        );

    }
}

export default Header