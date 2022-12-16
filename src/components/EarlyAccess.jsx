import React from "react"

class EarlyAccess extends React.Component {
    render() {
        return (
            <section className="w-full p-8 bg-desaturated-blue md:flex md:gap-8 md:justify-around md:items-center">
                <article>
                    <h3 className="mt-12 md:mt-0 text-center font-bold text-white text-xl font-raleway md:max-w-md md:text-justify">Get early access today</h3>
                    <p className="mt-4 text-center text-white font-raleway md:max-w-md md:text-justify">It only takes a minute to sign up and our free starter tier is extremely generous.
                        If you have any questions, our support team would be happy to help you.</p>

                </article>

                <form className="flex justify-center items-center flex-col mt-6">
                    <input type="text" placeholder="email@example.com" className="rounded-md w-3/4 border border-gray-400 py-2 pl-8 md:w-80" />
                    <button className="bg-bright-blue w-3/4 mt-2 py-2 text-white md:w-80">Get Started For Free</button>
                </form>

            </section>
        );
    }
}

export default EarlyAccess