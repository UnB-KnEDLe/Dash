import axios from 'axios';
const api_url = 'http://164.41.76.30/dash/api'

export async function extractEntities(file, type){
    const formData = new FormData();
    formData.append('type', type);
    formData.append('file', file);

    const response = await axios.post(api_url + '/extract_entity', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then( response => response.data )

    console.log(response)

    return response;
}

export async function extractActs(file){
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(api_url + '/extract_acts', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then( response => response.data )

    return response;
}