import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueInfo from '../LeagueInfo/LeagueInfo';
import './LeagueDetail.css';
import facebookPic from '../../pictures/Facebook.png';
import youtubePic from '../../pictures/YouTube.png';
import twitterPic from '../../pictures/Twitter.png';



const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [singleLeague, setSingleLeagueCart] = useState({});
    //console.log(idLeague);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setSingleLeagueCart(data.leagues[0]))
    }, [idLeague])

    const { strBadge, strDescriptionEN, strTwitter, strFacebook, strYoutube } = singleLeague;
    
    // console.log(strYoutube);
    // console.log(strTwitter);
    // console.log(strFacebook);


    return (
        <div className="bodyBack">
            <div className="backDetail">
                <img src={strBadge} alt="" />
            </div>

            <div className="leagueDetailBody">
                <div className="leagueInfo">
                    <LeagueInfo singleLeague={singleLeague}></LeagueInfo>
                </div>

                <div className="leagueDescription">
                    <p>{strDescriptionEN}</p>
                    <br/>  
                    <br/>
                    <p>{strDescriptionEN}</p>  
                </div>

                <div className="socialIcon">
                    <a href={strFacebook} target="_blank" rel="noopener noreferrer"><img src={facebookPic} alt=""/></a>
                    <a href={strTwitter} target="_blank" rel="noopener noreferrer"><img src={twitterPic} alt=""/></a>
                    <a href={strYoutube} target="_blank" rel="noopener noreferrer"><img src={youtubePic} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetail;