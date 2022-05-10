import styled from 'styled-components';

export const TableContainer = styled.div`
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 1rem 0;
    max-width: 1366px;
    width: calc(100% - 3.5rem);
    margin: auto;
    
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
        height: 100%;

        h3 {margin: 3rem 0;}
    }
`

export const Container = styled.table`
    border-spacing: 0;
    overflow-x: auto;
    
    td, p {min-width: 6.25rem;}

    p {
        padding: .75rem;

        :hover {cursor: pointer;}
    }

    thead {
        th {
            user-select: none;
            transition: .5s;
            text-align: left;
            padding: .5rem;
            place-items: center;
            cursor: pointer;
            
            &:first-child {padding-left: 1rem;}
            &:last-child {padding-right: 1rem;}
            
            span {
                display: flex;
                justify-content: space-between;
                place-items: flex-start center;
                gap: .25rem;
                color: #999;

                .sort-icon {transition: .25s;}
            }
        }
        
        tr {
            font-size: 14px;
            padding: 0 15px;
        }
    }

    tbody {
        tr {
            max-height: 3rem;

            :hover {background: #e1edf5;}
        }
        
        td {
            border-top: 1px solid #eee;
            padding: .5rem;
            wrap-text: everywhere;
            cursor: pointer;

            &:first-child {padding-left: 1rem;}
            &:last-child {padding-right: 1rem;}
        }

    }
`;