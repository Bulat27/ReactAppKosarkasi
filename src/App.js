
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
      image: "../assets/jokic.jpg"
    },
    {
      id: 2,
      name: "Kevin Durant",
      description:
        "Team: Brooklyn Nets Position: Small Forward",
      chosen: false,
      image: "../assets/durant.jpg"
    },
    {
      id: 3,
      name: "Kyrie Irving",
      description:
      "Team: Brooklyn Nets Position: Point Guard",
      chosen: false,
      image: "../assets/kyrie.jpg"
    },
    {
      id: 4,
      name: "Jrue Holiday",
      description:
      "Team: Milwaukee Bucks Position: Point Guard",
      chosen: false,
      image: "../assets/jrue.jpg"
    },
    {
      id: 5,
      name: "Bogdan Bogdanovic",
      description:
      "Team: Atlanta Hawks Position: Shooting Guard",
      chosen: false,
      image: "../assets/bogdan.jpg"
    },
    {
      id: 6,
      name: "Boban Marjanovic",
      description:
      "Team: Dallas Mavericks Position: Center",
      chosen: false,
      image: "../assets/boban.jpg"
    },
    {
      id: 7,
      name: "Kelly Oubre Jr.",
      description:
      "Team: Charlotte Hornets Position: Small Forward",
      chosen: false,
      image: "../assets/kelly.jpg"
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
