import React from "react";
import MUIDataTable from "mui-datatables";

export default function Table() {

    const columns = ["Tipo do Ato", "SEI", "Nome", "Matrícula", "Tipo de Aposentadoria", "Cargo", "Classe", "Padrao", "Quadro", "Fundamento Legal", "Vigencia"];

    const data = [
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],
        ['Aposentadoria', 'Vijosef 00040-00018955/2020-26', "o servidor NIVALDO DE SANTANA FREITAS", "1.699.735-", "", "Analista em Politicas Publicas e Gestao Governamental", "Especial", "v", "Quadro de Pessoal do Departamento de Transito do Distrito Federal aaaaaaaaa  aaaaaa aaaaaaa", "3o, incisos I, II", "",],

    ];

    return (
        <>
            <MUIDataTable
                title={"APOSENTADORIA"}
                data={data}
                columns={columns}
                options={{
                    rowsPerPage: 3,
                    rowsPerPageOptions: [3, 10, 20, 30],
                    selectableRows: false
                }}
            />
        </>
    );
}