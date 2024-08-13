import Banner from "../../components/Banner";
import Footer from "../../components/Footer/Footer";
import FreeGames from "../../components/FreeGames";
import Navbar from "../../components/Navbar/Navbar";
import Personalized from "../../components/Personalized";
import PersonalizedNews from "../../components/PersonalizedNews";
import SwiperGame from "../../components/SwiperGame";

export default function Home() {
    return (
        <>
            <Navbar />
            <Banner />

            <div className="py-8 px-16 mx-auto max-w-screen-xl lg:py-16">
                <Personalized />

                <SwiperGame />

                <FreeGames />

                <PersonalizedNews />

            </div>

            <Footer/>
        </>
    )
}