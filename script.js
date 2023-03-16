          function selectLocation(event) {

                if(event.target.value.length > 0){

                let localTime = moment().tz(event.target.value).format("dddd, MMMM D, YYYY h:mm A");
                let TimeDisplay = `It is ${localTime} in ${event.target.value}`;
                
               document.getElementById("City").innerHTML = TimeDisplay;
                
          }}
 
          
     let selectionElement = document.querySelector("#selecttime");
     selectionElement.addEventListener("change", selectLocation); 

