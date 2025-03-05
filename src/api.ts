import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://my-site.local/api';

// Функция для получения данных с сервера
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/get_wares.php`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      alert("Ошибка при получении данных: " + error.message);
    } else {
      alert('Неизвестная ошибка: ' + error);
    }
  }
};