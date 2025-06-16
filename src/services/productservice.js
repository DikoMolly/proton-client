import axios from 'axios';

export const searchProducts = async (query) => {
  if (!query.trim()) return [];

  try {
    const res = await axios.post('http://localhost:8000/api/products/search', {
      description: query,
    });
    return res.data.results || [];
  } catch (error) {
    console.error('Search API error:', error);
    return [];
  }
};
