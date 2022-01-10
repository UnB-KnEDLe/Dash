import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableContainer } from '../styles/table_style';
import ExpandText from './expandText';
import { columnsReplace } from '../data/columnsData';
import { actsData } from '../data/actsData';

export default function Table({title, data, columns, color}) {
    columns = columns.map(column => columnsReplace(column));                
    title = actsData[title] ? actsData[title].title : title;

    data = data.filter(row => {
        let count = 0;
        row.forEach( el => {
            if (typeof el !== 'string' && typeof el !== 'boolean') {
                if(el !== null) count = row.lenth + 1
                count++
            }
        } )
        return count < row.length;
    })

    data = data.map(row => row.map( cell => {
        if(typeof cell === "boolean") {
            return cell ? "Sim" : "Não";
        } else return cell
    }) )

    return (
        <TableContainer color={color} >
            <MUIDataTable
                className="mui-table"
                title={<h6 style={{fontSize: '120%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{title}</h6>}
                data={data.map(row => row.map((cell) => <ExpandText text={cell} />)) }
                columns={columns}
                options={{
                    rowsPerPage: 10,
                    rowsPerPageOptions: [3, 10, 20, 30],
                    selectableRows: 'none',
                    download: false,
                    print: false,
                    filter: false,
                    sort: false,
                    search: false
                }}
            />
        </TableContainer>
    );
}