import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

export default function Wishlist() {
    return (
        <>
            <Navbar />

            <div className="py-8 px-16 mx-auto max-w-screen-xl lg:py-16">
                <div>
                    <h1 className="text-3xl text-gray-300 font-medium mb-4">Wishlist</h1>
                </div>
            </div>

            <Footer />
        </>
    )
}   