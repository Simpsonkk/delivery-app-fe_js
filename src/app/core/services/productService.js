class ProductService {
  constructor() {
    this.keyname = 'products';
  }

  getSelectedProductIds() {
    const productIds = localStorage.getItem(this.keyname);
    if (productIds) {
      return JSON.parse(productIds);
    }
    return [];
  }

  setSelectedProductIds(productId) {
    let productIds = this.getSelectedProductIds();
    productIds.push(productId);
    localStorage.setItem(this.keyname, JSON.stringify(productIds));
  }

  decreaseByOneSelectedProductId(productId) {
    let productIds = this.getSelectedProductIds();
    let indexProductIdForRemove = products.indexOf(productId);
    products.splice(indexProductIdForRemove, 1);
    localStorage.setItem(this.keyname, JSON.stringify(productIds));
  }

  removeSelectedProductId(productId) {
    let productIds = this.getSelectedProductIds();
    productIds = products.filter((p) => p !== productId);
    localStorage.setItem(this.keyname, JSON.stringify(productIds));
  }
}

export const productService = new ProductService();
