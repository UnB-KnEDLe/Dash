import styled from "styled-components";

const darkColors = ['#090300', '#a16a94', '#01a0e4', '#db2d20'];

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
        // color: ${props => darkColors.includes(props.color) ? 'white' : 'black'};
        color: #333;
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
            }

            li {
                display: flex;
                padding: 10px;
                border-bottom: 1px solid #eee;
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