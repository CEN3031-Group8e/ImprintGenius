const packageItem1 = [
  {
    name: "T-Shirts",
    quantity: 150
  }, {
    name: "Long Sleeves",
    quantity: 150
  }, {
    name: "Cotton Hoodies",
    quantity: 100
  }, {
    name: "Popsockets",
    quantity: 200
  }, {
    name: "Powerbanks",
    quantity: 300
  }
];

const packageItem2 = [
  {
    name: "T-Shirts",
    quantity: 150
  }, {
    name: "Long Sleeves",
    quantity: 300
  }, {
    name: "Fans",
    quantity: 250
  }, {
    name: "Powerbanks",
    quantity: 300
  }, {
    name: "Drones",
    quantity: 5
  }
];

const packageItem3 = [
  {
    name: "T-Shirts",
    quantity: 300
  }, {
    name: "Long Sleeves",
    quantity: 100
  }, {
    name: "Cotton Hoodies",
    quantity: 200
  }, {
    name: "Fans",
    quantity: 200
  }, {
    name: "Powerbanks",
    quantity: 300
  }
];

const packageItem4 = [
  {
    name: "T-Shirts", 
    quantity: 500
  }, {
    name: "Sweaters",
    quantity: 200
  }, {
    name: "Cotton Hoodies",
    quantity: 300
  }, {
    name: "Fans",
    quantity: 300
  }, {
    name: "Powerbanks",
    quantity: 400
  }
];

export default [
    {
      name: "Trade Show Basics",
      cost: 1000,
      savings: 800,
      description: "This promo package makes it easy for businesses to reach their target demographic.",
      items: packageItem1,
      packID: 1
    },
    {
      name: "Next Level Pack",
      cost: 2500,
      savings: 700,
      description: "This promo package makes it easy for businesses to reach their target demographic.",
      items: packageItem2,
      packID: 2
    },
    {
      name: "Industry Titan Pack",
      cost: 4000,
      savings: 300,
      description: "This promo package makes it easy for businesses to reach their target demographic.",
      items: packageItem3,
      packID: 3
    },
    {
      name: "Everything You Need",
      cost: 5000,
      savings: 500,
      description: "This promo package makes it easy for businesses to reach their target demographic.",
      items: packageItem4,
      packID: 4
    }

];
