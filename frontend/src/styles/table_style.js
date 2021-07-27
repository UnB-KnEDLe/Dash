
import styled, { css } from 'styled-components';


export const TableContent = styled.div`
  margin: 3% 10% 3% 10%;
  /* overflow: hidden; */

  td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignLeft{
    margin: 0% 1.1% 0% 1.1% !important;
    padding: 0px;
    width: 10% !important;
    border: groove #e0ecf56e;
    text-align: center;
  }

  th.MuiTableCell-root.MuiTableCell-head.MTableHeader-header-13.MuiTableCell-alignLeft{
    font-weight: bold;
    color: #2f4854;
  }

  .MuiTableCell-root{
    border-bottom: 0px !important;
  }

  h6.MuiTypography-root.MuiTypography-h6{
    color: #7a9fb2;
    font-weight: 800;
    font-size: 200%;
  }

  .MuiIcon-fontSizeSmall{
    visibility: hidden;
  }

  .MTablePaginationInner-root-14{
    span{
      display: none;
    }
    span.MuiTypography-root.MuiTypography-caption{
      display: flex;
      margin-right: 15px;
    }

  }

  .MuiPaper-elevation2{
    border: 3px solid #e0ecf5;
    border-radius: 15px;
  }
`;