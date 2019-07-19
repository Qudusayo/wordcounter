// Reacting To Click
document.querySelector('#count').addEventListener('click', function () { 

    // Collecting Input Value
    sentence = document.querySelector('#sentence').value;

    // Converting input to array
    arr = sentence.split(' ')

    if(arr[arr.length-1] === ""){
        // Alerting the number of array elements
    alert(`Your sentence contains  ${arr.length-1} words!!!`)
    }
    else{
        // Alerting the number of array elements
        alert(`Your sentence contains  ${arr.length} words!!!`)
    }
 })