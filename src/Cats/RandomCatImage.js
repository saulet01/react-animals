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

    const [firsLoad, setFirstLoad] = React.useState(false);

    async function fetchData() {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        res.json().then(res => setCatImageUrl(res[0].url));
    }

    React.useEffect(() => {
        if (!firsLoad) {
            setFirstLoad(true);
            fetchData();
        }

        if (props.count === "00: 00") fetchData();
    }, [firsLoad, props.count]);

    if (catImageUrl == null) return <div> Loading </div>;

    return (
        <MainContainer>
            <Image src={catImageUrl} />
            {console.log(props.count)}
        </MainContainer>
    );
}

export default RandomCatImage;
