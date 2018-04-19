
const $tableElement = $('#pixel_canvas');
const $inputHeight = $('#input_height');
const $inputWidth = $('#input_width');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();
    $tableElement.html('');
    makeGrid(height, width);
    addCellClickListener();
});


function makeGrid(height, width) {
    for(let i=0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    }    

    for(let i=0; i < width; i++) {
        $('tr').append('<td></td>');
    }
}

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)

        $(window).resize(function(){
   $('#div2').width($("#parent").width()-$("#div1").width()); 
   $('#div1').height($("#parent").height()); 
});
    });  
}
