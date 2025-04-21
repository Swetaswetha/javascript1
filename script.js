var container = document.getElementById("container")
var names = document.getElementById("name")
var age = document.getElementById("age")
var male = document.getElementById("male")
var female = document.getElementById("female")
var course = document.getElementById("course")
var mail = document.getElementById("mail")
var btnsave = document.getElementById("save")
var result = document.getElementById("result")


btnsave.addEventListener("click", function (event) {
    event.preventDefault();

    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.textContent = names.value
   
    tr.append(td1)


    var td2 = document.createElement("td")
    td2.textContent = age.value
    
    tr.append(td2)

    var td3 = document.createElement("td")
    td3.textContent = course.value
    tr.append(td3)

    var td4 = document.createElement("td")
    td4.textContent = male.checked ? "Male" : (female.checked ? "female" : "");
    tr.append(td4)

    var td5 = document.createElement("td")
    td5.textContent = mail.value
    tr.append(td5)


    var td6 = document.createElement("td")
    var btndel = document.createElement("button")
    btndel.textContent = "Delete"
    btndel.style.color = "black"
    btndel.style.backgroundColor = "red"
    btndel.style.width = "100%"
    btndel.style.border = "none"
    td6.append(btndel)
    tr.append(td6)
    btndel.addEventListener("click", function () {
        tr.remove();
    });

    result.append(tr)
})