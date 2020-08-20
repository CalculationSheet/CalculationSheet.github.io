function calculations() {
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

    //print name
    document.write("Name : " + name);
    /*let boxName = document.createElement("input");
    boxName.type = "text";
    boxName.value = name;
    let bName = document.getElementsByTagName("body")[0];
    bName.appendChild(boxName);*/
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');

    document.write("Designation : " + desig);
    /*let boxDesig = document.createElement("input");
    boxDesig.type = "text";
    boxDesig.value = desig;
    let bDesig = document.getElementsByTagName("body")[0];
    bDesig.appendChild(boxDesig);*/
    document.write("<br />");
    document.write("<br />");
    //dob,doa,dor
    document.write("D.O.B : " + dob);
    /* let boxDob = document.createElement("input");
     boxDob.type = "text";
     boxDob.value = dob;
     let bDob = document.getElementsByTagName("body")[0];
     bDob.appendChild(boxDob);*/
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write("D.O.A : " + doa);
    /*let boxDoa = document.createElement("input");
    boxDoa.type = "text";
    boxDoa.value = doa;
    let bDoa = document.getElementsByTagName("body")[0];
    bDoa.appendChild(boxDoa);*/
    document.write("<br />");
    document.write("<br />");
    document.write("D.O.R : " + dor);
    /* let boxDor = document.createElement("input");
     boxDor.type = "text";
     boxDor.value = dor;
     let bDor = document.getElementsByTagName("body")[0];
     bDor.appendChild(boxDor);*/
    document.write("<br />");
    //printing PF no.
    document.write("<br />");
    //document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write("PF Number  : " + pfNo);
    /* let boxPfno = document.createElement("input");
     boxPfno.type = "number";
     boxPfno.value = pfNo;
     let bPfno = document.getElementsByTagName("body")[0];
     bPfno.appendChild(boxPfno);*/
    document.write("<br />");
    //printing qs
    document.write("<br />");
    document.write("Q.S.  : " + qs);
    /* let boxQs = document.createElement("input");
     boxQs.type = "number";
     boxQs.value = qs;
     let bQs = document.getElementsByTagName("body")[0];
     bQs.appendChild(boxQs);*/
    //print gp
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write("G.P.  : " + gp);
    /* let boxGp = document.createElement("input");
     boxGp.type = "number";
     boxGp.value = gp;
     let bGp = document.getElementsByTagName("body")[0];
     bGp.appendChild(boxGp);*/
    document.write("<br />");
    //printing basic 
    document.write("<br />");
    document.write("Basic  : " + basic);
    /* let boxBasic = document.createElement("input");
     boxBasic.type = "number";
     boxBasic.value = basic;
     let bBasic = document.getElementsByTagName("body")[0];
     bBasic.appendChild(boxBasic);*/
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;');
    //da
    document.write("DA :  " + da);
    /*let box2 = document.createElement("input");
    box2.type = "number";
    box2.value = da;
    let b2 = document.getElementsByTagName("body")[0];
    b2.appendChild(box2);*/
    document.write("<br />");
    //total
    document.write("<br />");
    document.write("Total amount(Basic + DA) :  " + Tot);
    /*let box1 = document.createElement("input");
    box1.type = "number";
    box1.value = Tot;
    let b1 = document.getElementsByTagName("body")[0];
    b1.appendChild(box1);*/
    /*wrong*/
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');

    if (status == "live") {
        if (pensionType == "sr") {
            commutedAmt = (commutedpen * 98.328);
        } else if (pensionType == "vr") {
            commutedAmt = (commutedpen * factor);
        }
        let dcrg = (Tot * qs) / 2;
        document.write("DCRG :   " + dcrg);
        /*let box3 = document.createElement("input");
        box3.type = "number";
        box3.value = dcrg;
        let b3 = document.getElementsByTagName("body")[0];
        b3.appendChild(box3);*/
        //pen
        document.write("<br />");
        document.write("<br />");
        document.write("Pension : " + pension);
        /* let box4 = document.createElement("input");
         box4.type = "number";
         box4.value = pension;
         let b5 = document.getElementsByTagName("body")[0];
         b5.appendChild(box4);*/
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write("Reduced Pension : " + reducedpen); //reduced
        /*let box6 = document.createElement("input");
        box6.type = "number";
        box6.value = reducedpen;
        let b7 = document.getElementsByTagName("body")[0];
        b7.appendChild(box6);*/
        document.write("<br />");
        document.write("<br />");
        //commuted amount and commuted pension
        if (pensionType == "sr" || pensionType == "vr") {
            document.write("Commuted pension : " + commutedpen); //commuted
            /* let box5 = document.createElement("input");
             box5.type = "number";
             box5.value = commutedpen;
             let b6 = document.getElementsByTagName("body")[0];
             b6.appendChild(box5);*/
            document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
            document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
            document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
            document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
            document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
            document.write("Commuted Amount : " + commutedAmt);
            /* let box7 = document.createElement("input");
             box7.type = "number";
             box7.value = commutedAmt;
             let b8 = document.getElementsByTagName("body")[0];
             b8.appendChild(box7);*/
        }

    } else if (status == "death" || status == "Death") {
        let dcrg = (Tot * qs);
        document.write("DCRG : " + dcrg);
        /*let box3 = document.createElement("input");
        box3.type = "number";
        box3.value = dcrg;
        let b4 = document.getElementsByTagName("body")[0];
        b4.appendChild(box3);*/
        document.write("<br />");
        document.write("<br />");
        //pension
        document.write("Pension : " + pension);
        /*let box4 = document.createElement("input");
        box4.type = "number";
        box4.value = pension;
        let b5 = document.getElementsByTagName("body")[0];
        b5.appendChild(box4);*/
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
        document.write("Reduced Pension : " + reducedpen); //reduced
        /* let box6 = document.createElement("input");
         box6.type = "number";
         box6.value = reducedpen;
         let b7 = document.getElementsByTagName("body")[0];
         b7.appendChild(box6);*/

    }
    document.write("<br />");
    document.write("<br />");
    //gis 
    document.write("G.I.S. : " + gis);

    document.write("<br />");
    document.write("<br />");
    //leave salary
    document.write("Total leave : " + (apl + hapl));
    /* let boxTotalLeave = document.createElement("input");
     boxTotalLeave.type = "number";
     boxTotalLeave.value = (apl + hapl);
     let b7 = document.getElementsByTagName("body")[0];
     b7.appendChild(boxTotalLeave);*/
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    if ((apl + hapl) <= 300) {
        rDay += apl + hapl;
        leaveSal += ((basic + da) * rDay) / 30;
        document.write("Leave Salary : " + leaveSal);
        /*let box8 = document.createElement("input");
        box8.type = "number";
        box8.value = leaveSal;
        let b9 = document.getElementsByTagName("body")[0];
        b9.appendChild(box8);*/
    }
    document.write("<br />");
    document.write("<br />");

    document.write("Benificiary Name : " + benificiaryName);
    /*let boxName2 = document.createElement("input");
    boxName2.type = "text";
    boxName2.value = benificiaryName;
    let bName2 = document.getElementsByTagName("body")[0];
    bName2.appendChild(boxName2);*/
    //relation
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');


    document.write("Relation : " + relation)
        /* let boxRelation = document.createElement("input");
         boxRelation.type = "text";
         boxRelation.value = relation;
         let bRelation = document.getElementsByTagName("body")[0];
         bRelation.appendChild(boxRelation);*/
        //dob of benificiary
    document.write("<br />");
    document.write("<br />");
    document.write("D.O.B Benificiary : " + dobBenificairy);
    /*let boxDobBenificiary = document.createElement("input");
    boxDobBenificiary.type = "text";
    boxDobBenificiary.value = dobBenificairy;
    let bDobBenificiary = document.getElementsByTagName("body")[0];
    bDobBenificiary.appendChild(boxDobBenificiary);*/
    //recovery/* calculate only total recover*/ rest in first page 
    document.write("<br />");
    document.write("<br />");

    document.write("Recovery 1 : " + recovery1);
    /*let boxRecovery1 = document.createElement("input");
    boxRecovery1.type = "text";
    boxRecovery1.value = recovery1;

    let bRecovery1 = document.getElementsByTagName("body")[0];
    bRecovery1.appendChild(boxRecovery1);*/
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');

    document.write("Recovery 2 : " + recovery2);
    /* let boxRecovery2 = document.createElement("input");
     boxRecovery2.type = "text";
     boxRecovery2.value = recovery2;
     boxRecovery2.name = "recovery2";
     let bRecovery2 = document.getElementsByTagName("body")[0];
     bRecovery2.appendChild(boxRecovery2);*/
    document.write("<br />");
    document.write("<br />");

    document.write("Recovery 3 : " + recovery3);
    /*let boxRecovery3 = document.createElement("input");
    boxRecovery3.type = "text";
    boxRecovery3.value = recovery3;
    let bRecovery3 = document.getElementsByTagName("body")[0];
    bRecovery3.appendChild(boxRecovery3);*/
    //total

    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write("Total Recovery : " + totalRecovery);
    /*let boxRecoveryTotal = document.createElement("input");
    boxRecoveryTotal.type = "number";
    boxRecoveryTotal.value = totalRecovery;
    let bRecoveryTotal = document.getElementsByTagName("body")[0];
    bRecoveryTotal.appendChild(boxRecoveryTotal);*/
    //FMA
    document.write("<br />");
    document.write("<br />");
    document.write("FMA : " + fma);
    /*let boxFma = document.createElement("input");
    boxFma.type = "text";
    boxFma.value = fma;
    let bFma = document.getElementsByTagName("body")[0];
    bFma.appendChild(boxFma);*/
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    //bank account number
    document.write("Bank Account Number : " + BankAccount)
        /*let boxBankAccountNumber = document.createElement("input");
        boxBankAccountNumber.type = "number";
        boxBankAccountNumber.value = BankAccount;
        let bBankAccountNumber = document.getElementsByTagName("body")[0];
        bBankAccountNumber.appendChild(boxBankAccountNumber);*/
    document.write("<br />");
    //ifsc code
    document.write("<br />");
    document.write("IFSC code : " + ifsc)
        /*let boxIfsc = document.createElement("input");
        boxIfsc.type = "text";
        boxIfsc.value = ifsc;
        let bIfsc = document.getElementsByTagName("body")[0];
        bIfsc.appendChild(boxIfsc);*/
        //vigilance clearance
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;');
    document.write("Vigelance Clearance : " + vigelanceClearance)
        /* let boxVigelanceClearance = document.createElement("input");
         boxVigelanceClearance.type = "text";
         boxVigelanceClearance.value = vigelanceClearance;
         let bVigelanceClearance = document.getElementsByTagName("body")[0];
         bVigelanceClearance.appendChild(boxVigelanceClearance);*/
    document.write("<br />");
    document.write("<br />");
    //button for print
    let button = document.createElement("button");
    button.innerHTML = "Print it";
    let body2 = document.getElementsByTagName("body")[0];
    body2.appendChild(button);
    button.addEventListener("click", function() { window.print(); });

}