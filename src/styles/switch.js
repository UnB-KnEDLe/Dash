import styled from 'styled-components'

export const Switch = styled.div`
    display: flex;
    gap: 5px;

    .switch-button {
        display: flex;
        background: #999;
        place-items: center;
        padding: 0 2px;
        width: 30px;
        border-radius: 50px;

        :hover {
            cursor: pointer;

            .switch-trigger {
                opacity: .7;
                background: var(--primary);
            }
        }
    }

    .switch-trigger {
        width: 15px;
        height: 15px;
        background: white;
        border-radius: 50%;
        transition: .35s;
        ${props => props.state &&'margin-left: 10px'};
    }
`