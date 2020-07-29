import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
`;

function RandomCatImage(props) {
    const [catImageUrl, setCatImageUrl] = React.useState(null);
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
                fetchData();
                timer = duration;
            }
        }, 1000);
    };

    async function fetchData() {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        res.json().then(res => setCatImageUrl(res[0].url));
    }

    React.useEffect(() => {
        countDown();
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (catImageUrl == null) return <div> Loading </div>;

    return (
        <MainContainer>
            <Image src={catImageUrl} />
            <h2>New cat image will appear in {countDownTime} seconds</h2>
        </MainContainer>
    );
}

export default RandomCatImage;
