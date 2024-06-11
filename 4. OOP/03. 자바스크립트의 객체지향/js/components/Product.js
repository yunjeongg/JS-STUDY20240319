// export default class Product { 
// 1. 클래스 앞에 export 만 붙이고, export 받는 파일에서 import { Product } from "./components/product";

// export default class Product { 
// 2. 클래스 앞에 export default 붙이고, export 받는 파일에서 {} 떼고 , import Product from "./components/product";

class Product {
  constructor(title, price, desc, image) {
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.image = image;
  }
}

// 3. 클래스 아래에 , export 받는 파일에서 {} 떼고 , import Product from "./components/product";
export default Product;