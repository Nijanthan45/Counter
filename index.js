        const counter = document.querySelector(".counter")
        const increment = document.querySelector(".increment")
        const decrement = document.querySelector(".decrement")
        const reset = document.querySelector(".reset")
        let count = 0;
        increment.addEventListener("click",()=>{
            count = count+1;
            counter.innerHTML= count;
        }
        );
        decrement.addEventListener("click",()=>{
            count = count-1;
            counter.innerHTML= count;
        }
        );
        reset.addEventListener("click",()=>{
            count = 0;
            counter.innerHTML = count;
        })

