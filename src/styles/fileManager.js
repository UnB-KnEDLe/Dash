import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #2980b955;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    place-items: center;
    padding: 0;
    width: 80%;
    max-width: 1366px;
    margin: 1rem 0;
    height: 14rem;
    max-height: 14rem;
    justify-self: center;
    
    .filelist {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        width: 50%;
        flex: 1;
        height: 14rem;

        border-right: 1px solid #2980b955;
        padding: 0 1.5rem;

        h3{margin: .625rem 0;}

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

            label, input{cursor: pointer;}

            div {
                display: flex;
                gap: .25rem;
                place-items: center;
            }

            button {
                width: 2.5rem;
                height: 1.5rem;
                min-width: 0 !important;
            }
        }
    }
`;