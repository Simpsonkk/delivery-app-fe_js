class ProductService {
  constructor() {
    this.keyname = 'products';
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyname);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id) {
    let products = this.getProducts();
    products.push(id);
    localStorage.setItem(this.keyname, JSON.stringify(products));
  }

  removeProducts(id) {
    let products = this.getProducts();
    let index = products.indexOf(id);
    products.splice(index, 1);
    localStorage.setItem(this.keyname, JSON.stringify(products));
  }

  removeAllProducts(id) {
    let products = this.getProducts();
    const sameElem = products.filter((el) => el === id);
    const deleteSameElem = products.filter((el) => el !== sameElem[0]);
    localStorage.setItem(this.keyname, JSON.stringify(deleteSameElem));
  }
}

export const productService = new ProductService();
