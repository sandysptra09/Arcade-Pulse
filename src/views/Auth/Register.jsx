import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">

                <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                    <div
                        className="w-full h-auto bg-[#201c1c] hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://i.imgur.com/7h8rr7F.png')]"
                        
                    ></div>

                    <div className="w-full lg:w-7/12 bg-[#201c1c] p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-[#201c1c] rounded">
                            <div className="mb-4 md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-normal text-white">
                                        Username
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="username_registration"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                                
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-normal text-white">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email_registration"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-normal text-white">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password_registration"
                                        type="password"
                                        placeholder="******************"
                                    />
                                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-normal text-white">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password_registration"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-normal text-white bg-[#f39c40] rounded-full hover:bg-[#FF9119] focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <Link
                                    className="inline-block text-sm text-[#f39c40] align-baseline hover:text-[#FF9119]"
                                    to='/auth/forget-password'
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="text-center">
                                <Link
                                    className="inline-block text-sm text-white align-baseline"
                                    to='/auth/login'
                                >
                                    Already have an account? <span className="text-[#f39c40] hover:text-[#FF9119]">Login!</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
