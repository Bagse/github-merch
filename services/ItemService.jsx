import axios from 'axios';

export async function getItems() {
  const response = await axios.get("https://apimocha.com/alurageekapi/items");
  return response.data;
}

export async function getLatestItems() {
  const items = await getItems();
  return items.slice(0, 3);
}
