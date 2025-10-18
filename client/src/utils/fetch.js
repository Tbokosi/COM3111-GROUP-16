
const BASE_URL = "http://localhost:3000/api/";
export const fetchF = async (url, options = {})=>{

    const fetchOptions = {
        ...options,
        headers :{
            ...options.headers,
        },
        // credentials: "include"
    }
    let res = await fetch(`${BASE_URL}${url}`, fetchOptions);
    let data = await res.json()

    return data;
}
