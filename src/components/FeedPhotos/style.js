import styled from "styled-components";

export const FeedPhotosStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;

    @keyframes animeLeft {
        to{
            opacity: 1;
            transform: initial;
        }
    }

    @media (max-width: 40rem) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
