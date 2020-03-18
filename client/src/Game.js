import React, { useState } from 'react';
import Xo from './components/game/XO';
import './game.css';

function Game() {
  const _ways = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  const [ways, setWays] = useState(_ways);

  const [player, setPlayer] = useState(0);

  const myFunction = index => {
    if (player === 0) {
      ways[index - 1] = 1; // set ways
      document.getElementById(`div${index}`).innerHTML = 'X';
      setPlayer(1);
    }
    if (player === 1) {
      ways[index - 1] = 0;
      document.getElementById(`div${index}`).innerHTML = 'O';
      setPlayer(0);
    }
    setWays(ways);

    check();
  };

  // const condition=(a,b,c)=>{
  //   if (
  //     (ways[a] === 1 && ways[b] === 1 && ways[c] === 1) ||
  //     (ways[a] === 0 && ways[b] === 0 && ways[c] === 0)
  //   ) {
  //     if (player === 1) {
  //       alert("the winner is O");
  //     } else {
  //       alert("the winner is X");
  //     }
  //   }
  // }

  const check = () => {
    // condition(0,1,2)
    if (
      (ways[0] === 1 && ways[1] === 1 && ways[2] === 1) ||
      (ways[0] === 0 && ways[1] === 0 && ways[2] === 0)
    ) {
      if (player === 1) {
        alert('the winner is O');
      } else {
        alert('the winner is X');
      }
    } else if (
      (ways[3] === 1 && ways[4] === 1 && ways[5] === 1) ||
      (ways[3] === 0 && ways[4] === 0 && ways[5] === 0)
    ) {
      if (player === 1) {
        alert('the winner is O');
      } else {
        alert('the winner is X');
      }
    } else if (
      (ways[6] === 1 && ways[7] === 1 && ways[8] === 1) ||
      (ways[6] === 0 && ways[7] === 0 && ways[8] === 0)
    ) {
      if (player === 1) {
        alert('the winner is O');
      } else {
        alert('the winner is X');
      }

      //
      if (player === 1) {
        alert('the winner is O');
      } else {
        alert('the winner is X');
      }
    } else if (
      (ways[2] === 1 && ways[5] === 1 && ways[8] === 1) ||
      (ways[2] === 0 && ways[5] === 0 && ways[8] === 0)
    ) {
      if (player === 1) {
        alert('the winner is O');
      } else {
        alert('the winner is X');
      }
    } else if (
      (ways[0] === 1 && ways[4] === 1 && ways[8] === 1) ||
      (ways[0] === 0 && ways[4] === 0 && ways[8] === 0)
    ) {
      if (player === 1) {
        alert('the winner is O');
      } else {
        alert('the winner is X');
      }
    } else if (
      (ways[2] === 1 && ways[4] === 1 && ways[6] === 1) ||
      (ways[2] === 0 && ways[4] === 0 && ways[6] === 0)
    ) {
      if (player === 1) {
        alert('the winner is O');
      } else {
        alert('the winner is X');
      }
      //
    }
  };

  return (
    <div className="App">
      <div>
        <div className="game">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBZAieOkulioNBvVilYHTpY5wiLdDKDFeXHj8aKSJYgKOj9_mS"
            alt="lets-play"
          /> */}
        </div>
        <div className="container">
          <div className="h1">
            <h1>Tic Tac Toe</h1>
          </div>
          <div className="row border">
            {ways.map((_, index) => (
              <Xo
                key={index}
                index={index + 1}
                myId={'div' + (index + 1)}
                myFunction={myFunction}
              />
            ))}
            {/* //_=ietem */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
