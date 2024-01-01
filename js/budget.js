class Budget {
    constructor() {
        this.getbudget = document.querySelector("#budget");

        this.show_budget = document.querySelector("#ff1");
        this.show_expense = document.querySelector("#ff2");
        this.show_total = document.querySelector("#ff3");

    }

    handlebudget() {
        event.preventDefault();

        let budget = parseInt(this.getbudget.value);
        console.log(budget);

        if (budget < 0 || budget === '' || isNaN(budget)) {
            document.getElementById("error1").innerHTML = 'please enter BUDGET'
        } else {
            document.getElementById("error1").innerHTML = ''

            this.show_budget.innerHTML = budget;
            this.displaydata();
        }
    }


    displaydata() {
        // event.preventDefault();

        let localbudget = JSON.parse(localStorage.getItem("budget"));
        console.log(localbudget);

        let localexpense = JSON.parse(localStorage.getItem("exp_list"));
        console.log(localexpense);      //null

        let localtotal = JSON.parse(localStorage.getItem("balance"));
        // console.log(localtotal);
        // console.log(localbudget, localexpense, localtotal);



        if (localbudget != 0 && localbudget !== null) {
            // console.log(localbudget);
            let reduce;

            if (localexpense) {
                reduce = localexpense.reduce((acc, v) => acc + v.expense_amt, 0);
            } else {
                reduce = 0;
            }

            // console.log(reduce);
            this.show_budget.innerHTML = localbudget;
            this.show_expense.innerHTML = reduce;
            this.show_total.innerHTML = localtotal - reduce;
        } else {
            // console.log("ok");
            let budgetvalue = parseInt(this.show_budget.textContent);
            // console.log(budgetvalue);
            localStorage.setItem("budget", JSON.stringify(budgetvalue))

            let expamt_value = parseInt(this.show_expense.textContent);
            // console.log(expamt_value);
            localStorage.setItem("expense", JSON.stringify(expamt_value))

            let total = budgetvalue - expamt_value;

            // console.log(total);
            localStorage.setItem("balance", JSON.stringify(total))
            this.show_total.innerHTML = total;

        }
    }
}
class expense extends Budget {
    constructor() {
        super();

        this.getexpense = document.querySelector("#expence");
        this.getexp_amt = document.querySelector("#expenceamount");

        this.update = null;
    }

    handleexpenses() {
        // event.preventDefault();

        let expense = this.getexpense.value;
        // console.log(expense);

        let exp_amt = parseInt(this.getexp_amt.value);
        // console.log(exp_amt);

        let id = Math.floor(Math.random() * 1000)
        // console.log(id);

        let expensecheck = true;
        let exp_amtcheck = true;

        if (expense) {
            if (expense == 'number') {
                document.getElementById("error2").innerHTML = 'please enter valid expense name'
            } else {
                document.getElementById("error2").innerHTML = '';
                expensecheck = false;
            }

        } else {
            document.getElementById("error2").innerHTML = 'please enter expense name'
        }

        if (exp_amt) {
            if (exp_amt < 0) {
                document.getElementById("error3").innerHTML = 'please enter valid expense'
            } else {
                document.getElementById("error3").innerHTML = '';
                exp_amtcheck = false;

                this.show_expense.innerHTML = exp_amt;
                // this.displaydata();
            }

        } else {
            document.getElementById("error3").innerHTML = 'please enter expense'
        }

        if (expensecheck == false && exp_amtcheck == false) {

            if (this.update) {
                console.log("update task", this.update);

                let expense_list = JSON.parse(localStorage.getItem("exp_list"));

                let index = expense_list.findIndex((v) => v.id === this.update);
                console.log(index);

                let obj = {
                    id: this.update,
                    exp_name: expense,
                    expense_amt: parseInt(exp_amt),
                }
                console.log(obj);

                expense_list[index] = obj;

                localStorage.setItem("exp_list", JSON.stringify(obj));

            } else {
                console.log("add");
                let expense_list = JSON.parse(localStorage.getItem("exp_list"));
                console.log(expense_list);

                if (expense_list) {

                    expense_list.push({ id: id, exp_name: expense, expense_amt: parseInt(exp_amt) });
                    localStorage.setItem('exp_list', JSON.stringify(expense_list));
                } else {
                    localStorage.setItem("exp_list", JSON.stringify([{ id: id, exp_name: expense, expense_amt: parseInt(exp_amt) }]))
                }
            }
        }
        this.displaylist();
        this.displaydata();
        this.update = null;
        this.getexpense = '';
        this.getexp_amt = '';

    }

    handledelete(id) {
        console.log(id);

        let expense_list = JSON.parse(localStorage.getItem("exp_list"));
        console.log(expense_list);

        if(expense_list){
            let fil_value = expense_list.filter((v) => v.id != id);
            localStorage.setItem("exp_list", JSON.stringify(fil_value));
    
            window.location.reload();
    
            this.displaydata();
            this.displaylist();
        }

        
    }

    handleEdit(data) {
        console.log(data);
        let expense_list = JSON.parse(localStorage.getItem("exp_list"));
        console.log(expense_list);

        this.getexpense.value = data.exp_name;
        this.getexp_amt.value = data.expense_amt;

        this.update = data.id;
    }

    displaylist() {

        let expense_list = JSON.parse(localStorage.getItem("exp_list"));
        console.log(expense_list);

        if (expense_list) {

            let ulEle = document.getElementById("ul-list");

            ulEle.innerHTML = ''

            expense_list.map((v) => {

                let liEle = document.createElement("li");

                let spanTxtEle = document.createElement("span");
                // spanTxtEle.setAttribute("id","deco")
                let spanTxt = document.createTextNode(v.exp_name);

                let spanAmtEle = document.createElement("span");
                let spanAmt = document.createTextNode(v.expense_amt);

                let btnEdit = document.createElement("button");
                btnEdit.addEventListener('click', () => { e.handleEdit(v) })
                let btnEditTxt = document.createTextNode("Edit");

                let btnDelete = document.createElement("button");
                btnDelete.addEventListener('click', () => { e.handledelete(v.id) })
                let btnDelTxt = document.createTextNode("Delete");

                spanTxtEle.appendChild(spanTxt);
                spanAmtEle.appendChild(spanAmt);
                btnEdit.appendChild(btnEditTxt);
                btnDelete.appendChild(btnDelTxt);

                liEle.appendChild(spanTxtEle);
                liEle.appendChild(spanAmtEle);
                liEle.appendChild(btnEdit);
                liEle.appendChild(btnDelete);

                ulEle.appendChild(liEle);
            })
        }
    }

}
let e = new expense();

e.displaydata();
e.displaylist();


let budgetref = document.getElementById("budgetform");
budgetref.addEventListener("submit", function () {
    e.handlebudget();
});

let expenseref = document.getElementById("expenseform");
expenseref.addEventListener("submit", function () {
    e.handleexpenses();
});


