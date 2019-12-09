const promoItemsData = [
    {   type: "bottle",
    name: "16 OZ. KALI SWIGGY STAINLESS STEEL BOTTLE",
    colorsAvailable: [
        //Black, Blue, Lilac, Lime Green, Navy, Red, White.
        "#000000", "#0000ff","#c8a2c8","#32CD32","#222953","#ff0000", "#ffffff"
    ],
    capacity: 25,
    unitPrice: 15,
    totalPrice: 375,
    bundleUnitPrice: 11,
    bundleTotalPrice: 275
    },
    {   type: "cable",
        name: "3-IN-1 CHARGING BUDDY WITH CARABINER CLIP",
        colorsAvailable: [
            //Black, Blue, Lime Green, Orange, Purple, Red, White
            "#000000", "#0000ff", "#32CD32", "#ffa500", "#6a0dad", "#ff0000", "#ffffff"
        ],
        capacity: 100,
        unitPrice: 4,
        totalPrice: 400,
        bundleUnitPrice: 3,
        bundleTotalPrice: 300
    },
    {   type: "notebook",
        name: "JOURNAL NOTEBOOK",
        colorsAvailable: [
            //Black, Blue, Red
            "#000000", "#0000ff","#ff0000"
        ],
        capacity: 100,
        unitPrice: 3,
        totalPrice: 300,
        bundleUnitPrice: 1.5,
        bundleTotalPrice: 150
    },
    {   type: "pen",
        name: "DEJA VU LIGHT UP PEN",
        colorsAvailable: [
            //Black, Blue, Red, Gunmetal, Green
            "#000000", "#0000ff", "#ff0000","#8e8379", "#008000"
        ],
        capacity: 150,
        unitPrice: 2.2,
        totalPrice: 330,
        bundleUnitPrice: 1.4,
        bundleTotalPrice: 210
    },
    {   type: "sticker",
        name: "VINYL STICKERS",
        colorsAvailable: ["##ffffff"],
        capacity: 200,
        unitPrice: 0.65,
        totalPrice: 130,
        bundleUnitPrice: 0.5,
        bundleTotalPrice: 100
    },
    {   type: "wallet",
        name: "DUAL POCKET SILICONE PHONE WALLET",
        colorsAvailable: [
            //Black, Blue, Gray, Lime Green, Orange, Pink, 
            "#000000", "#0000ff", "#808080", "#32cd32", "#ffa500", "#ffc0cb", 
            //Purple,Red, White, Yellow
            "#6a0dad","#ff0000", "#ffffff", "#ffff00"
        ],
        capacity: 250,
        unitPrice: 1.65,
        totalPrice: 412.5,
        bundleUnitPrice: 1.3,
        bundleTotalPrice: 325
    }
]
const apparelItemsData = [
    {   type: "tshirt",
        name: "CVC CREW T-SHIRT",
        colorsAvailable: [
            //Black, Bondi blue, dark heather gray, charcoal, espresso, ice blue,
            "#000000", "#0095b6", "#A9A9A9", "#333333",  "#4e312d", "#d6ecef",
            //kelly green, midnight navy, mint, orange, purple rush, red,
            "#02b263", "#001144", "#ffa500","#d8f5ed","#6A4481", "#FF0000",
            //sand, stone gray, tahiti blue, turquouise, warm gray, white
            "#f9e4b7", "#998e8f", "#00cdfe", "#4169e1", "#8c7d70", "#ffffff",
            //"indigo" = orion blue hex, "storm purple" = purple hex
            "#3e4f5c","#4b0082"
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
            //Black, white, cardinal, cool blue, heather gray, heavy metal,
            "#000000", "#ffffff", "#8a0303","#003366", "#c3c3c3", "#43464b",
            //indigo, midnight navy, military green, red, royal blue
            "#3e4f5c", "#001144", "#5a5e45", "#FF0000", "#4169e1"
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
            /*black, heather slate, white, black heather, heather forest */
            "#000000","#67807f","#FFFFFF","#2e2e2e","#4C6F82",
            //red,heather deep teal, navy, team purple, true royal/royal blue
            "#ff0000","#55787a", "#222953","#6a0dad","#0061a5"
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
const colorRoute =[
    {name: "Black", color: "#000000"},
    {name: "Blue", color: "#0000ff"},
    {name: "Lime Green", color: "#32CD32"},
    {name: "Orange", color: "#ffa500"},
    {name: "Purple", color: "#6a0dad"},
    {name: "Red", color: "#ff0000"},
    {name: "White", color: "#ffffff"},
    {name: "Gunmetal", color: "#8e8379"},
    {name: "Green", color: "#008000"},
    {name: "Navy", color: "#222953"},
    {name: "Lilac", color: "#c8a2c8"},
    {name: "Gray", color: "#808080"},
    {name: "Pink", color: "#ffc0cb"},
    {name: "Yellow", color: "#ffff00"},

    {name: "True Royal", color: "#0061a5"},
    {name: "Black Heather", color: "#2e2e2e"},
    {name: "Heather Deep Teal", color: "#55787a"},
    {name: "Heather Forest", color: "#67807f"},
    {name: "Heather Slate", color: "#4C6F82"},
    
    {name: "Military Green", color: "#5a5e45"},
    {name: "Heavy Metal", color: "#43464b"},
    {name: "Heather Gray", color: "#c3c3c3"},
    {name: "Cardinal", color: "#8a0303"},
    {name: "Cool Blue", color: "#003366"},

    {name: "Bondi Blue", color: "#0095b6"},
    {name: "Dark Heather Gray", color: "#A9A9A9"},
    {name: "Charcoal", color: "#333333"},
    {name: "Espresso", color: "#4e312d"},
    {name: "Ice Blue", color: "#d6ecef"},
    {name: "Indigo", color: "#3e4f5c"},
    {name: "Kelly Green", color: "#02b263"},
    {name: "Midnight Navy", color: "#001144"},
    {name: "Royal Blue", color: "#4169e1"},
    {name: "Mint", color: "#d8f5ed"},
    {name: "Purple Rush", color: "#6A4481"},
    {name: "Sand", color: "#f9e4b7"},
    {name: "Stone Gray", color: "#998e8f"},
    {name: "Storm Purple", color: "#4b0082"},
    {name: "Tahiti Blue", color: "#00cdfe"},
    {name: "Turquouise", color: "#4169e1"},
    {name: "Warm Gray", color: "#8c7d70"}  
]
export {promoItemsData, apparelItemsData, colorRoute}
