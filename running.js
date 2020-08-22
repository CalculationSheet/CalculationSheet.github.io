function calculations() {
    let allCalculations = document.getElementById("allCalculations");
    let basic = parseInt(document.querySelector("input[name=basic]").value);
    let qs = parseFloat(document.querySelector("input[name=qs]").value);
    let currentDa = parseInt(document.querySelector("input[name=currentDa]").value);
    let runningAllowance = (basic * 55) / 100;
    let da = ((basic + runningAllowance) * currentDa) / 100;
    let Tot = (basic + runningAllowance + da);
    //for alive or dead.
    let status = document.querySelector("select[name=status]").value;
    let pension = (basic + runningAllowance) / 2;
    let commutedpen = (pension * 40) / 100;
    let reducedpen = (pension - commutedpen);
    let commutedAmmount;
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
    if ((apl + hapl) > 300) {
        alert("the sum of APL and HAPL is grater than 300");
        return;
    }
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    allCalculations.insertAdjacentHTML('beforeend', `<strong>Running Allowance</strong> : ${runningAllowance}`);
    allCalculations.insertAdjacentHTML('beforeend', `  <strong>DA</strong> : ${da}`);
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    allCalculations.insertAdjacentHTML('beforeend', `<strong>Total Amount</strong>: ${Tot}`);
    if (status == "live") {
        if (pensionType == "sr") {
            commutedAmmount = (commutedpen * 98.328);
        } else if (pensionType == "vr") {
            commutedAmmount = (commutedpen * factor);
        }
        let dcrg = (Tot * qs) / 2;
        if (dcrg > 2000000) {
            dcrg = 2000000;
        }
        allCalculations.insertAdjacentHTML('beforeend', `  <strong>DCRG </strong>: ${dcrg}`);
        allCalculations.insertAdjacentHTML('beforeend', '<br>');
        allCalculations.insertAdjacentHTML('beforeend', '<br>');
        allCalculations.insertAdjacentHTML('beforeend', `<strong>Pension</strong> :  ${pension}   <strong>Reduced pension</strong> : ${reducedpen}`);
        allCalculations.insertAdjacentHTML('beforeend', '<br>');
        allCalculations.insertAdjacentHTML('beforeend', '<br>');
        if (pensionType == "sr" || pensionType == "vr") {
            allCalculations.insertAdjacentHTML('beforeend', `<strong>Commuted Pension</strong> : ${commutedpen}`);
            allCalculations.insertAdjacentHTML('beforeend', `  <strong>Commuted Amount</strong> : ${commutedAmmount}`);
        }
    } else if (status == "death" || status == "Death") {
        let dcrg = (Tot * qs);
        if (dcrg > 2000000) {
            dcrg = 2000000;
        }

        allCalculations.insertAdjacentHTML('beforeend', ` <strong>DCRG</strong> : ${dcrg}`);
        allCalculations.insertAdjacentHTML('beforeend', '<br>');
        allCalculations.insertAdjacentHTML('beforeend', '<br>');
        allCalculations.insertAdjacentHTML('beforeend', `<strong>Pension</strong> :  ${pension}`);
        allCalculations.insertAdjacentHTML('beforeend', ` <strong>Reduced pension</strong> : ${reducedpen}`);
    }

    allCalculations.insertAdjacentHTML('beforeend', `<br>`);
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    allCalculations.insertAdjacentHTML('beforeend', `<strong>Total leaves</strong>  : ${apl+hapl}`);
    allCalculations.insertAdjacentHTML("beforeend", ``);
    allCalculations.insertAdjacentHTML('beforeend', `  <strong>Leave salary </strong>: ${(((basic)+((basic*30)/100)+((((basic)+((basic*30)/100))*currentDa)/100))*(apl+hapl))/30}`);
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    allCalculations.insertAdjacentHTML('beforeend', `   <strong>Total Recovery </strong>: ${totalRecovery}`);
    //print and clear
    allCalculations.insertAdjacentHTML('beforeend', `<br>`);
    allCalculations.insertAdjacentHTML('beforeend', '<br>');
    let button = document.createElement("button");
    button.innerHTML = "Print it";
    let body = document.getElementsByTagName("body")[0];
    allCalculations.appendChild(button);
    button.addEventListener("click", function() { window.print(); });
    let buttonClear = document.createElement("button");
    buttonClear.innerHTML = "clear";
    allCalculations.appendChild(buttonClear);
    buttonClear.addEventListener("click", function() {
        if (allCalculations.childNodes.length > 0) {
            allCalculations.innerHTML = "";
        }
    });
}