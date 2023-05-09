// let form = document.getElementById("lobby__form")


// let displayName = sessionStorage.getItem("display_name")
// if(displayName){
//     form.name.value = displayName
// }

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()

//     sessionStorage.setItem("display_name", e.target.name.value)

//     let inviteCode = e.target.room.value

//     if(!inviteCode){
//         inviteCode = String(math.floor(Math.random() * 10000))
//     }
//     window.location = `room.html?room=${inviteCode}`
// })

$(document).ready(function(){

    let form = $("#lobby__form");

    let displayName = sessionStorage.getItem("display_name");

    if (displayName) {
    form.find('[name="name"]').val(displayName);
    }

    form.on("submit", function (e) {
    e.preventDefault();

    sessionStorage.setItem("display_name", $(this).find('[name="name"]').val());

    let inviteCode = $(this).find('[name="room"]').val();

    if (!inviteCode) {
        inviteCode = String(Math.floor(Math.random() * 10000));
    }

    window.location = `room.html?room=${inviteCode}`;
    });

})