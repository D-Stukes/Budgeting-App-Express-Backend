
module.exports = [
    {
      item_name: "Income",
      amount: 3000,
      date: "01/3/23",
      from: "Employer",
      category: "Assets",
      description: "work wages",
    },

    {
        item_name: "Savings",
        amount: 5000,
        date: "01/2/2023",
        from: "Service",
        category: "Expenses",
        description: "adding to house savings",
      },
      {
        item_name: "Con Edison",
        amount: 150,
        date: "01/2/2023",
        from: "Utility Bill",
        category: "Expenses",
        description: "monthly electricity bill",
      },
      {
        item_name: "National Grid",
        amount: 100,
        date: "01/2/2023",
        from: "Utility Bill",
        category: "Expenses",
        description: "monthly gas bill",
      },
      {
        item_name: "Verizon",
        amount: 200,
        date: "01/2/2023",
        from: "Utility Bill",
        category: "Expenses",
        description: "landline phone bill",
      },
      {
        transactionId: "fdsjhd662",
        item_name: "Food",
        amount: 1000,
        date: "01/2/2023",
        from: "Grocery Store",
        category: "Expenses",
        description: "weekly groceries",
      },
]

// Removed UUIDs and hard code ids due to error that repeated elements almost infinitely transactionId: "fdsjhd662",

// There will be one model with at least these components
// item_name- string - the name of the transaction (ie: income, savings, cat food, etc.)
// amount -number - the amount of the transaction
// date- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
// from - string - who this transacton was with (ie. employer, bank, pet store, grocery store, etc)
// category - string - what category does this fall into (income, savings, pets, food, etc) - bonus, make this an options list on the new/edit forms.