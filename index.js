let colorDisplayArray = document.getElementsByClassName("color-container")

document.getElementById("btn").addEventListener("click",function(){
    const hex = (document.getElementById("color-picker").value).slice(1)
    const mode = document.getElementById("dropdown-options").value
    fetchColor(hex,mode)
})

function fetchColor(hex,mode)
{
        fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            for(let i=0; i<colorDisplayArray.length; i++)
            {
                colorDisplayArray[i].innerHTML = `
                <button id="color${i+1}" class="copy"><i class="fa fa-copy"></i></button>
                <div style="background:${data.colors[i].hex.value};" class="color"></div>
                <h4 id = "color-code${i+1}" class="color-code">${data.colors[i].hex.value}</h4> `;
            }
        document.getElementById("color1").addEventListener("click",function(){
                copy("color-code1",0)
         })
         document.getElementById("color2").addEventListener("click",function(){
                     copy("color-code2",1) 
         })
         document.getElementById("color3").addEventListener("click",function(){
                      copy("color-code3",2)
         })
         document.getElementById("color4").addEventListener("click",function(){
                      copy("color-code4",3)
         })
         document.getElementById("color5").addEventListener("click",function(){
                      copy("color-code5",4)
         })

         function copy(colorCode,index)
         {
            let code = document.getElementById(colorCode).textContent
            navigator.clipboard.writeText(code);
            const check = document.querySelectorAll(".color-container")
            check[index].classList.add("active")
            setTimeout(function(){
                    check[index].classList.remove("active")
            },1000)
         }
        })
}

