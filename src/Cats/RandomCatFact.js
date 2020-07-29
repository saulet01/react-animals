import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
//https://alexwohlbruck.github.io/cat-facts/docs/

function RandomCatFact(props) {
    const [catFacts, setCatFacts] = React.useState(null);

    const [firsLoad, setFirstLoad] = React.useState(false);

    async function fetchData() {
        const res = await fetch("https://cat-fact.herokuapp.com/facts");
        res.json().then(data => {
            const allData = data.all;
            const randomFacts = allData[Math.floor(Math.random() * allData.length)].text;
            setCatFacts(randomFacts);
        });
    }

    React.useEffect(() => {
        if (!firsLoad) {
            setFirstLoad(true);
            fetchData();
        }

        if (props.count === "00: 00") fetchData();
    }, [firsLoad, props.count]);

    if (catFacts == null) return <div> Loading... </div>;

    return (
        <MainContainer>
            <h1>Random Cat Facts:</h1>
            <p>{catFacts}</p>
        </MainContainer>
    );
}

export default RandomCatFact;
