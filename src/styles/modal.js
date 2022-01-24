import styled from 'styled-components';

export const ModalComp = styled.div`
    background: rgba(0,0,0, 0.4);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 50;
    display: flex;
    justify-content: center;
    place-items: center;

    .highlight {
        background: #0c365299;
        display: inline-block;
    }
    
    .modal-content {
        z-index: 60;
        position: fixed;
        overflow-y: auto;
        width: 80%;
        min-width: 500px;
        max-width: 1366px;
        height: 80%;

        background: #fff;
        padding: 20px;

        .modal-body {
            position: relative;
            display: grid;
            grid-gap: 15px;

            p {
                padding: 0;
                border-bottom: none;
            }

            .modal-header {
                width: 100%;
                display: flex;
                justify-content: flex-end;

                .close-btn {
                    display: flex;
                    place-items: center;
                    justify-content: center;
                    position: fixed;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    margin: 0 !important;
                    min-width: 0;
                }
            } 

            .modal-section {
                padding: 5px o;
                padding-bottom: 5px;

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
                    gap: 10px;
                    padding-bottom: 10px;
                }
            }
        }
    }
`;