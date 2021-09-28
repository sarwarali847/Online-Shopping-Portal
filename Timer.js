let headnode=document.getElementById("block-2");
setTimeout(()=>headnode.innerHTML="Thankyou For Visiting!", 1000);

let colorarray=['blue'];
let counter=0;

setInterval(() =>test(), 1000);

function test(){
    console.log("hi");
    headnode.style.color=colorarray[counter];
    counter++;
    if(counter==colorarray.length)
    {
    counter=0;
    //test();
    }
}

