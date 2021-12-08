import styled, { css } from "styled-components";
import HeaderImg from "../assets/header.svg";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    .search-header {
        padding: 15px 0;
    }

    select {
        padding: 5px 10px;
        font-weight: bold;
        border: 1px solid #ccc;
        background: white;
        border-radius: 2.5px;
    }
`;

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    justify-content: center;

    gap: 10px;

    button {
        background: var(--primary);
        border: none;
        border-radius: 5px;
        padding: 10px;
        color: white;
        font-weight: bold;
        display: flex;
        place-items: center;
        gap: 5px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const InputField = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;

    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 2.5px;

    color: var(--primary);

    .main-input {
        display: flex;
        justify-content: center;
        place-items: center;
        flex: 1;
        gap: 5px;

        .icon {
            width: 22px;
            height: 22px;
        }
        
        input {
            border: 1px solid var(--primary);
            border-radius: 2.5px;
            padding: 5px;
            min-width: 450px;
            flex: 1;
            width: 100%;
        }
    }

    input {
        border: none;
        min-width: 250px;
        flex: 1;
        width: 100%;
    }


    .input-filters {
        display: flex;
        gap: 5px;

        .active-filter {
            background: var(--primary);
            border: none;
            border-radius: 5px;
            padding: 10px;
            color: white;
            font-weight: bold;
            display: flex;
            place-items: center;
            gap: 5px;
            margin: 0;

            .filter-input {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                text-align: left;

                input {
                    border-radius: 5px;
                    padding: 2px;
                    background: var(--primary);
                    color: white;
                    font-weight: bold;

                    &:focus {
                        background: white;
                        font-weight: normal;
                    }

                    &:hover {
                        background: #2798e3;
                    }
                }

                small {
                    font-style: italic;
                    opacity: .8;
                    font-size: 12px;
                }
            }

            button {
                margin: 0;
                border: none;
                background: transparent;
                color: white;
                border-radius: 2px;
                padding: 3px;
                aspect-ratio: 1;

                &:hover {
                    color: var(--primary);
                    background: white;
                    cursor: pointer;
                }
            }
        }
    }
`;