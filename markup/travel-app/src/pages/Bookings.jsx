import Header from "../components/Header/Header";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

import bookings from '../data/bookings.json';
import { useState, useEffect } from "react";

const Bookings = () => {
    bookings = bookings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const [books, setBooks] = useState(bookings);

    const handleBooks = (id) => {
        setBooks(books.filter((booking) => booking.id !== id));
    };

    useEffect(()=>{}, [books]);

    return (
        <>
            <Header withNav={true} />
            {books.map((booking) => (
                <Booking booking={booking} handleBooks={() => handleBooks(booking.id)} key={booking.id} />
            ))}
            <Footer />
        </>
    );
};

export default Bookings;