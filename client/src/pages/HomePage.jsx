import { Header } from "../components/Header"
import Footer from "../components/Footer"

import background from "../assets/background.jpeg"
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import PictureFrame from "../components/PictureFrame";

const HomePage = ()=>{
    const images = [img1, img2, img3, img4, img5, img6];

    return(
        <div className="flex flex-col min-h-screen hoem-page">
            <Header></Header>

            <div className="hero-section p-4 flex align-center justify-center h-100 bg-[url('../assets/background.jpeg')]">
                <div className="content w-full md:w-150 flex flex-col justify-center align-center">
                    <h1 className="font-bold">Find good, quality electronic devices </h1>
                    <p>At tech corner, we believe in providing the world with quality electronic devices </p>
                </div>
                <img src={background} alt="" className="w-100 hidden md:flex"/>
            </div>

            <div className="explore-products p-4 text-center">
                <h2>Explore our products</h2>
                <PictureFrame images={images}></PictureFrame>
            </div>

            {/* ✅ Footer added */}
            <footer className="mt-auto w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default HomePage
