var HTMLString = "";
for(var i=0; i<8; i++){
    HTMLString += '<img src="tree.png" alt="me_picture">';
}
HTMLString += '<button>Restore</button>';

$(document).ready(function(){
    $(".container").append(HTMLString)
    $('img').click(function(){
        $(this).hide();
    })
    $('button').click(function(){
        $('img').show();
    })
})


