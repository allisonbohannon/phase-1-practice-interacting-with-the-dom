//Set the timer to increment every second once the page has loaded 

document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter'); 
    let i = 0; 
    let updater = setInterval(() => {
        counter.textContent = i; 
        //console.log(i)
        i ++
    }, 1000); 

    //Manually decrement the counter 
    const minus = document.getElementById('minus'); 
    minus.addEventListener('click', () => i -- ); 

    //Manually increment the counter 
    const plus = document.getElementById('plus'); 
    plus.addEventListener('click', () => i ++ ); 
    
    //Like an individual number on the counter
    const heart = document.getElementById('heart'); 
    const likedArray = []; //create array of likes
    heart.addEventListener('click', () => {
        //Check if number exists in array
        if(!likedArray.some(element => element.num === i)) {
            const newArrEntry =  {
                num: i, 
                likes: 1
            }; 
            likedArray.push(newArrEntry);
        } else { 
            const index = likedArray.findIndex(element => element.num === i); 
            likedArray[index].likes +=1
        }
        console.log(likedArray); 

        //Clear old likes
        document.querySelector('.likes').innerHTML = ''; 
        //Render like count content
        for (element of likedArray) {
            const heartCount = document.createElement('li'); 
            heartCount.textContent = `${element.num} has been liked ${element.likes} times`
            document.querySelector('.likes').appendChild(heartCount)
         }
    })

    //Pause + resume the counter
    const pause = document.getElementById('pause')
    let paused = false;
    pause.addEventListener('click', (e) => { 
        console.log(e.target.textContent)
        if (!paused) {
            paused = true; 
            const pauseCount = clearInterval(updater); 
            pause.textContent= 'resume'; 
        } else if (paused) {
            paused = false; 
            updater = setInterval(() => {
                counter.textContent = i; 
                console.log(i)
                i ++
            }, 1000); 
            pause.textContent = 'pause'
        }
    })

    //Leave a comment
    const comment = document.getElementById('comment-form'); 
    comment.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const content = document.getElementById('comment-input'); 
        const newComment = document.createElement('p'); 
        newComment.textContent = content.value; 
        document.getElementById('list').appendChild(newComment); 
        content.value = ''
    })

})

