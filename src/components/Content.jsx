import React from "react"

import illustration2 from "../assets/illustration-2.svg"
import arrow from "../assets/icon-arrow.svg"
import quotes from "../assets/icon-quotes.svg"
import avatar from "../assets/avatar-testimonial.jpg"



class Content extends React.Component {
    render() {
        return (
            <main className="md:flex md:flex-row-reverse md:gap-4 items-center justify-around bg-cover bg-no-repeat bg-top bg-custom-curve-mobile md:bg-custom-curve-desktop mt-28 p-8">
                <img src={illustration2} alt="" className="block w-80 md:w-2/4 mx-auto" />

                <article className="md:w-2/4">
                    <h2 className="mt-12 font-bold text-center md:text-4xl text-very-dark-blue md:max-w-md md:mx-auto">Stay productive, wherever you are</h2>
                    <p className="mt-8 font-raleway md:max-w-md md:mx-auto">Never let location be an issue when accessing your files. Fylo has you
                        covered for all of your file storage needs.</p>
                    <p className="mt-8 font-raleway md:max-w-md md:mx-auto">Securely share files and folders with friends, family and colleagues for
                        live collaboration. No email attachments required!</p>
                    <a href="" className="flex justify-center w-fit mx-auto items-center border-b border-moderate-cyan text-moderate-cyan mt-8">
                        <span>See how Fylo works</span>
                        <img src={arrow} alt="" className="self-center ml-4" />
                    </a>


                    <article className="p-8 shadow-slate-600 shadow-xl rounded-sm w-full md:w-2/4 md:min-w-[400px] md:mx-auto mt-4">
                        <img src={quotes} alt="" className="block" />
                        <p className="mt-4">Fylo has improved our team productivity by an order of magnitude. Since
                            making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className="mt-4 flex items-center justify-left">
                            <img src={avatar} alt="" className="rounded-full block w-16" />
                            <div className="ml-8 w-fit">
                                <h4 className="font-bold">Kyle Burton</h4>
                                <span>Founder & CEO, Huddle</span>
                            </div>
                        </div>
                    </article>

                </article>

            </main>
        );
    }
}

export default Content

