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
    price: string;
    img: string;
    ingredients: string[];
}

export interface Menu {
    Pizza: Pizza[];
    Combo: Combo[];
    Snacks: Snack[];
}

declare const menu: Menu;
export default menu;
