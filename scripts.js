//Numbers to readout
num = $('.num'),
readout = $('#readout'),
zeroText = '0';
newNum = true;

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