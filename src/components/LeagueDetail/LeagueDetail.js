import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueInfo from '../LeagueInfo/LeagueInfo';
import './LeagueDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';



const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [singleLeague, setSingleLeagueCart] = useState({});
    //console.log(idLeague);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setSingleLeagueCart(data.leagues[0]))
    }, [idLeague])

    const { strDescriptionEN, strTwitter, strFacebook, strYoutube, strBanner, strLogo } = singleLeague;
    
    console.log(singleLeague);

    return (
        <div className="bodyBack">
            <div className="backDetail" 
                style={{backgroundImage: `url(${strBanner || strLogo})`}}>
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
                    <a id="fb" href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a id="tw" href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a id="yt" href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};



export default LeagueDetail;