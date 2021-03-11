import React from 'react';
import './LeagueInfo.css';
import male from '../../pictures/male.png';
import female from '../../pictures/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faVolleyballBall, faMapPin, faMale, faFemale } from '@fortawesome/free-solid-svg-icons'

const LeagueInfo = (props) => {
    //console.log(props.singleLeague);
    const {intFormedYear, strCountry, strSport, strGender, strLeague, strBadge} = props.singleLeague;
    
    let groupPic;
    let groupIcon;
 
    if(strGender ==='Male'){
        groupPic = <img src={male} alt=""/>;
        groupIcon = faMale;
    }
    else{
        groupPic = <img src={female} alt=""/>;
        groupIcon = faFemale;
    }
    return (
        <div className="card">
            <div className="leagueLogo">
                <img src={strBadge} alt="" />
            </div>
            <div className="leagueInfoCard">
                <h2>{strLeague}</h2>
                <p><FontAwesomeIcon icon={faMapPin} /><strong> Founded: {intFormedYear}</strong></p>
                <p><FontAwesomeIcon icon={faFlag} /><strong> Country: {strCountry}</strong></p>
                <p><FontAwesomeIcon icon={faVolleyballBall} /><strong> Sport Type: {strSport}</strong></p>
                <p><FontAwesomeIcon icon={groupIcon} /><strong> Gender: {strGender}</strong></p>
            </div>
            <div className="leagueInfoPic">
                {/* <img src={male} alt=""/> */}
                {
                    groupPic
                }
            </div>
        </div>
    );
};

export default LeagueInfo;