import { products } from "./products";

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> resolve(products),1000);
    });

};