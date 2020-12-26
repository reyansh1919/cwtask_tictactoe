let turnno = 1;
const clicker = (temp) => {
    console.log(temp);
    if(turnno%2 == 0){ 
    document.getElementById(temp).innerHTML = "X";
}
    else{
    document.getElementById(temp).innerHTML = "O";
    }
document.getElementById(temp).disabled = true;
    turnno++;
}


