import axios, { all } from "axios"

const baseUrl = "http://localhost:8000/api/" /*"http://localhost:8000/"*/

export const getCategories = async (setCategories) => {
    const resp = await axios.get(baseUrl + "categories")
    setCategories(resp.data)
}

export const getFoodsFiltered = async (url, setFoods) => {
    const resp = await axios.get(url)
    setFoods(resp.data)
}