import styled from "styled-components";

export const WrapperStyle = styled.div`
    display: grid;

    img{
        display: block;
        max-width: 100%;
        grid-area: 1/1;
        opacity: 0;
        transition: 0.2s;
    }
`;

export const SkeletonStyle = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0%, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;

    @keyframes skeleton {
        from{
            background-position: 0;
        }
        to{
            background-position: -200%;
        }
    }
`;
