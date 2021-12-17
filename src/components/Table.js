import React from "react";
import MUIDataTable from "mui-datatables";

export default function Table({title, data}) {

    const columns = ["SEI", "Nome", "Matrícula", "Tipo de Aposentadoria", "Cargo", "Classe", "Padrao", "Quadro", "Fundamento Legal", "Vigência"];

    return (
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={{
                rowsPerPage: 3,
                rowsPerPageOptions: [3, 10, 20, 30],
                selectableRows: false
            }}
        />
    );
}