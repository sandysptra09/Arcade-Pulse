import { Link } from "react-router-dom"

export default function ForgetPassword() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-24">

                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                        <div
                            className="w-full h-auto bg-[#201c1c] hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://i.imgur.com/RWStnjL.png')]"

                        ></div>

                        <div className="w-full lg:w-7/12 bg-[#201c1c] p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">
                                Forgot Your Password?</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-[#201c1c] rounded">
                                <div className="mb-4 md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        {/* <label className="block mb-2 text-sm font-normal text-white">
                                            Username or Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="username_or_email"
                                            type="text"
                                            placeholder="Username or Email"
                                        /> */}
                                        <p className="text-center mb-2 text-md font-normal text-white">
                                            Just enter your email address below and we'll send you a link via email to reset your password!
                                        </p>
                                    </div>

                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-normal text-white">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email_forget_password"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-10 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-normal text-white bg-[#f39c40] rounded-full hover:bg-[#FF9119] focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Send Reset Instructions
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-white align-baseline"
                                        to='/auth/login'
                                    >
                                        Remembered password? <span className="text-[#f39c40] hover:text-[#FF9119]">Login!</span>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}