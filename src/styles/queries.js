import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    position: relative;
    display: flex;
    
    .fullscreen {
        height: 100%;
        width: 100%;
        background: white;
        box-shadow: inset 0px 10px 5px -2px rgba(0,0,0,0.05);
    }
`;

export const FullscreenBtn = styled.button`
    position: absolute;
    top: 1.75rem;
    right: 1rem;
    background: transparent;
    color: #2980b9;
    border: none;
    cursor: pointer;
    z-index: 700;
`

export const Graph = styled.div`
    border-radius: 1rem;
    height: 100%;
    canvas {
        height: 100%;
        background: white;
        box-shadow: inset 0px 10px 5px -2px rgba(0,0,0,0.05);
    }
`;

export const Header = styled.div`
    position: absolute;
    
    height: 3rem;
    width: 100%;
    top: 1rem;
    z-index: 500;
    padding-top: 1rem;
    
    transition: .35s;
    transition-delay: .5s;
    
    .header-content {
        align-items: center;
        display: grid;
        grid-template-columns: ${props => props.showHistoryBtn ? '2rem auto 8rem 2rem' : 'auto 8rem 2rem'};
        grid-gap: 1rem;
        
        max-width: 1366px;
        width: 70%;
    }
    
    opacity: ${props => props.visible ? "1" : ".25"};
    
    :hover {
        opacity: 1 !important;
        transition-delay: 0s;
    }

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
        background: transparent;
        width: 100%;
        height: 30px;
        font-size: 14px;
        color: #333;
    }

    .input-icon {color: #2980b9;}
`