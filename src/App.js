
import './App.css';
import NavBar from './components/NavBar';
import Players from './components/Players';
import { useState } from "react";
import Team from './components/Team';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const[teamNum, setTeamNum] = useState(0);
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Nikola Jokic",
      description:
        "Team: Denver Nuggets Position: Center",
      chosen: false,
    },
    {
      id: 2,
      name: "Kevin Durant",
      description:
        "Team: Brooklyn Nets Position: Small Forward",
      chosen: false,
    },
    {
      id: 3,
      name: "Kyrie Irving",
      description:
      "Team: Brooklyn Nets Position: Point Guard",
      chosen: false,
    },
  ]);

  const addToTeam = (id) => {
    players.map((player) => {
      if (player.id === id) {
        if(!player.chosen){
          player.chosen = true;
          const a = teamNum + 1;
          setTeamNum(a);
        }else{
          alert("This player is already in the team!");
        }
      }
    });

  };

  return (
    <BrowserRouter>
    <NavBar teamNum={teamNum} />
    <Routes>
      <Route
        path="/"
        element={
          <Players
            players={players}
            onAdd={addToTeam}
          />
        }
      />
      <Route path="/team" element={<Team/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
