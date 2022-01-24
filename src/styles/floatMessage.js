import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    place-items: flex-start center;
    padding: 15px;
    border-radius: 10px;
    border-top: 2px solid var(--primary);
    z-index: 4000;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    transition: .25s;

    bottom: 120px;
    right: ${props => props.visible ? "20px" : "-100px"};

    .float-header {
        margin-bottom: 5px;
    }

    .float-body {
        display: flex;
    }
`