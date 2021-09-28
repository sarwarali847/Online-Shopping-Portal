$(document).ready(function(){
    let btnnode=$("#btn");
    btnnode.click(function(){
        let imgnode=$("img");
        let label=btnnode.html();
        if(label=="ADD"){
                 imgnode.hide(2000, function(){
                 btnnode.html("SHOW");
           });
           }
       else{
           imgnode.show(2000, function(){
               btnnode.html("ADD");
       });
    }
});


$('#btn2').click(function(){
    $('img').toggle(2000);
});
});