import { useEffect } from "react";
import { useState } from "react";

const TripsFilter = ({ setFilter }) => {

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    }

    const [search, setSearch] = useState('');
    const [duration, setDuration] = useState('');
    const [level, setLevel] = useState('');

    useEffect(() => {
        setFilter({ search, duration, level });
    }, [search, duration, level, setFilter]);

    return (
        <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off">
            <label className="trips-filter__search input">
                <span className="visually-hidden">Search by name</span>
                <input name="search" type="search" placeholder="search by title" value={search} onChange={handleSearchChange} />
            </label>
            <label className="select">
                <span className="visually-hidden">Search by duration</span>
                <select name="duration" value={duration} onChange={handleDurationChange}>
                    <option value="">duration</option>
                    <option value="0_x_5">&lt; 5 days</option>
                    <option value="5_x_10">&lt; 10 days</option>
                    <option value="10_x">&ge; 10 days</option>
                </select>
            </label>
            <label className="select">
                <span className="visually-hidden">Search by level</span>
                <select name="level" value={level} onChange={handleLevelChange}>
                    <option value="">level</option>
                    <option value="easy">easy</option>
                    <option value="moderate">moderate</option>
                    <option value="difficult">difficult</option>
                </select>
            </label>
            </form>
        </section>
    );
};

export default TripsFilter;