var myhour=document.getElementById("myhour");//
var mymin =document.getElementById("mymin");
var mysec =document.getElementById("mysec");
var hour=document.getElementById("hour");//input
var min =document.getElementById("min");//input
var sec =document.getElementById("sec");//input
var set=document.getElementById("set");
var d=document.getElementById("d");
var d2=document.getElementById("d2");
var clear;
var T=true;
function Sec(){
              if(sec.value ==59)
            {
                sec.value=0;
                mysec.innerHTML="<b>0"+sec.value+"</b>";
                Min();
            }
            else{
               
                sec.value ++;
                if(sec.value<10){ 
                    mysec.innerHTML="<b>0"+sec.value+"</b>";}
                else{
                    mysec.innerHTML="<b>"+sec.value+"</b>"; 
                }
                     
                }  
            }
function Min(){
    if(min.value ==59)
    {
        console.log("min=59");
        min.value=00;
        mymin.innerHTML="<b>0"+min.value +" :</b>";
        Hour();
    }
    else{
        min.value++;
        if(min.value<10){
            mymin.innerHTML="<b>0"+min.value +" :</b>";
        }
        else{
        mymin.innerHTML="<b> "+min.value +":</b>"; 
    }  
        
    }
}    

function Hour(){
    hour.value ++;
   
    if(hour.value<24){
        if(hour.value<10){
            myhour.innerHTML="<b>0"+hour.value +" :</b>";
        }
        else{
            myhour.innerHTML="<b>"+hour.value+" :</b>"; 
        }  
    }
    else{
        hour.value =0;
        myhour.innerHTML="<b>0"+hour.value +" :</b>";
        if(d.value=="AM"){d.value="PM";}
        else{d.value="AM";}
        d2.innerHTML="<b>"+d.value+" </b> ";
    }
    
}
set.addEventListener("click", ()=>{
    clearInterval(clear);
    myhour.innerHTML="<b>"+hour.value+" : </b>";
    mymin.innerHTML="<b>"+min.value+" : </b>";
    mysec.innerHTML="<b>"+sec.value+" </b> ";
    d2.innerHTML="<b>"+d.value+" </b> ";
    clear= setInterval(Sec,500);
   
});
