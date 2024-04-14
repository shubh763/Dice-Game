import styled from 'styled-components';
import { useState } from "react";
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(null); // Initialize with null or any default value
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You haven't selected any number");
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);

        setCurrentDice(randomNumber); // Update currentDice directly with the new value

        

        if (selectedNumber === randomNumber){
            setScore(prev => prev + randomNumber);
        } else {
            setScore(prev => prev - 2);
        }
        setSelectedNumber(null); // Reset selectedNumber to null
    };

    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score} /> {/* Display TotalScore component with score prop */}
                <NumberSelector 
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button
                onClick={() => setShowRules(prev => !prev)}
                >{showRules ? "Hide" : "Show"} Rules</Button>

            </div>
            {showRules && <Rules />}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
    padding-top: 70px;

    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;
