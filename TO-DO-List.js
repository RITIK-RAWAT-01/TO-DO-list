let inputbox = document.getElementById("input-box"); 
        let listcontain = document.getElementById("list-contain")

        function addtast(){
            if(inputbox.value === ''){
                alert("please fill this box")
            }
            else{
                let li = document.createElement("li")
                li.innerHTML = inputbox.value
                listcontain.appendChild(li);
                let span = document.createElement("span")
                span.innerHTML = "\u00d7"
                li.appendChild(span);
            }
            inputbox.value = ""
            savedata();
        }
        listcontain.addEventListener("click" , (e)=>{
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked")
                savedata();
            }
            else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                savedata();
            }
        },false)

        function savedata(){
            localStorage.setItem("data", listcontain.innerHTML)
        }
        function getdata(){
            listcontain.innerHTML = localStorage.getItem("data")
        }
        getdata();