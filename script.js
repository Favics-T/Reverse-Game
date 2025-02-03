/*
Create a Reverse Game. Ask any question with 2 possible answers.
 If the user selects the first option, then show the second option in an alert, and vice versa.

For example: "Do you drink coffee or tea?" If the user says 
"coffee," then show "Tea" in an alert, and if the user says "tea," 
then show "coffee."

*/

let submit = document.getElementById('submit');

submit.onclick=()=>{
    let output = document.getElementById('output');
let coffee = document.getElementById('coffee');
let tea = document.getElementById('tea');

if(coffee.checked){
    output.textContent= 'YOU DRINK TEA'

}
else if(tea.checked){
    output.textContent = 'YOU DRINK COFFEE'
  
}
else{
    output.textContent = 'Pick an Option'
}
submit.textContent= 'restart'
submit.onclick=()=>location.reload();
}
