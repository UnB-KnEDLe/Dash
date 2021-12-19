import styled from "styled-components";

export const ActContainer = styled.div`
    text-align: left;
    margin-bottom: 20px;
    box-shadow: 0px 0px 2.5px 0px rgba(0,0,0,0.75);

    
    > h3{
        display: flex;
        justify-content: center;
        place-items: center;
        flex-direction: column;
        text-transform: capitalize;
        padding: 10px;
        color: #333;
        transition: .25s;
        border-bottom-color: ${props => props.color};
        border-bottom-style: solid;
        border-bottom-width: 4px;

        &:hover {
            margin-bottom: -4px;
            border-bottom-width: 8px;
            cursor: pointer;
        }
    }

    .acts-back {
        background: #00000033;
        width: 100vw;
        height: 100vh;
        position: fixed;
        display: ${props => props.collapsed ? 'none' : 'flex'};
        justify-content: center;
        place-items: center;
        top: 0;
        left: 0;
        z-index: 3;

        .acts-content {
            width: 80%;
            max-width: 1200px;
            height: 80%;
            background: white;

            .act-header {
                width: 100%;
                display: flex;
                height: 50px;
                justify-content: space-between;
                place-items: center;

                .act-header-left {
                    display: flex;
                    justify-content: center;
                    place-items: center;
                    gap: 5px;

                    .act-show-entities {
                        input{
                            margin-right: 5px;
                        }

                        small {
                            margin-left: 10px;
                        }
                    }
                }

                .close {
                    color: white;
                    padding: 5px;
                    border-radius: 5px;
                    background: var(--primary);
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                h3 {
                    display: flex;
                    place-items: center;
                    justify-content: flex-start;
                    padding: 10px;
                }
            }

            .act-body {
                overflow-y: auto;
                height: calc(100% - 50px);

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
                    border-bottom: 1px solid #eee;

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
    }
`;

export const ActsButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`;