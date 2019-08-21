import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService{
    item: CartItem[] = []

    clear(){
        this.item = []

    }

    addItem(item:MenuItem){
        let foundItem = this.item.find((mItem)=> mItem.menuItem.id === item.id)
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.item.push(new CartItem(item))
        }
    }

    removeItem(item:any){
            this.item.splice(this.item.indexOf(item), 1)
    }

    total(): number{
        return this.item
        .map(item => item.value())
        .reduce((prev, value)=> prev+value, 0)
    }
}