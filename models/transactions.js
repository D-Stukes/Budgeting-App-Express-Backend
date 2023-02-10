
module.exports = [
    {
      transactionId: "fdsjhd778",
      item_name: "Income",
      amount: 3000,
      date: "2023-03-23",
      from: "Employer",
      category: "Assets",
      description: "work wages",
      is_expense: false,
    },

    {
       transactionId: "fdsjhd978",
        item_name: "Savings",
        amount: 5000,
        date: "2023-02-20",
        from: "Service",
        category: "Expenses",
        description: "adding to house savings",
        is_expense: false,
      },
      {
        transactionId: "fdsjhd889",
        item_name: "Con Edison",
        amount: -150,
        date: "2023-09-16",
        from: "Utility Bill",
        category: "Expenses",
        description: "monthly electricity bill",
        is_expense: true,
      },
      {
        transactionId: "fdsjhd992",
        item_name: "National Grid",
        amount: -100,
        date: "2023-07-30",
        from: "Utility Bill",
        category: "Expenses",
        description: "monthly gas bill",
        is_expense: true,
      },
      {
        transactionId: "fdsjhd552",
        item_name: "Verizon",
        amount: -200,
        date: "2023-01-29",
        from: "Utility Bill",
        category: "Expenses",
        description: "landline phone bill",
        is_expense: true,
      },
      {
        transactionId: "fdsjhd662",
        item_name: "Food",
        amount: -1000,
        date: "2023-04-12",
        from: "Grocery Store",
        category: "Expenses",
        description: "weekly groceries",
        is_expense: true,
      },
]

// Removed UUIDs and hard code ids due to error that repeated elements almost infinitely transactionId: "fdsjhd662",

// There will be one model with at least these components
// item_name- string - the name of the transaction (ie: income, savings, cat food, etc.)
// amount -number - the amount of the transaction
// date- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
// from - string - who this transacton was with (ie. employer, bank, pet store, grocery store, etc)
// category - string - what category does this fall into (income, savings, pets, food, etc) - bonus, make this an options list on the new/edit forms.