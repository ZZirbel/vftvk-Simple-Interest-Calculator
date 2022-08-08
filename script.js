// interest computation and results (displayed as text block)
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark>, <br> you will recieve an amount of <mark>" + interest + "</mark>,<br> in the year <mark>" + year + "</mark>."; 
}
// update rate amount text next to slider
function updateRate()
{
    document.getElementById("rateval").innerHTML = document.getElementById("rate").value;
}
// verify number inserted is positive
function validate()
{
    var principal = document.getElementById("principal").value;
    var positive = principal > 0;
    if(!positive)
    {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
    }
}
