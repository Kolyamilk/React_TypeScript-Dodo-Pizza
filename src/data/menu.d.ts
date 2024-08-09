export interface Pizza {
    type: string;
    name: string;
    img: string;
    ingredients: string[];
    price: number;
    width: string;
    height: string;
    small?: PizzaSize[];
    medium?: PizzaSize[];
    big?: PizzaSize[];
    addToTaste: PizzaAddition[];
}
export interface PizzaSize {
    width: string;
    height: string;
    img: string;
    ingredients: string[];
    price: number;
    radius: number;
    dough: string;
    weight: number;
    thinDough: boolean;
    
}
export interface PizzaAddition {
    img: string;
    name: string;
    price: number;
}










export interface Combo {
    name: string;
    price: number;
    priceOld: number;
    img: string;
    description: string;
}
export interface Snack {
    name: string;
    price: number;
    img: string;
    description: string;
}
export interface Cocktails {
    name: string;
    price: number;
    img: string;
    description: string;
}
export interface Coffee {
    name: string;
    price: number;
    img: string;
    description: string;
}

export interface Menu {
    Pizza: Pizza[];
    Combo: Combo[];
    Snacks: Snack[];
    Cocktails: Cocktails[];
    Coffee: Coffee[]
}

declare const menu: Menu;
export default menu;
