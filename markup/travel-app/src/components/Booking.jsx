const Booking = ({ booking, handleBooks }) => {
    const date = new Date(booking.date).toLocaleDateString("uk-Uk").toString().replaceAll('/', '.');

    const handleClose = (id) => {
        handleBooks(id);
    };

    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                <li className="booking">
                    <h3 className="booking__title">{booking.trip.title}</h3>
                    <span className="booking__guests">{booking.guests} guests</span>
                    <span className="booking__date">{date}</span>
                    <span className="booking__total">{booking.totalPrice} $</span>
                    <button className="booking__cancel" title="Cancel booking" onClick={() => handleClose(booking.id)}>
                        <span className="visually-hidden">Cancel booking</span>
                        ×
                    </button>
                </li>
            </ul>
        </main>
    );
};

export default Booking;