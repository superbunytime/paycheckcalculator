function grossPay(hours, sdHours, otHours, hdHours){

    const hourlyRate = 0//YOUR HOURLY RATE
    const shiftDiff = 0//YOUR SHIFT DIFFERENTIAL
    const otRate = hourlyRate * 0//YOUR OVERTIME MULTIPLIER
    const holidayRate = hourlyRate * 0//YOUR HOLIDAY TIME MULTIPLIER
    let totalGross = (hourlyRate * hours) + (shiftDiff * sdHours) + (otRate * otHours) + (holidayRate * hdHours)

    return totalGross

}

function paycheckDeductions(totalGross){

    //YOUR WITHHELD VALUES GO HERE (they may differ from mine); feel free to change up variable names for ease of use
    const wTax = totalGross * 0//lines 16 through 22 are percentage-based withheld values for me, whereas 
    const ssTax = totalGross * 0//health insurance is a fixed amount.  Your mileage may vary; I am not an accountant.
    const medicare = totalGross * 0//...or a tax lawyer.
    const pension = totalGross * 0
    const mAidFund = totalGross * 0
    const fAidIns = totalGross * 0
    const pers2 = totalGross * 0
    const healthIns = 0
    
    let deductions = wTax + ssTax + medicare + pension + mAidFund + fAidIns + pers2 + healthIns

    return deductions
}

let gross = Math.round(grossPay(0, 0, 0, 0)) //this is where you input the hours worked, shift diff, etc
let withheld = Math.round(paycheckDeductions(gross))
let net = Math.round(gross -(paycheckDeductions(gross)))
console.log(gross, withheld, net)

//TODO
//Add tax bracket conditionals

//TODO beyond
//create gui