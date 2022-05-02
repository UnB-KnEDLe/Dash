export default async function service(url) {    
    let headingList = []
    let contentList = []

    var response = await fetch(url, {
        method: 'GET',
        timeout: 10000,
    })
        .then(response => response.json())

    if (Object.keys(response).length === 0) return { headingList, contentList }

    Array.from(Object.keys(response[0])).forEach( key => {
        let item = response[0][key]
        if (typeof item === 'string') {
            headingList.push(key)
        } else {
            for (var itemKey in item) {
                if(itemKey === 'nome' && key !== 'pessoa') {
                    headingList.push(key)
                } else if(itemKey === 'numero'){
                    headingList.push(key)
                } else headingList.push(itemKey)
            }
        }
    })

    headingList = headingList.reverse()

    response.forEach( item => {
        let row = []
        Object.keys(item).forEach( key => {
            if(typeof item[key] === 'string') {
                row.push(item[key])
            } else {
                for (var itemKey in item[key]) {
                    row.push(item[key][itemKey])
                }
            }
        })
        contentList.push(row)
    } )

    contentList = contentList.map( row => row.reverse() )

    return { headingList, contentList }
}

export async function count(url) {
    var timeoutValue = 5000;
    var actsCountDefault = 515;

    let timeout = new Promise( resolve => setTimeout(() => resolve(actsCountDefault), timeoutValue) );
    let response = fetch(url).then(response => response.json())

    return Promise.race([timeout, response])
}
