import axios from "axios"

export const serviceWorker =axios.create({
        baseURL:process.env.REACT_APP_BASE_URL
})

 