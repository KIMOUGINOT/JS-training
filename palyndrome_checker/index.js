const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value;
    const bool = (value === reverseString(value));
    if (bool) 
        {alert("This is a palindrome !")}
    else 
        {alert("This is not a palindrome !")}
    input.value=""

}