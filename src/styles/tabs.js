import styled from "styled-components";

export const Tabs = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

export const Tab = styled.div`
    display: flex;
    transition: .25s;
    flex: 1;
    min-width: 200px;
    place-items: center;
    gap: 5px;
    justify-content: center;
    padding: .5rem 1rem;
    border: 1px solid #cfcfcf;
    border-top: ${props => props.active ? "3px solid var(--primary);" : "3px solid #f4f4f4;"};
    border-bottom: ${props => props.active ? "none" : "1px solid #cfcfcf;"};
    background: ${props => props.active ? "white" : "#f4f4f4"};
    z-index: ${props => props.active ? 1 : 0};
    text-align: center;
    font-weight: bold;
    color: ${props => props.active ? "var(--primary)" : "#666"};

    :hover {
        cursor: pointer;
        color: #333;
    }
`;