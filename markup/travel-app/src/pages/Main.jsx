import { useState } from 'react';

import Header from '../components/Header/Header';
import TripsFilter from "../components/TripsFilter";
import Trips from "../components/Trips";
import Footer from "../components/Footer";

import trips from '../data/trips.json';

const Main = () => {
    const [filter, setFilter] = useState({
        search: '',
        duration: '',
        level: ''
    });

    return (
        <>
            <Header withNav={true} />
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <TripsFilter setFilter={setFilter} />
                <Trips trips={trips} filter={filter} />
            </main>
            <Footer />
        </>
    )
};

export default Main;