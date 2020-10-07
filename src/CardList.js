import React from 'react';
import Card from './Card';

export function CardList({data = []}) {
    return (<div>
        {data.map(profile => <Card key={profile.id} {...profile} />)}
    </div>);
}

export default CardList;