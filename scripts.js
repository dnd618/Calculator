<<<<<<< HEAD
//Variables for functionality
var Overall="", 
    //holds answer to all calculations
    numberKeyed="clear,num-9,num-8,num-7,num-6,num-5,num-4,num-3,num-2,num-1"; 
    //number entered
    afterOpp="", 
    //set of numbers entered after opp key is pressed
    Opp="";
    //operator key for math functions
document.addEventListener("DOMContentLoader", function(event){
})   
//Functions
function Clear()
    {
        First = "";
        Second = "";
        Opp = "";
        Overall = "";
        document.getElementById('readout').innerHTML = '0';
    }
//Clears function on page load
function Init()
{
        Clear();
}
//Shows functioning of numbered keys
function MyClick(numberKeyed)
    { var Display="";
if(Opp == ""){
    First = First + numberKeyed;
    document.getElementById('readout').innerHTML = First;
    }else{
    Second = Second + numberKeyed;
    Display = document.getElementById('readout').innerHTML;
    document.getElementById('readout').innerHTML = First + '' + Opp + '' + Second;    
    }
}
console.log(MyClick);
//Opp function; Adds the operator sign to the 'opp' variable
function Operator($sign)
{   var Display="";
    Opp = $sign;
//Check for first and second factor values (i.e."there is already been a function")
if(First != "" && Second != "") DoSum();
    Display = document.getElementById('readout').innerHTML;
    document.getElementById('readout').innerHTML = Display + ' ' + Opp + ' ';
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
        document.getElementById('readout').innerHTML = Overall;
        //Clear the First, Second & Opp variables for further use
        First = Overall;
        Second = " ";
        Opp = " ";
    }
}
//This final function completes the code. It checks to see if there are 3 values inside the variables. If so, it calculates the answer. It takes the new variable 'string' and adds to that string all 3 values from the global variables (First,Opp and Second) so we end up with one string.
=======
//Numbers to readout
num = $('.num'),
readout = $('#readout'),
zeroText = '0';
newNum = true;
>>>>>>> 6f43dc65895c2a81a1dec83ce5d4c3584c4a52f0

$(document).ready(function(){
    $(readout).append(zeroText);
    // handleSpan();
    handleNum();
});
    function handleNum(){
        $(num).on('mousedown', function() {
            $(readout).empty();
            var numText = $(this).text();
            if(newNum){
                $('#readout').append(numText);
            } else {
            $(readout).empty();            
            }
        });   
    };
//Highlight keys