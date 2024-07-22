//Add click event listener for button to fetch the data
document.getElementById('callback').addEventListener('click',function handleClick(){
//Remove event listener for more clicks
    document.getElementById('callback').removeEventListener('click', handleClick);
//Update the text in the div element to display “Callback executed after 5 seconds"
    document.getElementById("display").innerText = "Callback will be execute after 5 seconds"; 
//After callback executed display the Fetched data
function display(){
    document.getElementById("display").innerText = "Callback executed after 5 seconds";
    fetchData();
}

callBackDelay(display);

});

//callback function to simulate a delay of 5 seconds when the button is clicked  
function callBackDelay(callback){
    setTimeout(() => {
        callback();
    },5000);
}

//Function for fetchData
function fetchData(){
// Fetch Data from the specified API 
    fetch('https://dummyjson.com/posts')
//Convert the response to json format
    .then(response => response.json())
    .then(data =>{
        const posts = data.posts;
//Display the fetched data in the div element after the callback is executed.
        const fetchdata = document.getElementById("display");
        fetchdata.innerHTML += "<h1><u>Fetched Data</u></h1>";
//Iterating each post by using forEach method         
    posts.forEach(post => { 
//Display Title of the post in the div element  
        fetchdata.innerHTML += `<p style="color:#F4BE05">${post.title}</p>` ;

    });
    })
// If any error occurs during the fetch request or processing of the data, catch the error and display it in a div element.
    .catch(error => {
        document.getElementById('display').innerHTML = "Failed to fetch data...";
        console.log('Error:', error);
    });
}