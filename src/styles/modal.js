import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0,0,0, 0.4);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 50;
    display: flex;
    place-items: center;
    justify-content: center;
    
    .modal-content {
        z-index: 60;
        min-width: 500px;
        max-width: 1366px;
        height: 100%;
        ${props => props.size === 'lg' && 'width: 80%'};
        ${props => props.size === 'md' && 'width: 50%'};
        ${props => props.size === 'sm' && 'width: 30%'};
        ${props => props.size === 'fit' && 'width: fit-content'};

        ${props => props.size === 'lg' && 'height: 90%'};
        ${props => props.size === 'md' && 'height: 75%'};
        ${props => props.size === 'sm' && 'height: 60%'};
        ${props => props.size === 'fit' && 'height: fit-content'};

        display: grid;
        position: fixed;
        place-items: center;

        grid-template-rows: 3rem calc(100% - 3rem);
        
        padding: 1rem 2rem;
        background: white;
        
        .modal-body {
            background: white;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            padding-bottom: 1rem;
            align-self: flex-start;

            h1, h2, h3, h4, h5, h6 {
                &:first-child {
                    margin-top: 0;
                }
            }
        }

        .modal-header {
            height: 2.5rem;

            width: 100%;
            display: flex;
            place-items: center;
            justify-content: space-between;

            h3 {
                margin: 0;
            }

            .close-btn {
                display: flex;
                place-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                padding: 0;
                margin: 0 !important;
                min-width: 0;
            }
        } 
    }
`;


export const ModalContainer = styled.div`
    p {
        padding: 0;
        border-bottom: none;
        line-height: 1.5rem;
    }

    .modal-section {
        padding: 5px o;
        padding-bottom: 5px;
        text-align: left;

        &:not(:last-child) {
            border-bottom: 1px solid #eee;
            margin-bottom: 15px;
        }

        & > *:not(:first-child) {
            padding-left: 15px;
        }

        h3 {
            margin-bottom: 15px;
        }
        
        &.file {
            display: flex;
            place-items: center;
            gap: 5px;
        }

        .entities-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            text-align: left;
            gap: 10px;
            padding-bottom: 10px;
        }
    }
`