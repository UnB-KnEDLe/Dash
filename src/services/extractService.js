import axios from 'axios';
// const api_url = 'http://164.41.76.30/dash/api'
const api_url = 'http://localhost:5000/dash/api'

export async function service(file){
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(api_url + '/extract_all', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then( response => response.data )

    console.log(response)
    return response;
}