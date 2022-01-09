const root = document.getElementById("root");
function showContactDetails() {
    const nodes = root.getElementsByTagName('*');
    root.style.opacity = "0.5";
    for(let i = 0; i < nodes.length; i++){
        nodes[i].disabled = true;	
    }

    document.getElementById("contact_div").style.display = "flex";
}

function hideContactDetails() {
    const nodes = document.getElementById("root").getElementsByTagName('*');
    root.style.opacity = "1";
    for(let i = 0; i < nodes.length; i++){
        nodes[i].disabled = false;	
    }

    document.getElementById("contact_div").style.display = "none";
}

const button = document.getElementsByClassName("button_for_connection");
for (let i = 0; i < button.length; i ++) {
    button[i].addEventListener("click", showContactDetails);
}

const closeButton = document.getElementsByClassName("close_button")[0];
closeButton.addEventListener("click", hideContactDetails);