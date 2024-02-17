function TeamsList({team}){
    return(
        <div className="App1">
            <h2>{team.tname}</h2>
            {
                team.tmembers.map((m)=>{
                    return <li>{m}</li>
                })
            }
        </div>
    )
}
export default TeamsList;