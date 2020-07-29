import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import RandomCatImage from "./Cats/RandomCatImage";
import "./App.css";
import RandomDogImage from "../src/Dogs/RandomDogImage";
import RandomCatFacts from "../src/Cats/RandomCatFact";
import { red } from "color-name";

const MainContainer = styled.div`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    display: flex;
`;

function App() {
    const [countDownTime, setCountDown] = React.useState(null);

    // *******************
    // Adapted from: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
    // *******************
    const countDown = () => {
        const duration = 30;
        var timer = duration,
            minutes,
            seconds;

        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            setCountDown(`${minutes}: ${seconds}`);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    };

    React.useEffect(() => {
        countDown();
    }, []);

    return (
        <MainContainer>
            <Header />
            <Router>
                <HomePage path="/" />
                <RandomCatImage path="/randomCat" count={countDownTime} />
                <RandomDogImage path="/randomDog" count={countDownTime} />
                <RandomCatFacts path="/catfacts" count={countDownTime} />
            </Router>
            <div style={{ width: 700 }}>
                <h2>
                    New random image/fact will appear in <span style={{ color: "red" }}>{countDownTime}</span> seconds
                </h2>
            </div>
        </MainContainer>
    );
}

export default App;
