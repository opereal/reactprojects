import React from "react";
import { players } from "./Players";
import PlayerCard from "./PlayerCard";

const PlayersList = () => {
  return (
    <div>
        {/* Mapping from playercard to PlayersList */}
      {players.map((player) => {
        return <PlayerCard playerName={player.name} playerCurrentTeams={player.CurrentTeams} playerNationality={player.nationality} playerjerseyNumber={player.jerseyNumber} playerage={player.age} playerurl={player.url}/>;
      })}
    </div>
  );
};

export default PlayersList;
