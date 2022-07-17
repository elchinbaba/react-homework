import { NavLink } from "react-router-dom";

const Trips = () => {
    return (
        <section className="trips">
            <h2 className="visually-hidden">Trips List</h2>
            <ul className="trip-list">
                <li className="trip-card">
                    <img src="./assets/images/iceland.jpg" alt="trip image" />
                    <div className="trip-card__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">Iceland</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>15</strong> days</span>
                                <span className="trip-info__level">easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">7000 $</strong>
                        </div>
                    </div>
                    <NavLink to="/trip" className="button">Discover a trip</NavLink>
                    {/* <a href="./trip.html" className="button">Discover a trip</a> */}
                </li>
                <li className="trip-card">
                    <img src="./assets/images/iceland.jpg" alt="trip image" />
                    <div className="trip-card__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">Iceland</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>15</strong> days</span>
                                <span className="trip-info__level">easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">7000 $</strong>
                        </div>
                    </div>
                    <NavLink to="/trip" className="button">Discover a trip</NavLink>
                    {/* <a href="./trip.html" className="button">Discover a trip</a> */}
                </li>
                <li className="trip-card">
                    <img src="./assets/images/iceland.jpg" alt="trip image" />
                    <div className="trip-card__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">Iceland</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>15</strong> days</span>
                                <span className="trip-info__level">easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">7000 $</strong>
                        </div>
                    </div>
                    <NavLink to="/trip" className="button">Discover a trip</NavLink>
                    {/* <a href="./trip.html" className="button">Discover a trip</a> */}
                </li>
                <li className="trip-card">
                    <img src="./assets/images/iceland.jpg" alt="trip image" />
                    <div className="trip-card__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">Iceland</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>15</strong> days</span>
                                <span className="trip-info__level">easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">7000 $</strong>
                        </div>
                    </div>
                    <NavLink to="/trip" className="button">Discover a trip</NavLink>
                    {/* <a href="./trip.html" className="button">Discover a trip</a> */}
                </li>
            </ul>
        </section>
    );
};

export default Trips;