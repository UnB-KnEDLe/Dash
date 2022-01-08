export default async function service(url) {    
    var response = await fetch(url, {
        method: 'GET',
        timeout: 10000,
    })
        .then(response => response.json())
        .catch( err => {
            console.log(err)
            return;
        } )

    return response
}