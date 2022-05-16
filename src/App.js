
import './App.css';
import NavBar from './components/NavBar';
import Players from './components/Players';
import { useState } from "react";
import Team from './components/Team';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const[teamNum, setTeamNum] = useState(0);
  const[chosenPlayers, setChosenPlayers] = useState([]);
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

  const refreshTeam = () => {
    const newPlayers = players.filter((player) => player.chosen);
    setChosenPlayers(newPlayers);
  };


  const addToTeam = (id) => {
    players.map((player) => {
      if (player.id === id) {
        if(teamNum < 5){
          player.chosen = true;
          const a = teamNum + 1;
          setTeamNum(a);
          // refreshTeam();
          updateTeam(player);
        }else{
          alert("Your team is already full!");
        }
      }
    });
  };

  const removeFromTeam = (id) => {
    players.map((player) => {
      if (player.id === id) {
        player.chosen=false;
        const a = teamNum - 1;
        setTeamNum(a);
        refreshTeam();
      }
    });
  };

  const updateTeam = (player) => {
    setChosenPlayers([...chosenPlayers, player]);
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
            onRemove={removeFromTeam}
          />
        }
      />
      <Route path="/team" element={<Team chosenPlayers={chosenPlayers} onRemove={removeFromTeam}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
