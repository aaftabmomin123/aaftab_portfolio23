let selectedrow=null;
let userName=document.getElementById("userName");
let email=document.getElementById("email");
let phno=document.getElementById("phno");
let city=document.getElementById("city");

// when user click on submit button
function enterData(){
    let studentData = fetchData();
    if (selectedrow == null) {
        addData(studentData);
    }
    else{
        updateData(studentData);
        }
    clearform()
}

// a function to fetch the data

function fetchData(){
    let studentData={};
    studentData.userName= userName.value;
    studentData.email=email.value;
    studentData.phno=phno.value;
    studentData.city=city.value;
    return studentData;
}

//function to add inside the table
function addData(data){
    let table =document.getElementById("studentlist").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(0);
    cell1 =newRow.insertCell(0);
    cell1.innerHTML =data.userName;
    cell2 =newRow.insertCell(1);
    cell2.innerHTML =data.email;
    cell3 =newRow.insertCell(2);
    cell3.innerHTML =data.phno;
    cell4 =newRow.insertCell(3);
    cell4.innerHTML =data.city;
    cell5 =newRow.insertCell(4);
    cell5.innerHTML =`<button onclick="editData(this)">EDIT</button>
    <button onclick="deleteData(this)">DELETE</button>`;
}

// function to clear form

function clearForm()
{
    userName.value="";
    email.value="";
    phno.value="";
    city.value="";
    selectedrow=null;
}
function deleteData(btn)
{
    if(confirm('are you sure to delete the data')){
        row=btn.parentElement.parentElement;
        document.getElementById("studentlist").deleteRow(row.rowIndex);
    }
}


//edit dunctionality
function editData(btn)
{
    selectedrow=btn.parentElement.parentElement;
    userName.value=selectedrow.cells[0].innerHTML;
    email.value=selectedrow.cells[1].innerHTML;
    phno.value=selectedrow.cells[2].innerHTML;
    city.value=selectedrow.cells[3].innerHTML;
}

//update function

function updateData(data)
{
    selectedrow.cells[0].innerHTML= data.userName;
    selectedrow.cells[1].innerHTML= data.email;
    selectedrow.cells[2].innerHTML= data.phno;
    selectedrow.cells[3].innerHTML= data.city;
}

