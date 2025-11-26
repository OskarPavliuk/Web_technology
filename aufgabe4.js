/**
 * size: Flaschengröße in Litern
 * price: Preis pro Flasche
 * stock: Anzahl Flaschen vorrätig
 **/
const stock = [
    {
        _id: 1,
        brand: "Berliner Pilsener",
        type: "beer",
        size: 0.5,
        price: 0.72,
        stock: 27
    },
    {
        _id: 2,
        brand: "Vita Cola",
        type: "soft drink",
        size: 1,
        price: 1.35,
        stock: 10
    },
    {
        _id: 3,
        brand: "Pilsener Urquell",
        type: "beer",
        size: 0.5,
        price: 0.95,
        stock: 18
    },
    {
        _id: 4,
        brand: "Sternburg Export",
        type: "beer",
        size: 0.5,
        price: 0.48,
        stock: 36
    }
];

const purchases = [
    {
        date: "2023-08-27T14:23:24.000Z",
        productId: 1,
        amount: 5
    },
    {
        date: "2023-08-28T15:01:59.000Z",
        productId: 3,
        amount: 2
    }
];


/* 1. Wie viele Liter Bier sind insgesamt vorrätig? */
console.log(
    stock.filter(item => item.type == "beer").map(item => item.size * item.stock).reduce((a, item) => a + item)
);

/* 2. Welches ist das günstigste Getränk, gemessen am Preis pro Liter? */
console.log(
    stock.map(item => {
        item.pricePerLiter = item.price / item.size;
        return item;
    }).sort((a, b) => a.pricePerLiter - b.pricePerLiter)[0]
);

/* 3. Was ist der durchschnittliche Preis aller Biere, gemessen am Preis pro Liter? */
console.log(
stock.filter(item => item.type == "beer").map(item => item.price / item.size).reduce((a, item) => a + item)
/
stock.filter(item => item.type == "beer").length
);

/* 4. Welche brands wurden gekauft? */
console.log(
    purchases.map(purchase => stock.find(item => item._id == purchase.productId)).map(item => item.brand)
);

/* 5. Wie viel haben die Kunden insgesamt ausgegeben? */
console.log(
    purchases.map(purchase => stock.find(item => item._id == purchase.productId).price * purchase.amount).reduce((a, item) => a + item)
);




/* Zusatz 1: Welches ist das teuerste Getränk, gemessen am Preis pro Liter? */
console.log(

);

/* Zusatz 2: Ist noch Vita Cola vorrätig? */
console.log(

);

/* Zusatz 3: Ergänzen Sie alle Getränkepreise um die Mehrwertsteuer in Höhe von 19%. */
console.table(

);

/* Zusatz 4: Sind von allen Getränken noch mindestens 10 Flaschen vorrätig? */
console.log(

);
