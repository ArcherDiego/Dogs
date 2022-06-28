import styled from "styled-components";

const UserHeaderStyle = styled.header`
    ${({theme}) => theme.container}
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    position: relative;

    h2{
        font-family: ${({theme}) => theme.fontFamily.secund};
        line-height: 1;
        font-size: 3rem;
        margin: 1rem 0;
        position: relative;
        z-index: 1;
    }

    h2::after{
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background-color: #fb1;
        position: absolute;
        bottom: 5px;
        left: -5px;
        border-radius: .2rem;
        z-index: -1;
    }

    nav{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
`;

export default UserHeaderStyle
