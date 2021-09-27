import axios from 'axios';
const api_url = 'http://localhost:5000'

export default async function extractContent(file, type){
    const formData = new FormData();
    formData.append('type', type);
    formData.append('file', file);

    const response = await axios.post(api_url + '/extract_content', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then( response => response.data )

    return response;
}