import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    .per-page {
        display: flex;
        place-items: center;
        gap: 5px;
        padding-right: 15px;
        border-right: 1px solid #ddd;
    }

    .pages-count {
        display: flex;
        place-items: center;
        gap: 10px;

        input {
            width: 60px;
        }

        button {
            width: 25px;
            height: 25px;
            background: white;
            border: none;
            border-radius: 50%;

            :hover:not(:disabled) {
                cursor: pointer;
                background: #ccc;
            }

            :disabled {
                opacity: .5;
            }
        }
    }
`