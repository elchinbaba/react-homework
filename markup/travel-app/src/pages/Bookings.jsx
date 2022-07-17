import Header from "../components/Header/Header";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

const Bookings = () => {
    return (
        <>
            <Header withNav={true} />
            <Booking />
            <Footer />
        </>
    );
};

export default Bookings;