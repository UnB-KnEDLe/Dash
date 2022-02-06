import styled from 'styled-components';

export const TableContainer = styled.div`
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 15px 0;
    max-width: 1366px;
    margin-bottom: 15px;
    width: 80%;
    overflow-x: hidden;
    
    .btn {
        display: flex;
        min-width: 0;
        border: none;
        place-items: center;
        justify-content: center;
        color: #999;
        margin: 0;
    }

    .table-container {
        overflow-x: auto;

        h3 {
            margin: 3rem 0;
        }
    }
`

export const Container = styled.table`
    border-spacing: 0;
    overflow-x: auto;
    
    td, p {
        min-width: 100px;
    }

    p {
        padding: 10px;

        :hover {
            cursor: pointer;
        }
    }

    thead {
        th {
            user-select: none;
            transition: .5s;
            text-align: left;
            padding: 5px;
            border-bottom: 2px solid #ccc;
            place-items: center;
            
            &:first-child {
                padding-left: 15px;
            }

            &:last-child {
                padding-right: 15px;
            }
            
            :hover {
                cursor: pointer;
            }
            
            span {
                display: flex;
                flex-direction: column;
                place-items: flex-start center;
                gap: 4px;

                .sort-icon {
                    transition: .25s;
                }
            }
        }
        
        tr {
            font-size: 14px;
            padding: 0 15px;
        }
    }

    tbody {
        tr {
            :nth-child(2n-1) {
                background: #eee;
            }

            :hover {
                background: #ddd;
            }
        }
        
        td {
            padding: 0 5px;

            &:first-child {
                padding-left: 15px;
            }

            &:last-child {
                padding-right: 15px;
            }

            :hover {
                cursor: pointer;
            }
        }

    }
`;