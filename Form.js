function calculateTotal() {
    let qty = document.getElementById('qty').value; // I'm assuming this isn't #qty because it is searching for the ID's due to the formula //
    let poPrice = document.getElementById('po-price').value;
    document.getElementById('total_value').value = qty * poPrice;
}
// I need to work on trouble shooting, I was not able to understand that it wouldn't work due to the "calculate" button being a div instead of a button and also that the getElementById needed to be a string 'qty' vs. #qty. This makes sense because it is already looking for an ID instead of CSS needing to be told to look for #ID. I got the basic idea for how to do this from "https://1bestcsharp.blogspot.com/2017/01/javascript-addition-subtraction-multiplication-division.html" I had not covered JS by the drafting of this project.//