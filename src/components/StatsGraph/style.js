import styled from "styled-components";

export const GraphsStyle = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;

    @keyframes animeLeft {
        to{
            opacity: 1;
            transform: initial;
        }
    }

    div{
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 0.2rem;
        display: grid;
        align-items: center;
    }

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;
        margin-bottom: 2rem;
    }
`;

export const ViewStyle = styled.div`
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2rem;

    @media (max-width: 40rem) {
        grid-column: 1;
    }
`;
