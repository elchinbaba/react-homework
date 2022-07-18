import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const Trip = ({ trip }) => {
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
                        <button className="trip__button button">Book a trip</button>
                    </div>
                </div>
            </main>
            <Footer />
            <div hidden>
                <div className="modal">
                    <div className="trip-popup">
                        <button className="trip-popup__close">×</button>
                        <form className="trip-popup__form" autoComplete="off">
                            <div className="trip-info">
                                <h3 className="trip-info__title">Iceland</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>15</strong> days</span>
                                    <span className="trip-info__level">easy</span>
                                </div>
                            </div>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Date</span>
                                <input name="date" type="date" required />
                            </label>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Number of guests</span>
                                <input name="guests" type="number" min="1" max="10" value="1" required />
                            </label>
                            <span className="trip-popup__total">
                            Total: <output className="trip-popup__total-value">4000$</output>
                            </span>
                            <button className="button" type="submit">Book a trip</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trip;