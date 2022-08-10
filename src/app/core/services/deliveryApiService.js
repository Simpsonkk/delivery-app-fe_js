class DeliveryApiService {
  constructor() {
    this.API = 'https://delivery-app-js.herokuapp.com/api/';
    this.PRORUCTS = 'products/';
    this.SHOPS = 'shops';
    this.ORDERS = 'orders';
  }
  async getProducts(shopName) {
    const response = await fetch(
      `${this.API}${this.PRORUCTS}${JSON.parse(shopName)}`
    );
    return await response.json();
  }

  async getShop() {
    const response = await fetch(`${this.API}${this.SHOPS}`);
    return await response.json();
  }

  async sendOrder(order) {
    await fetch(`${this.API}${this.ORDERS}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
  }
}

export const deliveryApiService = new DeliveryApiService();
