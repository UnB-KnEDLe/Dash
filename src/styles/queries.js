import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-width: 900px;
    position: relative;
`;

export const Graph = styled.div`
    border: 1px solid #ccc;
    border-radius: 1rem;
    height: 600px;

    canvas {height: 600px;}
`;

export const Header = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: ${props => props.showHistoryBtn ? '2rem auto 8rem 2rem' : 'auto 8rem 2rem'};

    align-items: center;
    margin-bottom: 1rem;

    .btn {
        width: unset;
        min-width: unset;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding-left: 0 1rem;

    input {
        border: none;
        width: 100%;
        height: 30px;
        font-size: 14px;
        color: #333;
    }

    .input-icon {color: #2980b9;}
`