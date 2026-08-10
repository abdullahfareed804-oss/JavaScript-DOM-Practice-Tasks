let popbtn = document.getElementById('popbtn')
let popupmodel = document.getElementById('popupmodel')
let closebtn = document.getElementById('closebtn')

popbtn.addEventListener('click',function(){
        popupmodel.style.display = "block"

})
 closebtn.addEventListener("click", function() {
            popupmodel.style.display = "none"
        });
