function department(src) {
    window.location = src;
}

function calculations() {
    let allCalculation = document.getElementById("allCalculation");
    let name = document.querySelector("input[name=name]").value;
    let desig = document.querySelector("input[name=desig]").value;
    let pfNo = parseInt(document.querySelector("input[name=pfNo]").value);
    let gp = parseInt(document.querySelector("input[name=gp]").value);
    let basic = parseInt(document.querySelector("input[name=basic]").value);
    let qs = parseFloat(document.querySelector("input[name=qs]").value);
    let currentDa = parseInt(document.querySelector("input[name=currentDa]").value);
    let da = (basic * currentDa) / 100;
    let Tot = basic + da;
    let status = document.querySelector("select[name=status]").value;
    let pension = basic / 2;
    let commutedpen = (pension * 40) / 100;
    let reducedpen = (pension - commutedpen);
    let commutedAmt;
    let apl = parseInt(document.querySelector("input[name=apl]").value);
    let hapl = (parseInt(document.querySelector("input[name=hapl]").value)) / 2;
    let rDay = 0;
    let leaveSal = 0;
    let pensionType = document.querySelector("select[name=pensionType]").value;
    let factor = parseFloat(document.querySelector("input[name=factor]").value);
    let benificiaryName = document.querySelector("input[name=benificiaryName]").value;
    let relation = document.querySelector("input[name=relation]").value;
    let recovery1 = parseInt(document.querySelector("input[name=recovery1]").value);
    let recovery2 = parseInt(document.querySelector("input[name=recovery2]").value);
    let recovery3 = parseInt(document.querySelector("input[name=recovery3]").value);
    let totalRecovery = recovery1 + recovery2 + recovery3;
    let vigelanceClearance = document.querySelector("select[name=vigelanceClearance]").value;
    let BankAccount = document.querySelector("input[name=bankAccount]").value;
    let fma = document.querySelector("select[name=fma]").value;
    let ifsc = document.querySelector("input[name=ifscCode]").value;
    const dob = document.querySelector("input[name=dob]").value;
    const doa = document.querySelector("input[name=doa]").value;
    const dor = document.querySelector("input[name=dor]").value;
    let gis = parseFloat(document.querySelector("input[name=gis]").value);
    const dobBenificairy = document.querySelector("input[name=benificiaryDob]").value;

    if ((apl + hapl) > 300) {
        alert("the sum of APL and HAPL is grater than 300");
        return;
    }
    allCalculation.insertAdjacentHTML("beforeend", `<div>DA : ${da}  Total amount(Basic + DA) : ${Tot}</div> `);

    if (status == "live") {
        if (pensionType == "sr") {
            commutedAmt = (commutedpen * 98.328);
        } else if (pensionType == "vr") {
            commutedAmt = (commutedpen * factor);
        }
        let dcrg = (Tot * qs) / 2;
        if (dcrg > 2000000) {
            dcrg = 2000000;
        }
        allCalculation.insertAdjacentHTML("beforeend", `<div> DCRG : ${dcrg}</div>`);
        allCalculation.insertAdjacentHTML("beforeend", `<div>Pension : ${pension} Reduced pension : ${reducedpen} </div>`);

        //commuted amount and commuted pension
        if (pensionType == "sr" || pensionType == "vr") {
            allCalculation.insertAdjacentHTML('beforeend', `<div>Commuted pension : ${commutedpen}  Commuted amount : ${commutedAmt}</div>`); //commuted

        }

    } else if (status == "death" || status == "Death") {
        let dcrg = (Tot * qs);

        if (dcrg > 2000000) {
            dcrg = 2000000;
        }
        allCalculation.insertAdjacentHTML("beforeend", `<div> DCRG : ${dcrg}</div>`);
        allCalculation.insertAdjacentHTML("beforeend", `<div>Pension : ${pension} Reduced pension : ${reducedpen} </div>`);
    }

    if ((apl + hapl) <= 300) {
        rDay += apl + hapl;
        leaveSal += ((basic + da) * rDay) / 30;

    }
    allCalculation.insertAdjacentHTML('beforeend', `<div>Total leave : ${apl + hapl} Leave Salary : ${leaveSal} </div>`);

    allCalculation.insertAdjacentHTML('beforeend', `<div>Total Recovery : ${totalRecovery}</div>`);
    //button for print
    let button = document.createElement("button");
    button.innerHTML = "Print it";
    let body = document.getElementsByTagName("body")[0];
    allCalculation.appendChild(button);
    button.addEventListener("click", function() { window.print(); });
    let buttonClear = document.createElement("button");
    buttonClear.innerHTML = "clear";
    allCalculation.appendChild(buttonClear);
    buttonClear.addEventListener("click", function() {
        if (allCalculations.childNodes.length > 0) {
            allCalculations.innerHTML = "";
        }
    });

}