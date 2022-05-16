
import './App.css';
import NavBar from './components/NavBar';
import Players from './components/Players';

function App() {

  const players = [
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
  ];

  const addToTeam = (id) => {
    players.map((player) => {
      if (player.id === id) {
        if(!player.chosen){
          player.chosen = true;
        }else{
          alert("This player is already in the team!");
        }
      }
    });

  };

  return (
    <div className="App">
      <NavBar />
      <Players players={players} onAdd={addToTeam}/>
    </div>
  );
}

export default App;
