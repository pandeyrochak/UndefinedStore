import axios from 'axios'

export const getAllProducts = async (categoryName: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/products${categoryName.length > 0 ? `/category/${categoryName}` : ''}`,
    )
    return response.data
  } catch (error) {
    throw new Error(String(error))
  }
}
