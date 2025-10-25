import axios from 'axios';
import { ProductType } from './models/classProduct';

const API_URL = process.env.REACT_APP_API_URL || 'https://my-site.local/api';

// Функция для получения данных с сервера
export const downloadData = async () => {
  const response = await axios.get(`${API_URL}/get_wares.php`);
  return response.data;
};

export const uploadNewProduct = async (newProduct: ProductType) => {
  const shortProduct = {
    name: newProduct.name,
    price: newProduct.price,
    weight: newProduct.weight,
  }
  const response = await axios.post(`${API_URL}/upload_new_product.php`, shortProduct, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

export const deleteProductById = async (id: number) => {
  const response = await axios.post(`${API_URL}/delete_product.php`, {
    id,
    action: 'delete',
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  return response.data;
};
