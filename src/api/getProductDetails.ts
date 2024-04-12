import axios from 'axios'

export const getProductDetails = async (productId: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
    return response.data
  } catch (error) {
    throw new Error(String(error))
  }
}
