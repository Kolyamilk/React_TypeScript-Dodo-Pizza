export interface Pizza {
    name: string;
    price: number;
    img: string;
    ingredients: string[];
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
