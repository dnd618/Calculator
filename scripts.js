//Variables for functionality
var Overall="", First="clear,num-9,num-8,num-7,num-6,num-5,num-4,num-3,num-2,num-1"; Second="", Opp="";
//Functions
function Clear(
    {
        First = "";
        Second = "";
        Opp = "";
        Overall = "";
        document.getElementById('readout').innerHTML = '0';
    }
);
//Clears function on page load
function Init()
{
        Clear();
}
//
function MyClick($key)
    { var Display="";
if(Opp == ""){
    First = First + $key;
    document.getElementById('screen').innerHTML = First;
    }else{
    Second = Second + $key;
    Display = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = First + '' + Opp + '' + Second;    
    }
}
//Opp function
function Operator($sign)
{   var Display="";
    Opp = $sign;
//Check for first and second factor values (i.e."there is already been a function")
if(First != "" && Second != "") DoSum();
    Display = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = Display + ' ' + Opp + ' ';
}
//Illustrating sum function
function DoSum()
{
    var string;
    result=0;
if(First != "" && Second != "" && Opp != "")
    {
        string = First + ' ' + Opp + ' ' + Second;
        Overall = eval(string);
        document.getElementById('screen').innerHTML = Overall;
        //Clear the First, Second & Opp variables for further use
        First = Overall;
        Second = " ";
        Opp = " ";
    }
}
//This final function completes the code. It checks to see if there are 3 values inside the variables. If so, it calculates the answer. It takes the new variable 'string' and adds to that string all 3 values from the global variables (First,Opp and Second) so we end up with one string.

// http://mrbool.com/how-to-make-a-calculator-in-javascript/26562
// Read more: http://mrbool.com/how-to-make-a-calculator-in-javascript/26562#ixzz4lQi5iCMm