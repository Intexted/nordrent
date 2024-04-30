const getCars = async () => {
  try {
    const response = await fetch(
      `https://new-nord-default-rtdb.firebaseio.com/products.json`,
      { next: { tags: ["products"] } }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
  }
};

const getBrands = async () => {
  try {
    const response = await fetch(
      `https://new-nord-default-rtdb.firebaseio.com/stores.json`,
      { next: { tags: ["stores"] } }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getSiteConfig = async () => {
  try {
    const response = await fetch(
      `https://new-nord-default-rtdb.firebaseio.com/my_store.json`,
      { next: { tags: ["my_store"] } }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const actions = { getSiteConfig, getCars, getBrands };
export default actions;
