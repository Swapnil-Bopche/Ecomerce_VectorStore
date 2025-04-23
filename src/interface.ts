export interface ICaroselData {
    image: string,
    path?: string
}

export interface IProducts {
    imageUrl: string,
    brand: string,
    price: string,
    color: string,
    disscount: string,
    description: string,
    quantity: number,
    title: string,
    discountedPrice: string
}

export interface ILogo {
    imageUrl: string,
}


export interface Ifetured {
    name: string,
    imageSrc: string,
    imageAlt: string
}

export interface Iitems {
    id: string,
    name: string,
}

export interface Isections {
    id: string,
    name: string,
    items: Iitems[]
}


export interface ICategories {
    id: string,
    name: string,
    featured: Ifetured[],
    sections: Isections[],

}


export interface Ioptions {
    value: string,
    label: string
}

export interface IFilter {
    id: string,
    name: string,
    options: Ioptions[]
}




