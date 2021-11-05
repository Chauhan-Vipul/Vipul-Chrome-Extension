
let challenge = document.getElementById('challenge');

const xhr = new XMLHttpRequest();


xhr.open('GET', `https://kontests.net/api/v1/all`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);

        let coding = "";
        json.forEach(function (element, index) {
            console.log(element, index)
            let competitions = 
            
                                 `<div class="card">
                        
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                    <div class="card-body">  <a href="${element['url']}" target="_blank" >Solve Challenge</a> 
                 </button>
              


                                   <b>Coding Test ${index + 1}:</b> ${element["name"]}
                                   <b>URl :</b> ${element["url"]}
                                   <b>Start Time :</b> ${element["start_time"]}
                                   <b>End Time :</b> ${element["end_time"]}
                                   <b>Status :</b> ${element["status"]}


                                </div>`;

            coding += competitions;
        });
        challenge.innerHTML = coding;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


