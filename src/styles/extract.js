import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    overflow-y: hidden;
    display: grid;
    text-align: center;
`

export const Extract = styled.div`
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 15px 0;
    max-width: 1366px;
    margin-bottom: 15px;
    width: max-content;
    overflow-x: hidden;

    .toolbar {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        place-items: center;
        margin-bottom: 25px;
        padding: 0 15px;
        width: 100%;

        & > *:not(:last-child) {
            margin-right: 15px;
        }

        .right-toolbar {
            display: flex;
            flex-wrap: wrap;
            place-items: center;
            gap: 15px;

            & > * {
                min-width: 80px;
            
                :not(:last-child) {
                    padding-right: 10px;
                    border-right: 1px solid #ddd;
                }
            }
        }

        select {
            font-size: 18px;
            font-weight: bold;
            padding: 5px;
            border-radius: 5px;
            background: white;
        }
    }


    .table-container {
        overflow-x: auto;
    }
`