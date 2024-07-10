import { Button, ButtonGroup } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import TooltipComponent from './TooltipComponent';

function App() {
  const [position, setPosition] = useState("left");

  const handleButtonClick = (position)=>{
    setPosition(position);
  };

  return (
    <div className="App">
      <TooltipComponent position ={position} />

      <ButtonGroup aria-label='Button Group' id='buttons'>
        <Button variant='primary' onClick={() => handleButtonClick("left")}>
          Left
        </Button>
        <Button variant='secondary' onClick={() => handleButtonClick("right")}>
          Right
        </Button>
        <Button variant='success' onClick={() => handleButtonClick("top")}>
          Top
        </Button>
        <Button variant='warning' onClick={() => handleButtonClick("bottom")}>
          Bottom
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
