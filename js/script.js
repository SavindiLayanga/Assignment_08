let length = 5;
let letter_arr = ['A','B','C','D','E','F'];

let queue = ()=> {
    let tempArr = [];

    letter_arr.forEach((result, index)=>{
        $('.letter').eq(index).text(result);

        if(index == 5){
            tempArr[0] = result;
        }else{
            tempArr[++index] = result;
        }
    });
    letter_arr = tempArr;
}

let intervalID;
$('.start-btn').on('click',()=>{
    if(intervalID == null){
        intervalID = setInterval(queue, 1000);
    }
});

$('.end-btn').on('click',()=>{
    clearInterval(intervalID);
    intervalID = null ;
});