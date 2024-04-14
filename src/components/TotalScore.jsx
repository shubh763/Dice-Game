import styled from 'styled-components';

const TotalScore = ({ score }) => {
    return (
        <ScoreContainer>
            <p>Total Score: <h1>{score}</h1></p>
        </ScoreContainer>
    );
};

export default TotalScore;

const ScoreContainer = styled.div`
    p {
        font-size: 24px;
        font-weight: bold;
    }
`;
