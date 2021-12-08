import styled, { css } from "styled-components";
import HeaderImg from "../assets/header.svg";
import { shade } from "polished";

export const Tabs = styled.div`
    display: flex;
`;

export const Tab = styled.div`
    display: flex;
    flex: 1;
    place-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    margin-right: -1rem;
    border: 1px solid #cfcfcf;
    border-radius: 0.5rem 0.5rem 0 0;
    background: ${props => props.active ? "white" : "#f4f4f4"};
    z-index: ${props => props.active ? 1 : 0};
    font-weight: bold;
    color: var(--primary);

    :hover {
        cursor: pointer;
    }
`;