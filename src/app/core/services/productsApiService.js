class ProductsApiService {
  async getProducts(shopName) {
    const response = await fetch(
      `https://delivery-app-js.herokuapp.com/api/products/${JSON.parse(shopName)}`
    );
    return await response.json();
  }

  async getShopsNames() {
    const response = await fetch('https://delivery-app-js.herokuapp.com/api/shops');
    return await response.json();
  }

  async sendOrder(order) {
    await fetch('https://delivery-app-js.herokuapp.com/api/orders', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
  }
}

export const productsApiService = new ProductsApiService();
