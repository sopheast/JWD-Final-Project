let addBtn=document.querySelector("#addBtn");
//  the onclick function

addBtn.onclick =function(){
    let taskName=document.querySelector("#taskName");
    let nmErrMsg=document.querySelector("#nmErrMsg");
    let taskdescription = document.querySelector("#exampleFormControlTextarea1");
    let descMessg=document.querySelector("#descMessg");
    let tskassign=document.querySelector("#assign");
    let assignMessg=document.querySelector("#assignMessg");
    


        
    if (taskName.value =="" || taskName.value.length <= 8)
    {
        alert("Fill at least 8 characters. ");
      nmErrMsg.innerHTML="This field cannot be blank.Enter at least 8 charaters.";
      nmErrMsg.style.color='red';
      taskName.style.borderColor='red';
    
    }
    else{
        nmErrMsg.innerHTML="Looks good"
        nmErrMsg.style.color='green';
        taskName.style.borderColor='green';
       
    }
    
       
    
    if (taskdescription.value ==""  || taskdescription.value.length <=15)
    { 
    
        descMessg.innerHTML="This field needs at least 15 characters";
        descMessg.style.color='red';
        taskdescription.style.borderColor='red';
        
    } 
    else{
    
        descMessg.innerHTML="Looks good"
        descMessg.style.color='green';
        taskdescription.style.borderColor='green';
      
    }
    
    if(tskassign.value==""   || tskassign.value.length <=8)
    {
     
    assignMessg.innerHTML="This cannot go blank.Needs at least 8 characters";
    assignMessg.style.color='red';
    tskassign.style.borderColor='red';

    }
   
     else{

        assignMessg.innerHTML="Looks good";
        assignMessg.style.color="green";
        tskassign.style.borderColor="green";
     }

        
}

   
