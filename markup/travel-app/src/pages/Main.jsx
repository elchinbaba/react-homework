import Header from '../components/Header/Header';
import TripsFilter from "../components/TripsFilter";
import Trips from "../components/Trips";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <Header withNav={true} />
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <TripsFilter />
                <Trips />
            </main>
            <Footer />
        </>
    )
};

export default Main;