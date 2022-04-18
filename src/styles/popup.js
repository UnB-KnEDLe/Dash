import styled from "styled-components";

export const Container = styled.div`
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
    padding: 1rem;
    max-width: 30rem;
    display: grid;
    grid-gap: .5rem;
    max-height: 80%;
    overflow-y: auto;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    ${props => props.hidden && `opacity: 0; visibility: hidden;`}

    :hover {
        visibility: visible !important;
        opacity: 1 !important;
    }
`