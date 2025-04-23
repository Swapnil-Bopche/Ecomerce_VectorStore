import { IFilter } from "src/interface";

export const filters: IFilter[] = [
    {
        id: 'color',
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "blue", label: "Blue" },
            { value: "beige", label: "Beige" },
            { value: "brown", label: "Brown" },
            { value: "orange", label: "Orange" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "yellow", label: "Yellow" },
        ]
    },

    {
        id: 'size',
        name: "Size",
        options: [
            { value: "XS", label: "XS" },
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },

        ]
    },

];


export const singleFilter:IFilter[] = [
    {
        id: 'price',
        name: "Price",
        options: [
            { value: "129-365", label: "₹129 To ₹365" },
            { value: "365-999", label: "₹365 To ₹999" },
            { value: "999-1999", label: "₹999 To ₹1999" },
            { value: "1999-2999", label: "₹1999 To  ₹2999" },
            { value: "3999-4999", label: "₹3999 To ₹4999" },

        ]
    },

    {
        id: 'discount',
        name: "DISCOUNT RANGE",
        options: [
            { value: "10", label: "10% and Above" },
            { value: "20", label: "20% and Above" },
            { value: "30", label: "30% and Above" },
            { value: "40", label: "40% and Above" },
            { value: "50", label: "50% and Above" },
            { value: "60", label: "60% and Above" },
            { value: "70", label: "70% and Above" },
            { value: "80", label: "80% and Above" },


        ]
    },

    {
        id: 'stock',
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" }
        ]
    },
];

