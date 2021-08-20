import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../productCard/Card';
import Filter from '../filter/Filter';

function Favorites() {
    const favorites = useSelector(state => state.favorites);
    const mainData = favorites.map((item) => (
        <Card
            key={item.id}
            item={item}
        />
    ));
    return (
        <div className="shop">
            <Filter />

            <div className="shop-content">{mainData}</div>
        </div>
    );
}

export default Favorites;
