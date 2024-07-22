//Add click event listener for button to fetch the data
document.getElementById('awaitid').addEventListener('click',function handleClick(){
//Remove event listener for more clicks
    document.getElementById('awaitid').removeEventListener('click', handleClick);
//Display "Loading..." in the div element while the data is being fetched
const displayResult = document.getElementById("display");
displayResult.innerHTML = "Loading....";
//Invoke the function to fetch the data
fetchData();
//function to fetch the data using async keyword
async function fetchData(){
//Giving possible errors description using try block
    try{
        const response = await fetch("https://dummyjson.com/posts");
// Checking if the response is not okay
        if(!response.ok){
            throw new Error('Network issue Error...');   
        }
//Convert the data response as JSON 
        const data=await response.json();
// Displaying the fetched Data
        resultData(data);
    }
    catch(error) {
 // Displaying error message
        displayResult.innerText = `Error: ${error.message}`;
    }

    }
//Function to fetch the data
    function resultData(data){
        const posts = data.posts;
        displayResult.innerHTML = "<h1><u>Fetched Data</u></h1>";

// Looping each post in the data
    posts.forEach(post => {
        displayResult.innerHTML += `<h2 style="color:#F4BE05">${post.title}</h2>`;
        displayResult.innerHTML += `<p>${post.body}</p>`;
    });

    }

});