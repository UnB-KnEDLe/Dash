import {actsData} from '../src/data/actsData';

describe('Search Tests', () => {
    it('Check filters placeholders and length', () => {
        var count = Object.keys(actsData)
        count = count.filter(act => actsData[act].search).length
        cy.visit("/");
        cy.get(".search").click()
        cy.get(".filter-select option")
            .should("have.length", count + 1)
            .each((option, index) => {
                if(index === 0) return;
                var {value} = option[0];
                cy.get(".filter-select").select(value)
                    .should('have.length.greaterThan', 0)
                    .then(() => cy.get(".filter-input input")
                        .then(inputs => {                     
                            var placeholders = inputs.map((index, input) => input.placeholder);
                            placeholders = Array.from(placeholders).sort();
                            
                            var titles = actsData[value].paramsKeys.map(filter => "+ Filtro de " + filter.title).sort();
                            expect(JSON.stringify(placeholders)).to.deep.equal(JSON.stringify(titles));
                        })
                    )
            })
    })

    // it('Check filters placeholders', () => {
    //     cy.visit("/");
    //     cy.get(".search").click()
    //     cy.get(".filter-select option")
    //         .each((option, index) => {
    //             if(index === 0) return;
    //             var {value} = option[0];
    //             cy.get(".filter-select").select(value)
                    
    //                 .then(() => cy.get(".filter-input input")
    //                     .then(inputs => {                     
    //                         var placeholders = inputs.map((index, input) => input.placeholder);
    //                         placeholders = Array.from(placeholders).sort();
                            
    //                         var titles = actsData[value].paramsKeys.map(filter => "+ Filtro de " + filter.title).sort();
    //                         expect(JSON.stringify(placeholders)).to.deep.equal(JSON.stringify(titles));
    //                     })
    //                 )
    //         })
    // })
})

const examples = {
    "Nome": "Maria",
    "Cargo": "Tecnico",
    "Órgão": "SECRETARIA",
    "Matrícula": "43",
    "Cargo Efetivo": "Tecnico",
    "Cargo Comissionado": "Tecnico",
    "Edital": "Edital",
    "Nome do Substituto": "Maria",
    "Cargo Substituto": "Tecnico",
    "Nome do Substituído": "Maria",
    "Cargo do Substituído": "Tecnico"
}