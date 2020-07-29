import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
`;

// https://docs.thecatapi.com/

function RandomDogImage(props) {
    const [dogImageUrl, setDogImageUrl] = React.useState(null);

    const [firsLoad, setFirstLoad] = React.useState(false);

    async function fetchData() {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        res.json().then(data => {
            setDogImageUrl(data.message);
        });
    }

    React.useEffect(() => {
        if (!firsLoad) {
            setFirstLoad(true);
            fetchData();
        }

        if (props.count === "00: 00") fetchData();
    }, [firsLoad, props.count]);

    if (dogImageUrl == null) return <div> Loading </div>;

    return (
        <MainContainer>
            <Image src={dogImageUrl} />
        </MainContainer>
    );
}

export default RandomDogImage;
