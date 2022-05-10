import styled from 'styled-components'

export const Toolbar = styled.div`
    .btn {
        display: flex;
        min-width: 0;
        border: none;
        place-items: center;
        justify-content: center;
        color: #999;
        margin: 0;

        &.main {
            width: 2rem;
            height: 2rem;
        }
    }

    display: flex;
    justify-content: space-between;
    gap: 15px;
    place-items: center;
    margin-bottom: 25px;
    padding: 0 15px;

    & > *:not(:last-child) {margin-right: 15px;}

    .selector,
    .left-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .export {
            hr {margin-bottom: 1rem;}
            
            .btn {
                background: var(--primary);

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
                color: white;
                
                :hover {box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);}
            }

            .inline {
                display: flex;
                justify-content: center;

                & > *:not(:last-child) {border-right: 1px solid #eee;}
            }
        
            .form-group {
                width: fit-content;
                text-align: left;
                display: grid;
                grid-gap: 1rem;
                padding: 1rem;

                &.download-type {
                    display: grid;
                    place-items: center;

                    & > div {
                        display: flex;
                        gap: .5rem;
                    }

                    button {
                        padding: 0 1rem;
                        background: white;
                        color: var(--primary);

                        &.active {
                            background: var(--primary);
                            color: white;
                        }
                    }
                }

                &.pdf-orientation {
                    display: grid;
                    place-items: center;

                    & > div {
                        display: flex;
                        place-items: center;
                        gap: 1rem;
                    }

                    button {
                        transition: .5s;
                        min-width: 0;
                        width: 60px;
                        height: 60px;
                        border: none;
                        color: var(--primary);
                        background: white;
                        border-radius: 50%;

                        &.active {
                            transform: rotate(-90deg);
                            
                            &:hover {transform: rotate(-75deg);}
                        }

                        &:hover {
                            background: var(--primary);
                            color: white;

                            transform: rotate(-15deg);
                        }
                    }
                }
            }
        
            ul {
                list-style: none;
                
                li {
                    display: flex;
                    gap: 1rem;
                    place-items: center;
                }
            }
        }
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

        .column-filter {
            button {
                background: white;
                padding: 8px;
                border-width: 1px;
                border-radius: 25%;
            }
        }

        .switch {
            .content {
                display: flex;
                gap: 5px;
            
                .switch-button {
                    display: flex;
                    background: #999;
                    place-items: center;
                    padding: 0 2px;
                    width: 30px;
                    border-radius: 50px;
                    cursor: pointer;
            
                    :hover .switch-trigger {
                        opacity: .7;
                        background: var(--primary);
                    }
                }
            
                .switch-trigger {
                    width: 15px;
                    height: 15px;
                    background: white;
                    border-radius: 50%;
                    transition: .35s;

                    &.active {margin-left: 10px;}
                }
            }
        }
        
        .pagination {
            .content {
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

                    input {width: 60px;}

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

                        :disabled {opacity: .5;}
                    }
                }
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
`