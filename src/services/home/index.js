import axios from "axios";

export const getServiceHome = async (url) => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        return error
    }
}

