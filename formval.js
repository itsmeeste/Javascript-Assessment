
function validation()
{
    var passed = true;

    if(!CheckName())
    {
        passed = false;
    }
    if(!CheckEmail())
    {
        passed = false;
    }
    if(!CheckDate())
    {
        passed = false;
    }
    if(!CheckAddress())
    {
        passed = false;
    }

    if(!CheckPostCode())
    {
        passed = false;
    }

    storeData();

    return passed;
}


function CheckName()
{
    var doc = document.getElementById("name");
    var text = document.getElementById("name").value;

    var regex = /^[a-zA-Z]+$/;

    if(text == "")
    {
        document.getElementById("nameID").innerHTML = "No name was entered";
        //console.log("No name was entered");
        //doc.placeholder = "No name was entered";
        //doc.style.backgroundColor = "red";
        return false;
    }

    if(!(text.match(regex)))
    {
        document.getElementById("nameID").innerHTML = "invalid name";
        //doc.placeholder = "invalid name input";
        //doc.style.backgroundColor = "red";
        console.log("Invalid input");
        return false;
    }
    document.getElementById("nameID").innerHTML = "";
    return true;
}

function CheckEmail()
{
    
    var text = document.getElementById("email").value;

    var regex = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;

    if(text == "")
    {
        document.getElementById("emailID").innerHTML = "No email was entered";
        console.log("No email was entered");
        return false;
    }

    if(!(text.match(regex)))
    {
        document.getElementById("emailID").innerHTML = "invalid email was entered";
        console.log("Invalid input for email");
        return false;
    }
    document.getElementById("emailID").innerHTML = "";
    return true;
}

function CheckDate()
{
     var text = document.getElementById("dateofbirth").value;

    var regex = /^(\d{1,2}\/\d{1,2}\/\d{4})/;

    if(text == "")
    {
        document.getElementById("dateID").innerHTML = "No date of birth was entered";
        console.log("No date was entered");
        return false;
    }
    if(!(text.match(regex)))
    {
        document.getElementById("dateID").innerHTML = "invalid date of birth entered";
        console.log("Invalid input for date of birth");
        return false;
    }
     document.getElementById("dateID").innerHTML = "";
    return true;
}

function CheckAddress()
{
    var text = document.getElementById("address").value;
    var regex = /^([A-Za-z0-9 ]+$)/;

    if(text == "")
    {
        document.getElementById("addressID").innerHTML = "No address was entered";
        console.log("No address was entered");
        return false;
    }

    if(!(text.match(regex)))
    {
        document.getElementById("addressID").innerHTML = "invalid address was entered";
        console.log("Invalid input for address");
        return false;
    }

    document.getElementById("addressID").innerHTML = "";
    return true;
}

function CheckPostCode()
{
    var text = document.getElementById("postcode").value;

   var regex = /^([A-Za-z0-9]+$)/;
    if(text == "")
    {
        document.getElementById("postcodeID").innerHTML = "No postcode was entered";
        console.log("No postcode was entered");
        return false;
    }
    if(text.length > 10)
    {
        document.getElementById("postcodeID").innerHTML = "postcode was to long";
        console.log("postcode was to long");
        return false;
    }
    if(!(text.match(regex)))
    {
        document.getElementById("postcodeID").innerHTML = "invalid postcode entered";
        console.log("This postcode contains special characters");
        return false;
    }

     document.getElementById("postcodeID").innerHTML = "";
    return true;

}


function storeData()
{
    localStorage.setItem("name","Name: " +document.getElementById("name").value);
    localStorage.setItem("date","Date of Birth: " +document.getElementById("dateofbirth").value);
    localStorage.setItem("address","Address: " +document.getElementById("address").value);
    localStorage.setItem("postcode","Postcode: " +document.getElementById("postcode").value);
    localStorage.setItem("email","Email: " +document.getElementById("email").value);
}


function getData()
{
    CreatePara(localStorage.getItem("name"));
    CreatePara(localStorage.getItem("date"));
    CreatePara(localStorage.getItem("address"));
    CreatePara(localStorage.getItem("postcode"));
    CreatePara(localStorage.getItem("email"));
}

function CreatePara(text)
{
    var para = document.createElement("P");
    var text = document.createTextNode(text);
    para.appendChild(text);
    document.body.appendChild(para);
}