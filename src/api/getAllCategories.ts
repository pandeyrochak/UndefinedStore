import axios from 'axios'

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/categories`)
    return response.data
  } catch (error) {
    throw new Error(String(error))
  }
}
