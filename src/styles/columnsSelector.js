import styled from 'styled-components'

export const Columns = styled.div`
    position: relative;

    button {
        display: flex;
        gap: 10px;
        place-items: center;
        font-size: 16px;
        padding: 5px;
        background: white;
        border: none;
        border-radius: 50px;

        :hover {
            background: #eee;
        }
    }

    .columns-list {
        position: absolute;
        background: white;
        display: flex;
        flex-direction: column;
        border: 1px solid #333;
        padding: 5px;
        border-radius: 10px;
        right: 0;

        .column {
            display: flex;
            justify-content: flex-start;
            place-items: center;
            gap: 5px;
            text-align: left;
        }
    }
`