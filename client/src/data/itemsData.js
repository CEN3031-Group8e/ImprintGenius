const promoItemsData = [
    {   type: "wallet", 
        name: "DUAL POCKET SILICONE PHONE WALLET",
        colorsAvailable: [
            //Black, Blue, Gray, Lime Green, Orange, Pink, Purple, Red, White, Yellow
            "#000000", "#0000ff", "#808080", "#32cd32", "#ffa500", "#ffc0cb", "#800080", 
            "0xFF0000", "#ffffff", " #ffff00"
        ],
        capacity: 250,
        unitPrice: 1.65,
        totalPrice: 412.5,
        bundleUnitPrice: 1.3,
        bundleTotalPrice: 325
    },
    {   type: "cable",
        name: "3-IN-1 CHARGING BUDDY WITH CARABINER CLIP",
        colorsAvailable: [
            //Black, Blue, Lime Green, Orange, Purple, Red, White
            "#000000", "#0000ff", "#808080", "#32cd32", "#ffc0cb", "0xFF0000", "#ffffff"
        ],
        capacity: 100,
        unitPrice: 4,
        totalPrice: 400,
        bundleUnitPrice: 3,
        bundleTotalPrice: 300
    },
    {   type: "pen",
        name: "DEJA VU LIGHT UP PEN",
        colorsAvailable: [
            //Black, Blue, Gunmetal, Green, Red
            "#000000", "#0000ff", "#2a3439", "#008000", "0xFF0000"
        ],
        capacity: 150,
        unitPrice: 2.2,
        totalPrice: 330,
        bundleUnitPrice: 1.4,
        bundleTotalPrice: 210
    },
    {   type: "bottle",
        name: "16 OZ. KALI SWIGGY STAINLESS STEEL BOTTLE",
        colorsAvailable: [
            //Black, Blue, Lilac, Lime Green, Navy, Red, White.
            "#000000", "#0000ff","#c8a2c8","#808080","#000080","#FF0000", "##ffffff"
        ],
        capacity: 25,
        unitPrice: 15,
        totalPrice: 375,
        bundleUnitPrice: 11,
        bundleTotalPrice: 275
    },
    {   type: "notebook",
        name: "JOURNAL NOTEBOOK",
        colorsAvailable: [
            //Black, Blue, Red
            "#000000", "#0000ff","#FF0000"
        ],
        capacity: 100,
        unitPrice: 3,
        totalPrice: 300,
        bundleUnitPrice: 1.5,
        bundleTotalPrice: 150
    },
    {   type: "sticker",
        name: "VINYL STICKERS",
        colorsAvailable: ["##ffffff"],
        capacity: 200,
        unitPrice: 0.65,
        totalPrice: 130,
        bundleUnitPrice: 0.5,
        bundleTotalPrice: 100
    }
]
const apparelItemsData = [
    {   type: "tshirt",
        name: "CVC CREW T-SHIRT",
        colorsAvailable: [
            //Black, Bondi blue, dark heather gray, charcoal, espresso, ice blue,
           // indigo, kelly green, midnight navy, mint, orange, purple rush, red,
            //sand, stone gray, storm, tahiti blue, turquouise, warm gray, white
            "#000000", "#0095b6", "#46220b", "#36454f",  "#4e312d", "#d6ecef",
            "#4b0082", "#4cbb17", "#02075d", "#98ff98", "#ffa500","#6A4481", "#FF0000",
            "#c2b280", "#888c8d", "#747880", "#1c87b7", "#40e0d0", "#8c7d7", "#ffffff"
        ],
        capacity: 60,
        sizeOptions: [ {id:0, name:"XS"},{id:1, name:"S"},{id:2, name:"M"},
                       {id:3, name:"L"},{id:4, name:"XL"},{id:5, name:"2XL"},
                       {id:6, name:"3XL"},{id:7, name:"4XL"}
        ],
        unitPrice: 12,
        totalPrice: 720,
        bundleUnitPrice: 7,
        bundleTotalPrice: 420
    },
    {   type: "longsleeve",
        name: "MENS COTTON LONGSLEEVE CREW",
        colorsAvailable: [
            //Black, white, cardinal, cool blue, heather gray, heavy metal, indigo,
            // midnight navy, military green, red, royal
            "#000000", "##ffffff", "#c41e3a","#2F66A9", "#9aa297", "#46473e",
            "#4b0082", "#02075d", "#4b5320", "#FF0000", "#4169e1"
        ],
        capacity: 10,
        sizeOptions: [ {id:0, name:"S"},{id:1, name:"M"},{id:2, name:"L"},
                       {id:3, name:"XL"},{id:4, name:"2XL"} 
        ],
        unitPrice: 26,
        totalPrice: 260,
        bundleUnitPrice: 10,
        bundleTotalPrice: 100
    },
    {   type: "hoodie",
        name: "BELLA + CANVAS SPONGE FLEECE PULLOVER HOODED SWEATSHIRT",
        colorsAvailable: [
            /*
            True Royal,Navy,Lilac,Team Purple ,Peach, ,Mauve ,Heather Red,
            Red,Heather Maroon ,Gold ,Heather Mustard ,Heathr Sand Dune,
            Tan ,Lt Grey Marble ,Athletic Heather ,Dark Grey ,Dk Gray Heather,
            Dk Gry Marb Flc ,Drk Gry Htr/Blk ,Deep Heather ,Dtg Dark Grey,
            Black ,Black Heather ,Dtg Black ,Teal ,Forest ,Military Green,
            Ash ,Dtg White ,Vintage White ,White ,Heather Forest ,Heather Navy,
            Heather Slate ,Heather Tru Royl ,Hthr Deep Teal ,Maroon ,Storm 
             */
            "#0061a5", "#222953", "#efcfe7", "#48267a", "#f6c2ac", "#b96c64", "#e43441", 
            "#d43134", "#733a40", "#f8b327", "#dd9526","#e7c5a0", "#bfa284", "#bab7b5",
            "#999999", "#474246", "#474246", "#6c6f70","#494B48","#363539","#858785",
            "#373538", "#000000", "#1e1e1e", "#141414","#58aa93","#1f3832","#5a5e45",
            "#f3f3f5","#faf9fe", "#ece5df","#FFFFFF", "#67807f", "#556a87","#4C6F82",
            "#285FA2", "#55787a","#5b2a2e","#a39396"
        ],
        capacity: 5,
        sizeOptions: [ {id:0, name:"XS"},{id:1, name:"S"},{id:2, name:"M"},
                       {id:3, name:"L"},{id:4, name:"XL"},{id:5, name:"2XL"} 
        ],
        unitPrice: 50,
        totalPrice: 250,
        bundleUnitPrice: 20,
        bundleTotalPrice: 100
    }
]
export {promoItemsData, apparelItemsData}