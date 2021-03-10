import { useEffect, useState } from "react";
import Header from "../Header/Header"
import LeagueCard from "../LeagueCard/LeagueCard";
import './Home.css';



const Home = () => {
    const [allLeagues, setAllLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => {
            const sliceData = data.leagues.slice(0,15);
            setAllLeagues(sliceData);
            //console.log(data);
        })
    },[])
    
    return (
        <div className="leagueBody">
            <div className="leagueHeader">
                <Header></Header>
            </div>
            <div className="leagueBoard">
                {/* <h1>Length:{allLeagues.length}</h1> */}
                {
                    allLeagues.map(singleLeague => <LeagueCard key={singleLeague.idLeague} singleLeague={singleLeague}></LeagueCard>)
                }
            </div>
        </div>
    );
};

export default Home;