let container=document.querySelector(".container")
let arr=[34,50,20,25,80,65,55,70,10,50,25,33,80,72,17,20,25,80,65,55,70,10,50,25,33]
let isShown=0
let now=0
function show(){
    container.style.display="flex"
    if(isShown===0){
        showline()
        isShown=1
    }
    else{
        delline()
        showline()
    }
}
function showline(){
    for(let i=0;i<arr.length;i++){
        var element=document.createElement("div")
        element.className="line"
        element.style.height=`${arr[i]}px`
        container.appendChild(element)
    }
}
function delline(){
    for(let i=0;i<arr.length;i++){
        let delitem=document.querySelector(".line")
        container.removeChild(delitem)
    }
}
function step(){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[now]<=arr[j]){
                let temp=arr[now]
                arr[now]=arr[j]
                arr[j]=temp
            }
        }
    }
    delline()
    showline()
    now++
}
function anim(){
    var interv=setInterval(step,500);
    setTimeout(()=>{
        clearInterval(interv)
    },(arr.length+1)*500)
}