import { NavLink } from "react-router-dom";

const Trips = ({ trips, filter }) => {
    const { search, duration, level } = filter;   
    if (search) {
        trips = trips.filter(trip => {
            return trip.title.toUpperCase().indexOf(search.toUpperCase()) > -1;
        });
    }

    if (duration) {
        if (duration === '0_x_5') {
            trips = trips.filter(trip => {
                return +trip.duration < 5;
            });
        } else if (duration === '5_x_10') {
            trips = trips.filter(trip => {
                return +trip.duration > 5 && +trip.duration < 10;
            });
        } else if (duration === '10_x') {
            trips = trips.filter(trip => {
                return +trip.duration > 10;
            });
        }
    }

    if (level) {
        trips = trips.filter((trip) => {
            return trip.level === level;
        });
    }

    return (
        <section className="trips">
            <h2 className="visually-hidden">Trips List</h2>
            <ul className="trip-list">
                {trips.map((trip) => (
                    <li className="trip-card" key={trip.id}>
                        <img src={trip.image} alt="trip image" />
                        <div className="trip-card__content">
                            <div className="trip-info">
                                <h3 className="trip-info__title">{trip.title}</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                                    <span className="trip-info__level">{trip.level}</span>
                                </div>
                            </div>
                            <div className="trip-price">
                                <span>Price</span>
                                <strong className="trip-price__value">{trip.price} $</strong>
                            </div>
                        </div>
                        <NavLink to="/trip" className="button">Discover a trip</NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Trips;