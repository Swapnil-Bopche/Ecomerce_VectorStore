export interface ICaroselData {
    image: string,
    path?: string
}

export interface IProducts {
    imageUrl: string,
    brand: string,
    price: string,
    color: string,
    description: string,
    quantity: number,
    title: string,
}




// export interface INavigationItem {
//     name: string;
//     id: string;
//     href: string; // Optional property for links
//     imageSrc: string; // Optional property for images
//     imageAlt: string; // Optional property for image descriptions
//     items: INavigationItem[]; // Optional for nested items
// }

// export interface INavigationCategory {
//     id: string;
//     name: string;
//     featured: INavigationItem[]; // Optional featured items
//     sections: {
//         id: string;
//         name: string;
//         items: INavigationItem[];
//     }[];
// }

// export interface INavigation {
//     categories: INavigationCategory[];
//     pages: INavigationItem[];
// }