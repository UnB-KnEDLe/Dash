import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #2980b955;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    width: 100%;
    max-width: 1366px;
    margin: 15px 0;
    height: 220px;
    max-height: 220px;
    
    .filelist {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        width: 50%;
        flex: 1;
        height: 220px;

        border-right: 1px solid #2980b955;
        padding: 0 25px;

        h3{
            margin: 10px 0;
        }

        .list {
            display: grid;
            grid-gap: 1rem;
            padding: 0 1rem;
        }

        .card {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            place-items: center;

            label, input{ 
                :hover {
                    cursor: pointer;
                }
            }

            div {
                display: flex;
                gap: 5px;
                place-items: center;
            }

            button {
                width: 40px;
                height: 25px;
                min-width: 0 !important;
            }
        }
    }
`;