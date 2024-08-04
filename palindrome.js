function check(){
    let str01 = document.getElementById("txt").value;
    let word;

    let str = str01.toLowerCase(); //making sure the case of the text won't effect the test
    let len = str.length; //setting the string length to the length of the input
    console.log(str.charAt(0));

    let len01 = len-1; //making the input backwards thus allowing us the chek it

    for(let i=0;i<len;i++){ //this is an iteration going over each letter

        if(str.charAt(i) == str.charAt(len01)){ //checking to see if the first letter is also the last letter. Counting up and backwards at the same time
            word = true;
        }
        else{
            break;
        }

        len01--;
    }

    if(word == true){
        document.getElementById("result").value ="You did it!"; //placing the yes or no message in it's own box to display after submission
    }
    else{
        document.getElementById("result").value ="Not quite";
    }
}