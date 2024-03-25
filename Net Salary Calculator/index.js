//This code snippet defines two JavaScript functions: calculateNetSalary and taxCalc.
const calculateNetSalary = () => {
    //This line defines a function named calculateNetSalary using an arrow function syntax. I
    const grossSalary = parseFloat(document.getElementById("salaryInput").value);
    const deductions = parseFloat(document.getElementById("deductions").value);
    const taxRate = taxCalc(); 

    const taxAmount = grossSalary * taxRate;
    const netSalary = grossSalary - (taxAmount - deductions)
   
    document.getElementById("netSalary").textContent = netSalary;
}

const taxCalc = () => {
    const gross = parseFloat(document.getElementById("salaryInput").value);
   //The function uses a switch statement to determine the tax rate based on the gross salary value (gross).
    switch (true) {
        case gross <= 13000:
            return 0.01;
        case gross <= 20000 && gross >= 13001:
            return 0.16;
        case gross <= 50000 && gross >= 20001:
            return 0.2;
        case gross <= 100000 && gross >= 50001:
            return 0.3;
        default:
            return 0.4;
    }
}