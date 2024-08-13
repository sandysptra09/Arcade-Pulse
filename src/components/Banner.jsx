export default function Banner() {
    return (
        <div>
            <section
                className="bg-center bg-no-repeat bg-[url('https://static1.squarespace.com/static/55ef0e29e4b099e22cdc9eea/55ef1423e4b030b646dd5fc2/58ff35e703596e67a21fc3e1/1493120845191/middle-earth-shadow-of-war-video-shows-new-gameplay-and-gear-options-social.jpg?format=1500w')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-16">
                    <h1 className="mb-4 text-4xl text-gray-300 font-medium mb-4">
                        Discover the best <span className="text-[#FF9119]">free-to-play</span> games!
                    </h1>
                    <p className="mb-8 text-base font-normal text-gray-400 lg:text-lg sm:px-16 lg:px-48">Track what you've played
                        and search for what to play next! Plus get free premium loot!
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#FF9119] hover:bg-[#d4730b]">
                            Get started
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#"
                            className="inline-flex justify-center hover:text-white items-center py-3 px-5 text-base font-medium text-center text-gray-400 rounded-lg border border-gray-400 hove:border-white">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
