import React, { useEffect, useState } from 'react';
import './LeagueCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const LeagueCard = (props) => {
    const {idLeague, strSport, strLeague} = props.singleLeague;
    //console.log(props.singleLeague);
    
    const [singeLeagueCart,setSingleLeagueCart] = useState({});

    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setSingleLeagueCart(data.leagues[0]))
    },[idLeague]);
    

    const {strBadge} = singeLeagueCart;

    return (
        <div className="leagueCart">
            <img src={strBadge} alt=""/>
            <h2>{strLeague}</h2>
            <p>Sport Type: {strSport}</p> 
            <Link to={`/leagueDetail/id=${idLeague}`}>
                <button><strong>Explore</strong> <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default LeagueCard;