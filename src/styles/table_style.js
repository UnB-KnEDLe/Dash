import styled from 'styled-components';

export const TableContent = styled.div`
  margin: 3% 10% 3% 10%;
  /* overflow: hidden; */

  .loading-container {
    display: flex;
    justify-content: center;
    place-items: center;
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
  
  .MuiPaper-elevation4{
    box-shadow: inset 0 0 2rem #e0ecf5;
    border: 5px #e0ecf5 solid;
    border-radius: 10px;
    margin-top: 3%;
  }

  .MUIDataTableHeadCell-fixedHeader-47{
    background-color: #e0ecf573 !important;
  }

  .MUIDataTableHeadCell-data-50{
    font-weight: 600;
  }

  .MuiTypography-h6{
    color: #144e81;
    font-size: 189%;
    font-weight: bold;
    text-transform: capitalize;
  }

  .MuiIconButton-root{
    color: #144e81 !important;
  }

  .MUIDataTablePagination-tableCellContainer-81{
    border: 0px ;
  }


  @keyframes rotation {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }





`;