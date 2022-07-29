import styled from "styled-components";
import View from "../../assets/image/visualizacao.svg"

export const FeedPhotosItemStyle = styled.li`
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;

    div{
        grid-area: 1/1;
    }

    &:hover span{
        display: flex;
    }

    &:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;
    }

    @media (max-width: 40rem) {
        grid-column: initial;
        grid-row: initial;
    }
`;

export const ViewStyle = styled.span`
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: none;
    grid-area: 1/1;

    &::before{
        width: 16px;
        height: 10px;
        content: '';
        display: inline-block;
        margin-right: 0.25rem;
        background: url('${View}');
    }
`;
