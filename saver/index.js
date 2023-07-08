
// function save(){
//     console.log("saved")
// }
let myitems=[]
const savebtn=document.getElementById("btn")
const deletebtn=document.getElementById("delbtn")
const tabbtn=document.getElementById("tabbtn")
const inputEl=document.getElementById("input-el")
const unorderedList=document.getElementById("listitems")



let itemsfromlocalstorage=JSON.parse(localStorage.getItem("myitems"))
console.log(itemsfromlocalstorage)

if(itemsfromlocalstorage){
    myitems=itemsfromlocalstorage
    render(myitems)
}else{

}


savebtn.addEventListener("click",function(){

    myitems.push(inputEl.value)
    inputEl.value=""

    //storing the myitems on local storage
    localStorage.setItem("myitems",JSON.stringify(myitems))

    render(myitems)
    
    // console.log(localStorage.getItem("myitems"))
})


function render(items){
    let listItems=""
    for(let i=0;i<items.length;i++){
        // listItems+= "<li><a target='_blank' href='"+myitems[i]+"'>"+myitems[i]+"</a>" +"</li>"
        listItems+= `<li>
                        <a target='_blank' href='${items[i]}'f>${items[i]}</a>
                    </li>`
    }

unorderedList.innerHTML=listItems
}

deletebtn.addEventListener("dblclick",function(){
    
    localStorage.clear()
    // unorderedList.textContent=""
    myitems=[]
    render(myitems)
})


// const linkedin=[{
//     "url":"https://www.linkedin.com"
// }]

tabbtn.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myitems.push(tabs[0].url)
        localStorage.setItem("myitems",JSON.stringify(myitems))
        render(myitems)
    })


    
})
