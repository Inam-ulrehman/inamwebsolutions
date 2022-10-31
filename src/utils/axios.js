import axios from 'axios'

// === UserData Root Url ===//

export const customFetch = axios.create({
  baseURL: 'https://inamwebsolutions.herokuapp.com/api/v1/',
})
