const WHITE_KEYS=["a","s","d","f","g","v","b","h","j","k","l"]
const BLACK_KEYS=["w","e","r","t","z","u","i"]

const keys=document.querySelectorAll(".key")
const whiteKeys=document.querySelectorAll(".key.white")
const blackKeys=document.querySelectorAll(".key.black")

keys.forEach((key)=>{
    key.addEventListener("click",()=>playNote(key))
})

document.addEventListener("keydown",(e)=>{
    const key=e.key
    const whiteKeyIndex=WHITE_KEYS.indexOf(key)
    const blackKeyIndex=BLACK_KEYS.indexOf(key)

    if(whiteKeyIndex>-1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex>-1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key){
    const noteAudio=document.getElementById(key.dataset.note)
    noteAudio.currentTime=0
    noteAudio.play()
    key.ClassList.add("active")
    noteAudio.addEventListener("ended",()=>{
        key.ClassList.remove("active")
    })
}