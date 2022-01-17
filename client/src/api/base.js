import axios from "axios"

let BASE_URL = `https://www.swimin-teacher.com`

if(process.env.NODE_ENV === 'dev') {
  BASE_URL = `http://localhost:4005`
}
console.log(process.env.NODE_ENV)

export const apiBase = async (method, path, body, config) => {
  
  if (method === 'get') {
    return axios[method](`${BASE_URL}${path}`, config)
    
  } else if (method === 'delete') {

    const newConfig = {...config, data: body }
    return axios[method](`${BASE_URL}${path}`, newConfig)
  }

  return axios[method](`${BASE_URL}${path}`, body, config)
}

export const apiBaseAuthenticated = async (method, path, body) => {
  const config = {
    headers: {
      'Authorization': localStorage.getItem('accessToken')
    }
  }
  return apiBase(method, path, body, config)
}

const api = { apiBase, apiBaseAuthenticated}

export default api