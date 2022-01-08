export default async function service(url) {    
    let headingList = []
    let contentList = []

    var response = await fetch(url, {
        method: 'GET',
        timeout: 10000,
    })
        .then(response => response.json())
        .catch( err => {
            console.log(err)
            return;
        } )

    if (Object.keys(response).length === 0) return [];

    Array.from(Object.keys(response[0])).forEach( key => {
        let item = response[0][key]
        if (typeof item === 'string') {
            headingList.push(key)
        } else {
            for (var itemKey in item) {
                if(itemKey === 'nome' && key !== 'pessoa') {
                    headingList.push(key)
                }
                headingList.push(itemKey)
            }
        }
    })
    
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

    return { headingList, contentList }
}