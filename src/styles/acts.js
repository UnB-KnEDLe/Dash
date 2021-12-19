import styled from "styled-components";

export const ActContainer = styled.div`
    text-align: left;
    box-shadow: 0px 0px 2.5px 0px rgba(0,0,0,0.75);
    z-index: 5;
    
    > h3{
        display: flex;
        justify-content: center;
        place-items: center;
        text-align: center;
        flex-direction: column;
        text-transform: capitalize;
        padding: 10px;
        color: #333;
        transition: .25s;
        border-right-color: ${props => props.color};
        border-right-style: solid;
        border-right-width: 4px;

        &:hover {
            margin-right: -5px;
            border-right-width: 9px;
            cursor: pointer;
        }
    }
`;

export const ActsList = styled.div` 
    display: flex;

    place-items: start;
    margin-top: 30px;
    width: 90%;
    max-width: 1500px;
    height: 800px;
    gap: 5px;

    .acts-menu {
        display: grid;
        grid-gap: 5px;
    }

    .acts-content {
        width: 100%;

        overflow-y: auto;
        border: 1px solid #ccc;
        border-top-width: 5px;
        border-top-style: solid;
        height: 800px;

        & > h3 {
            margin: auto;
            text-align: center;
        }

        .act-body {
            overflow-y: auto;

            .null-click {
                position: absolute;
                height: 50px;
                width: 320px;
                background: transparent;
                top: 10%;
                right: calc(10% + 80px);
            }

            li {
                padding: 10px;
                text-align: left;
                border-bottom: 1px solid #eee;
                border-left: 1px solid #ccc;

                span {
                    padding: 2px;
                    border-radius: 5px;
                    display: inline;
                    color: black;
                    margin: 0 1px;

                    
                    &:hover {
                        box-shadow: 0px 0px 2.5px 0px rgba(0,0,0,0.55);

                        .act-data {
                            opacity: 1;
                        }
                    }

                    .act-data {
                        height: 35px;
                        display: flex;
                        place-items: center;
                        transition: .25s;
                        opacity: 0;
                        position: absolute;
                        top: calc(10% + 5px);
                        right: calc(10% + 80px);
                        border-radius: 5px;
                        padding: 5px;
                        font-weight: 600;

                        .act-data-circle {
                            padding: 0;
                            margin: 0;
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
`;