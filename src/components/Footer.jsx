import React from "react"
import phone from "../assets/icon-phone.svg"
import email from "../assets/icon-email.svg"
import logowhite from "../assets/logo-white.svg"


class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-very-dark-blue grid grid-cols-1 md:grid-cols-4 px-8 text-white items-center pb-16">

            <img src={logowhite} alt="" className="md:ml-16 mt-16 md:col-span-4" />

                <section className="flex flex-col gap-2 mt-8 md:mx-auto">
                    <article className="flex gap-4 justify-left items-center">
                        <img src={phone} alt="" className="block" />
                        <span>Phone: +1-543-123-4567</span>
                    </article>
                    <article className="flex gap-4 justify-left items-center">
                        <img src={email} alt="" className="block" />
                        <span>example@fylo.com</span>
                    </article>
                </section>

                <section className="mt-8 md:mx-auto">
                    <ul>
                        <li><a className="mt-2 block" href="">About Us</a></li>
                        <li><a className="mt-2 block" href="">Jobs</a></li>
                        <li><a className="mt-2 block" href="">Press</a></li>
                        <li><a className="mt-2 block" href="">Blog</a></li>
                    </ul>
                </section>

                <section className="mt-8 md:mx-auto">
                    <ul>
                        <li><a className="mt-2 block" href="">Contact Us</a></li>
                        <li><a className="mt-2 block" href="">Terms</a></li>
                        <li><a className="mt-2 block" href="">Privacy</a></li>
                    </ul>
                </section>

                <section className="flex gap-2 my-8 mx-auto">
                    <a href="" className="border border-white rounded-full w-8 h-8 flex justify-center items-center"><i className="block fa-brands fa-facebook-f"></i></a>
                    <a href="" className="border border-white rounded-full w-8 h-8 flex justify-center items-center"><i className="block fa-brands fa-twitter"></i></a>
                    <a href="" className="border border-white rounded-full w-8 h-8 flex justify-center items-center"><i className="block fa-brands fa-instagram"></i></a>
                </section>


            </footer>
        );
    }
}

export default Footer