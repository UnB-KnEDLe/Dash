import styled from 'styled-components';

export const TableContainer = styled.div`
  .MuiToolbar-root {
    border-top: 4px solid ${props => props.color ? props.color : '#ccc'};
  }

  * span {
    display: inline-block;

    div {
      padding: 0;
    }

    .left {
      text-align: left !important;
      width: 100%;
      justify-content: flex-start;
      display: flex;
    }
    
    * h6.MUIDataTableToolbar-titleText-20 {
    }
  }
`

export const TableContent = styled.div`
  width: 80%;
  max-width: 1366px;

  .loading-container {
    display: flex;
    justify-content: center;
    place-items: center;
    margin: 15px 0;
  }

  .loading-spinner {
    color: #3180b9;
    animation-name: rotation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .MuiTypography-root.MuiTablePagination-caption.MuiTypography-body2.MuiTypography-colorInherit:nth-child(2){
    display: none
  }

  .MuiToolbar-root.MuiToolbar-regular.MuiTablePagination-toolbar.MUIDataTablePagination-toolbar-83.MuiToolbar-gutters:before{
    content: "Quantidade:"
  }
  
  thead {


    th {
      background: #eee;

      * {
        font-weight: bold;
        text-transform: capitalize;
      }

    }
    
  }

  tr:nth-child(2n) {
    background: #eee;
  }

  .MuiTableCell-root {
    padding: 4px 16px;
  }
  
  .MuiPaper-elevation4{
    margin-top: 3%;
  }

  .MUIDataTableHeadRow-root-34{
    background-color: '#eee';
  }

  .MUIDataTableHeadCell-sortAction-51 > .MUIDataTableHeadCell-sortAction-51{
    display: center;
    place-items: center;
  }

  .MUIDataTableHeadCell-fixedHeader-47{
    background-color: #eee !important;
  }

  .MUIDataTableHeadCell-data-50{
    font-weight: 600;
  }

  .MUIDataTableToolbar-left-15 h6{
    color: black
  }

  .MUIDataTableToolbar-left-15 h6 {
    color: #333 !important;
  }

  .MuiTypography-h6{
    font-size: 189%;
    font-weight: bold;
    text-transform: capitalize;
  }

  .MuiIconButton-root{
    color: #333 !important;
  }

  .MUIDataTablePagination-tableCellContainer-81{
    border: 0px ;
  }


  @keyframes rotation {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
`;
