export interface IProductsResponse {
    products: IProduct[]
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number
}