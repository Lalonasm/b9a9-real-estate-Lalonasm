
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import SwiperSlider from "../Banner/SwiperSlider";
import Properties from "../Properties/Properties";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <SwiperSlider></SwiperSlider>
            <Properties></Properties>
            <Footer></Footer>
        </div>
    );
};

export default Home;