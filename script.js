function selectLocation(event) {


                if(event.target.value.length > 0){

                let localTime = moment().tz(event.target.value).format("dddd, MMMM D, YYYY h:mm A");
                let TimeDisplay = `It is ${localTime} in ${event.target.value}`;
                
               document.getElementById("City").innerHTML = TimeDisplay;
                
          }}
 
          function currentLocation(event){

                    if(event.target.value = "current"){
                    let currentTime = moment.tz.guess.format("dddd, MMMM D, YYYY h:mm A");
               }
          }

     let selectionElement = document.querySelector("#selecttime");
     selectionElement.addEventListener("change", selectLocation); 
