import styled from "styled-components";

export const WrapperStyle = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const LoadingStyle = styled.div`
    background: rgba(255, 255, 255, 0.5);
    margin: auto;
    padding-left: 5px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;
