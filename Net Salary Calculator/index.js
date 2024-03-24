const calculateNetSalary = () => {
    const grossSalary = parseFloat(document.getElementById("salaryInput").value);
    const deductions = parseFloat(document.getElementById("deductions").value);
    const taxRate = taxCalc(); 

    const taxAmount = grossSalary * taxRate;
    const netSalary = grossSalary - taxAmount - deductions;
   
    document.getElementById("netSalary").textContent = netSalary;
}

const taxCalc = () => {
    const gross = parseFloat(document.getElementById("salaryInput").value);
   
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
    }function calculateNetSalary(basicSalary, benefits) {
        // KRA Tax Rates
        const taxRates = [
            { min: 0, max: 24000, rate: 10 },
            { min: 24001, max: 40667, rate: 15 },
            { min: 40668, max: 57333, rate: 20 },
            { min: 57334, max: 74000, rate: 25 },
            { min: 74001, max: Infinity, rate: 30 }
        ];
    
        // NHIF and NSSF Rates
        const nhifRate = 0.015;
        const nssfRate = 0.06;
    
        // Calculate Gross Salary
        const grossSalary = basicSalary + benefits;
    
        // Calculate Tax
        let tax = 0;
        for (const rate of taxRates) {
            if (grossSalary > rate.min && grossSalary <= rate.max) {
                tax = (grossSalary - rate.min) * (rate.rate / 100);
                break;
            }
        }
        'Net Salary Calculator'
    
        // Calculate NSSF Deductions
        const nssfDeductions = basicSalary * nssfRate;
    
        // Calculate Net Salary
        const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
    
        // Return the results
        return {
            grossSalary,
            tax,
            nhifDeductions,
            nssfDeductions,
            netSalary
        };
    }
    
    // Example usage
    const basicSalary = parseFloat(prompt("Enter the basic salary:"));
    const benefits = parseFloat(prompt("Enter the benefits:"));
    
    if (!isNaN(basicSalary) && !isNaN(benefits)) {
        const result = calculateNetSalary(basicSalary, benefits);
        console.log("Gross Salary:", result.grossSalary);
        console.log("Tax:", result.tax);
        console.log("NHIF Deductions:", result.nhifDeductions);
        console.log("NSSF Deductions:", result.nssfDeductions);
        console.log("Net Salary:", result.netSalary);
    } else {
        console.log('Invalid input: Please enter valid numbers');
    }
}
