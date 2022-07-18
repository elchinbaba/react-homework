import Header from "../components/Header/Header";
import Footer from "../components/Footer";

import dayjs from 'dayjs';

import { useState } from "react";
import { useParams } from "react-router";

import trips from '../data/trips.json';

const Trip = () => {
    const { tripId } = useParams();
    const trip = trips.find((trip) => trip.id === tripId);

    const [modalInvisibility, setModalInvisibility] = useState(true);

    const [date, setDate] = useState('mm/dd/yyyy');
    const [numberOfGuests, setNumberOfGuests] = useState(1);

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleBook = (event) => {
        event.preventDefault();

        const isDateValid = dayjs(date).diff(dayjs()) > 0;

        if (numberOfGuests) {
            if (isDateValid) {
                setModalInvisibility(true);
            }
            else {
                alert('Select further date');
            }
        }
    }

    return (
        <>
            <Header withNav={true} />
            <main className="trip-page">
                <h1 className="visually-hidden">Travel App</h1>
                <div className="trip">
                    <img src={trip.image} className="trip__img" alt="trip image" />
                    <div className="trip__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">{trip.title}</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                                <span className="trip-info__level">{trip.level}</span>
                            </div>
                        </div>
                        <div className="trip__description">
                            {trip.description}
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">{trip.price} $</strong>
                        </div>
                        <button className="trip__button button" onClick={() => setModalInvisibility(false)}>Book a trip</button>
                    </div>
                </div>
            </main>
            <Footer />
            <div hidden={modalInvisibility}>
                <div className="modal">
                    <div className="trip-popup">
                        <button className="trip-popup__close" onClick={() => setModalInvisibility(true)}>×</button>
                        <form className="trip-popup__form" autoComplete="off">
                            <div className="trip-info">
                                <h3 className="trip-info__title">{trip.title}</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                                    <span className="trip-info__level">{trip.level}</span>
                                </div>
                            </div>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Date</span>
                                <input name="date" type="date" value={date} onChange={handleDateChange} required />
                            </label>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Number of guests</span>
                                <input name="guests" type="number" min="1" max="10" value={numberOfGuests} onChange={(event) => setNumberOfGuests(event.target.value)} required />
                            </label>
                            <span className="trip-popup__total">
                            Total: <output className="trip-popup__total-value">{trip.price*numberOfGuests}$</output>
                            </span>
                            <button className="button" type="submit" onClick={handleBook}>Book a trip</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trip;