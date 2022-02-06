import styled from 'styled-components'

export const Container = styled.div`
    hr {
        margin-bottom: 1rem;
    }
    
    .btn {
        &.main {
            width: 2rem;
            height: 2rem;
        }

        box-shadow: none;
        margin: 0;
        display: flex;
        gap: 1rem;
        place-items: center;
        text-decoration: none;
        min-width: 0;
    
        :hover {
            background: white;
            color: #333;
            box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        }
    }

    .form-group {
        width: fit-content;
        text-align: left;
        display: grid;
        grid-gap: 1rem;
        padding: 1rem;
    }

    ul {
        list-style: none;
        
        li {
            display: flex;
            gap: 1rem;
            place-items: center;
        }
    }

`