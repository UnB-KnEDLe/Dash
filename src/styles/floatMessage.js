import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    display: flex;
    max-width: 32rem;
    flex-direction: column;
    place-items: flex-start center;
    text-align: left;
    padding: 1rem;
    border-radius: .625rem;
    border-top: 2px solid var(--primary);
    z-index: 4000;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    transition: .25s;

    bottom: 7.5rem;
    right: ${props => props.visible ? "12.5rem" : "-6.25rem"};

    .float-header {margin-bottom: .25rem;}

    .float-body {display: flex;}
`