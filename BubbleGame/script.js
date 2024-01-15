var bubbleVal = 0;
var hit = 0;
var timer = 4;
var score = 5;

function startUp() {
    setInterval(function countDown() {
        if (timer > 1) {
            timer--;
            document.querySelector("#timer").innerText = timer;
            document.getElementById("timer").style.color = "black";
        }
        else {
            document.querySelector("#bubbleArea").innerHTML = '<h1 id="gameOver"> Game Over </h1>';
            document.getElementById("timer").innerText = 0;
            document.getElementById("timer").style.color = "red";
        }
    }, 1000)

    function createBubbles() {
        document.querySelector("#bubbleArea").innerHTML = "";
        var n = Math.floor(Math.random()*130);
        for (var i = 0; i <= 130; i++) {
            bubbleVal = Math.floor(Math.random()*10);
            if (i === n) {
                hit = bubbleVal;
            }
            document.querySelector("#bubbleArea").innerHTML += `<div class="bubble">${bubbleVal}</div>`;
        }
    
        updateHitValue();
    }
    
    function updateHitValue() {
        document.querySelector("#hitVal").innerText = hit;
    }
    
    document.querySelector("#bubbleArea").addEventListener('click', (bubble) => {
        if (bubble.target.innerText == hit) {
            score += 10;
        }
        else {
            score -= 5;
        }
    
        document.querySelector("#score").innerText = score;
    
        timer = 5;
        createBubbles();
    })

    document.getElementById("startUp").style.display = none;
    createBubbles()
}





