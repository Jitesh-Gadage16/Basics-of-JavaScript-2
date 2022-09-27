// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


let personAccount = { 

    firstName : "jitesh",

    lastName : "gadage",

    incomes : [
        { 10000: 'Full Time Job Salary' },
        { 80000: 'Share Market' },
        { 30000: 'Real Estate' },
        { 50000: 'Crypto' },
      ],

    expenses :[
        { 5000: 'Room Rent' },
        { 6000: 'Petrol' },
        { 2000: 'Ration' },
        { 550: 'Maid' },
      ],

      totalIncome: function(){
        let income = 0 ;
        this.incomes.forEach(element => {
          for(let i in element){ 
            income =income + Number(i); 
          }
          // console.log("total income",income)
          return income;
       });
      },


      totalExpenses: function(){
        let expense = 0 ;
        this.expenses.forEach(element => {
          // console.log("dsd", element)
          for(let i in element){ 
            expense =expense + Number(i); 
          }
          // console.log("total expenses",expense)
          return expense;
       });
      },

      accountInfo : function(){
        console.log(`A/c Info : ${this.firstName}  ${this.lastName}`)

        console.log("your expnses");
        this.expenses.forEach(e => {
          console.log(e);
        })

        console.log("your incomes");
        this.incomes.forEach(e => {
          console.log(e);
        })
       },

       addExpense : function(obj){
        this.expenses.push(obj)
       },

       addIncome : function(obj){
        this.incomes.push(obj)
       }


     

}

// let anyvalue = personAccount.totalIncome();
// let anyincomes = personAccount.totalExpenses();

personAccount.accountInfo()
personAccount.addExpense({'1000':'food'})
personAccount.addIncome({'10000':'Mutual Funds'})
personAccount.expenses
personAccount.incomes

personAccount.accountInfo()
// personAccount.totalIncome();
// personAccount.totalExpenses();


