import styled from "styled-components";

export const Container = styled.div`
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    opacity: ${props => props.show ? '1' : '0'};
    background: white;
    text-align: left;
    border: 2px solid var(--primary);
    transition: .35s;
    border-radius: 1rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    color: black;
    z-index: 1000;
    padding: 3rem 1rem 1rem;
    max-width: 30rem;
    display: grid;
    grid-gap: .5rem;
    max-height: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    ${props => props.hidden && `opacity: 0; visibility: hidden;`}

    :hover {
        visibility: visible !important;
        opacity: 1 !important;
    }

    .close-btn {
        position: absolute;
        width: 1.45rem;
        height: 1.45rem;
        background: var(--primary);
        color: white;
        top: 1rem;
        right: 1rem;
        display: flex;
        padding: .25rem;
        border-radius: 50%;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    
    .error {
        display: flex;
        align-items: center;
        gap: .5rem;
        width: 100%;
        max-width: 30rem;
        word-wrap: normal;

        .icon {color: #a00;}
    }
`