let input = document.querySelector("input")

function add(a){
    input.value = input.value + a
}

function clr(){
    input.value = ""
}

function del(){
    input.value = input.value.slice(0,input.value.length-1)

    // 895      = 895.slice(0,2)
}

function eva(){
    input.value = eval(input.value) 
}
