function calculateNetSalry(basicSalary, benefits){
    //define the reuirements and constants 
    let grossSalary = basicSalary + benefits;
    let payee = grossSalary * 0.1;
    let nhif = 500;
    let nssf = 200;
    //performs the net salary calculation 
    letnetSlary = grossSalary - (payee + nhif + nssf);
    //logs the information to console 
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
    console.log(`Net Salary: ${netSalaary}`);
}
//runs the function 
calculateNetSalry(50000, 10000);
