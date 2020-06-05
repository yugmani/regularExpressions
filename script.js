let tomatch = /our/;
let html = "<ul id='list'>";

let text1 = ["pour", "cool", "Our", "your", "oUR", "sour", "souR", "pour", "OUR"];

for (let i=0; i<text1.length; i++){
    let isMatch = tomatch.test(text1[i]);
    if(isMatch){
        html += `<li>${tomatch} matches to <strong>${text1[i]}</strong>.</li><br>`
    }
    else {
        html += `<li>${tomatch} does not match to <em>${text1[i]}</em>.</li><br>`
    }
    
}
html += "</ul>"
let match1El = document.getElementById("match1");
match1El.innerHTML = html;