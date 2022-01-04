import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    text-align: center;

    .search-header {
        
    }

    select {
        margin: auto;
        width: 50%;
        padding: 5px 10px;
        font-weight: bold;
        border: 1px solid #ccc;
        background: white;
        border-radius: 2.5px;
    }

    button {
        color: var(--primary);
        background: white;
        border: 1px solid var(--primary);
        padding: 5px;
        border-radius: 5px;
        font-weight: bold;

        &:hover {
            background: var(--primary);
            color: white;
        }
    }

    select option {
    }

    .tableContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-x: auto;

        h2 { 
            margin-top: 15px;
        }

        table {

            border-collapse: collapse;

            td {
                padding: 2px;
                border: 1px solid #eee;
            }

            th{
                text-transform: capitalize;
                
                :not(:first-child) {
                    border-left: 1px solid #eee;
                    overflow: hidden;
                }
            }
        }
    }
`;

export const InputField = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    margin-bottom: 20px;
    padding: 5px 10px;
    border-radius: 2.5px;

    color: var(--primary);

    input {
        border: none;
        flex: 1;
        width: 100%;
    }


    .filter {
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
                color: black;
                padding: 2px;
                background: var(--primary);
                color: white;
                font-weight: bold;


                ::placeholder {
                    color: white;
                }
                
                &:focus {
                    background: white;
                    color: black;
                    font-weight: 600;
                    font-style: italic;
                    
                    ::placeholder {
                        color: #999;
                    }
                }
                
                &:hover {
                    background: #2798e3;
                }
            }

            small {
                opacity: .9;
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
`;