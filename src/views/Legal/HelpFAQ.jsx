import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'

export default function HelpFAQ() {
    return (
        <>
            <Navbar />

            <div className="py-8 px-16 mx-auto max-w-screen-xl lg:py-16">
                <div className="text-center mb-12">
                    <h5 className="mb-6">FAQ</h5>
                    <h1 className="text-3xl text-gray-300 font-medium mb-2">
                        Frequently Asked Questions
                    </h1>
                </div>

                <div>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="mb-4 text-justify">
                            <h1 className="text-gray-300 mb-4">How does Arcade Pulse work?</h1>
                            <p className="text-sm">
                                Arcade Pulse is our solution to create an interconnected ecosystem
                                that brings all the best free-to-play games and MMO Games in one
                                place. On top of that we don’t follow the convencional digital
                                storefront format, instead our platform is designed to constantly
                                reward users with free perks, including free premium content,
                                currencies, starter packs, early access to games and much more. On
                                Arcade Pulse there is no price tags, it’s all free!
                            </p>
                        </div>
                        <div className="mb-4 text-justify">
                            <h1 className="text-gray-300 mb-4">
                                Why should I register on Arcade Pulse?
                            </h1>
                            <p className="text-sm">
                                You can easily browse Arcade Pulse without registering, however you
                                aren’t able to take advantage of the features we offer exclusively
                                to registered users, such as personalized game sugestions tailored
                                just for you, giveaways, user reviews, rating rights, user
                                library, user ranks and more.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="mb-4 text-justify">
                            <h1 className="text-gray-300 mb-4">
                                How does Arcade Pulse make money?
                            </h1>
                            <p className="text-sm">
                                We may sometimes earn a small commission from some publishers and
                                developers when you play their games or make a in-game purchase.
                                It’s what allows us to provide a free service. What we don't do is
                                sell or share your data. Regardless, we are focused on working
                                with all developers and publishers to bring more rewards and
                                <span className="text-[#FF9119]"> special offers</span> to our users entirely for free.
                            </p>
                        </div>
                        <div className="mb-4 text-justify">
                            <h1 className="text-gray-300 mb-4">How can I delete my account?</h1>
                            <p className="text-sm">
                                To delete your account, go to your account settings and scroll
                                down, then click on the "Request Account Delete" button. Once
                                you’ve confirmed, the deletion of your account will become
                                effective immediately. You can also <span className="text-[#FF9119]">contact us</span> directly if you are
                                having issues.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="mb-4 text-justify">
                            <h1 className="text-gray-300 mb-4">
                                My review has been removed, why?
                            </h1>
                            <p className="text-sm">
                                We may delete reviews that do not comply with our rules including
                                spam, hate-speech, swearing, illegal content and self promotion.
                            </p>
                        </div>
                        <div className="mb-4 text-justify">
                            <h1 className="text-gray-300 mb-4">
                                How do I level up my account and earn XP?
                            </h1>
                            <p className="text-sm">
                                Mostly, being active in the Arcade Pulse Platform will grant you XP.
                                Including playing games, rating games, submitting reviews and
                                more. However to keep everything fair for everyone some XP rewards
                                have automated cooldowns.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="mb-4 text-justify">
                            <h1 className="text-gray-300 mb-4">
                                Is Arcade Pulse Free to Use?
                            </h1>
                            <p className="text-sm">
                                Yes - it’s completely free to use.
                            </p>
                        </div>
                        {/* <div className="mb-4 text-justify">
                        <h1 className="text-gray-300 mb-4">
                            How do I level up my account and earn XP?
                        </h1>
                        <p className="text-sm">
                            Mostly, being active in the Arcade Pulse Platform will grant you XP.
                            Including playing games, rating games, submitting reviews and
                            more. However to keep everything fair for everyone some XP rewards
                            have automated cooldowns.
                        </p>
                    </div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
