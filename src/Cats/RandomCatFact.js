import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
//https://alexwohlbruck.github.io/cat-facts/docs/

function RandomCatFact() {
    const [catFacts, setCatFacts] = React.useState(null);

    React.useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts")
            .then(response => {
                return response.json();
            })
            .then(data => {
                const allData = data.all;
                const randomFacts = allData[Math.floor(Math.random() * allData.length)].text;
                console.log(data);
                setCatFacts(randomFacts);
            });
    }, []);

    if (catFacts == null) return <div> Loading... </div>;

    return (
        <MainContainer>
            <h1>Random Cat Facts:</h1>
            <p>{catFacts}</p>
        </MainContainer>
    );
}

export default RandomCatFact;
