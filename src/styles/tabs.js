import styled from "styled-components";

export const Tabs = styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 20px;
    flex-wrap: wrap;
    max-width: 85rem;
    `;
    
export const Tab = styled.div`
    display: flex;
    transition: .25s;
    flex: 1;
    min-width: 12.5rem;
    place-items: center;
    gap: .25rem;
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

export const TabsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    place-items: center;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    height: 100%;
    padding-bottom: 0 !important;

    .hidden {display: none;}
`;

export const TabContent = styled.div`
    height: 100%;
    width: 100%;
    display: ${props => props.active ? "block" : "none"};
`