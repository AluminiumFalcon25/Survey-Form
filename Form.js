function calculateTotal() {
    let qty = parseFloat(document.getElementById('qty').value); // I'm assuming this isn't #qty because it is searching for the specific ID //
    let poPrice = parseFloat(document.getElementById('po-price').value);
    document.getElementById('total_value').value = qty * poPrice;
}
// I need to work on trouble shooting, I was not able to understand that it wouldn't work due to the "calculate" button being a div instead of a button and also that the getElementById needed to be a string 'qty' vs. #qty. This makes sense because it is already looking for an ID instead of CSS needing to be told to look for #ID//