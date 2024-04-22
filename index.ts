#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 100000; 
let myPin = 1001;

async function enterPin (){
    let pinAnswer = await inquirer.prompt(
        {
            name: "pin",
            message: "Enter your PIN",
            type: "number" 
        }
    );
    console.log(pinAnswer.pin);
    
    if (pinAnswer.pin === myPin) {
        console.log("welcome");
    
        let operationAns = await inquirer.prompt(
            [
                {
                    name: "operation",
                    message: "please select option",
                    type: "list",
                    choices: ["withdraw", "balance inquiry", "Fast Cash"]
                }
            ]
        );
        console.log(operationAns);
        if (operationAns.operation === "balance inquiry") {
            console.log("Your balance: $" + mybalance);
        } else if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "enter your amount",
                        type: "number"
                    }
                ]
            );
            mybalance -= amountAns.amount;
            console.log("your remaining balance:" + mybalance);
        } else if (operationAns.operation === "Fast Cash") {
            let amountAns = await inquirer.prompt(
                [
                    {
                        name: "Amount",
                        message: "Select your amount",
                        type: "list",
                        choices: [1000, 2000, 3000, 5000, 10000, 20000, 50000]
    
                    }
                ]
            );
            mybalance -= amountAns.Amount;
            console.log("your remaining balance:" + mybalance);
        }
        
    }
    else {
        console.log("Invalid pin !")
    };
}
enterPin();