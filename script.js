//edit Password
function editPassword(index){ 
    let passwordData=JSON.parse(localStorage.getItem("passwordDetails"));
    let table=document.querySelector("table");
    table.innerHTML=`<tr>
        <th>Website</th>
        <th>Username</th>
        <th>Password</th>
        <th>Action</th>
        </tr>`;
    let html="";
    let editable="";
    for(let i=0;i<passwordData.length;i++){
        if(i==index)editable="contenteditable";
        else editable="";
        row=passwordData[i];
        html+=`
            <tr>
                <td id="${i+"0"}" ${editable}>${row.website}</td>
                <td id="${i+"1"}" ${editable}>${row.username}</td>
                <td id="${i+"2"}" ${editable}>${hidePassword(row.password)}</td>
                <td><button onClick="deletePasswordData(${i})">Delete</button>
                <button onclick="editPassword(${i})">Edit</button>
                <button onclick="updatePassword(${i})">Update</button></td>
            </tr>
            `
            const websiteData = document.getElementById(index+"0").innerText
            const usernameData = document.getElementById(index+"1").innerText
            const passwordData = document.getElementById(index+"2").innerText
        html+=`<tr>
        <td>${websiteData}</td>
        <td>${usernameData}</td>
        <td>${hidePassword(passwordData)}</td>
        <td><button onClick="deletePasswordData(${i})">Delete</button>
        <button onclick="editPassword(${i})">Edit</button>
        <button onclick="updatePassword(${i})">Update</button></td>
    </tr>
    `
    }
    table.innerHTML+=html;
}

//update Password
// function updatePassword(index){
//     console.log(index);

//     const websiteData = document.getElementById(index+"0").innerText
//     const usernameData = document.getElementById(index+"1").innerText
//     const passwordData = document.getElementById(index+"2").innerText

//     console.log(websiteData, usernameData, passwordData);
//     let table=document.querySelector("table");
//     let passwordDetails=JSON.parse(localStorage.getItem( "passwordDetails"));
//     let html="";
//     for(let i=0;i<passwordDetails.length;i++){
//         if(i==index){
//             html+=`
            // <tr>
            //     <td>${websiteData}</td>
            //     <td>${usernameData}</td>
            //     <td>${hidePassword(passwordData)}</td>
            //     <td><button onClick="deletePasswordData(${i})">Delete</button>
            //     <button onclick="editPassword(${i})">Edit</button>
            //     <button onclick="updatePassword(${i})">Update</button></td>
            // </tr>
//          `
//         }
//     }
//     populateSavedPasswordDetails();
// }

//hide password
function hidePassword(password){
    let hiddenPass="";
    for(let i=0;i<password.length;i++){
        hiddenPass+= "*";
    }
    return hiddenPass;
}

//delete row
const deletePasswordData=(index)=>{
    let passwordDetails=localStorage.getItem("passwordDetails");
    let passwordData=JSON.parse(passwordDetails);
    passwordData.splice(index,1);
    localStorage.setItem("passwordDetails",JSON.stringify(passwordData));
    populateSavedPasswordDetails();
    // alert("Password Deleted Successfully");
    // populateSavedPasswordDetails();
}

//how to show it in table
const populateSavedPasswordDetails=()=>{
    let table=document.querySelector("table");
    let passwordDetails=localStorage.getItem("passwordDetails")
    if(passwordDetails===null){
        table.innerHTML="No data available!";
    }
    else{
        table.innerHTML=` <tr>
        <th>Website</th> 
        <th>Username</th>
        <th>Password</th>
        <th>Action</th>
     </tr>`
     let passwordData=JSON.parse(passwordDetails);
     let html="";
     for(let i=0;i<passwordData.length;i++){
        row=passwordData[i];
        html+=`
        <tr>
            <td>${row.website}</td>
            <td>${row.username}</td>
            <td>${hidePassword(row.password)}</td>
            <td><button onClick="deletePasswordData(${i})">Delete</button>
            <button onclick="editPassword(${i})">Edit</button>
            <button onclick="updatePassword(${i})">Update</button></td>
        </tr>
     `
    } 
    table.innerHTML=table.innerHTML+html;
 }
}

populateSavedPasswordDetails();


//Local Storage
document.querySelector(".sav-btn").addEventListener("click", (event)=>{
    event.preventDefault();
    let passwordDetails=localStorage.getItem("passwordDetails");
    let passwordJSON;
    if(passwordDetails==null){
        passwordJSON= [];
    }
    else{
        passwordJSON=JSON.parse(passwordDetails);
    }
    passwordJSON.push({
        website:website.value,
        username:username.value,
        password:password.value
    });
    if(website.value=="" || username.value=="" || password.value==""){
        alert("Fill the form first");
    }
    else{
        localStorage.setItem("passwordDetails", JSON.stringify(passwordJSON));
        // alert("Password Details Saved");
        website.value="";
        username.value="";
        password.value="";
        populateSavedPasswordDetails();
   }
});
 function deleteC(event){
    event.preventDefault()
    localStorage.clear();
    populateSavedPasswordDetails();
 }
// populateSavedPasswordDetails();