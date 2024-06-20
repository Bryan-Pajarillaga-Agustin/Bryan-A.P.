// variables
let InputTag = document.getElementById("NumContent")
let input;  
let PiNumber = Math.PI
let int = setInterval(() => {
    input = InputTag.value
    InputTag.value = input
}, 1);
function ButtKeysNum(key){
        InputTag.value += key
} 
function ButtKeysOthers(key){
    if(key == 1){
        InputTag.value = input.slice(0, -1)
    } else if(key == 2){
        InputTag.value = input = '';
    } else if(key == 3){
        InputTag.value = input += PiNumber.toFixed(5);
    }
}

function result(){
    if(!InputTag.value == 0){
        input = eval(InputTag.value);
        InputTag.value = input
        console.log(input);
    }
}

