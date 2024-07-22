//Add click event listener for button to fetch the data
document.getElementById("promiseid").addEventListener('click', function handleClick() {
//Remove event listener for more clicks
    document.getElementById("promiseid").removeEventListener('click', handleClick);
//Display "Loading..." in the div element while the Promise is pending
    const displayResult = document.getElementById("display");
    displayResult.innerHTML = "Loading....";

//Promise to fetch data from the JSONPlaceholder API
    const fetchData = new Promise(function(resolve, reject) {
//Promise takes longer than 5 seconds to resolve, reject it with a message like "Operation timed out."
        const timeOut = setTimeout(() => {
            reject("Operation timed out...");
        }, 5000);

//fetch data from the JSONPlaceholder API
        fetch("https://dummyjson.com/posts")
//Convert the response to json format
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeOut); // Clear the timeout if fetch is successful
                resolve(data);
            })
            .catch(error => {
                reject('Error fetching the data...'); // Reject the promise with an error message
            });
    });


//Display the data in the div element.
    fetchData.then(data => {
        const posts = data.posts;
        displayResult.innerHTML = "<h1><u>Fetched Data</u></h1>";
        posts.forEach(post => {
            displayResult.innerHTML += `<h2 style="color:#F4BE05">${post.title}</h2>`;
            displayResult.innerHTML += `<p>${post.body}</p>`;
        });
//Display the error message in the div if the Promise is rejected.
    }).catch(error => {
        displayResult.innerText = error;
        console.log(error);
    });
});

