function calculateTotal() {
    let total = $("#qty").val() * $("#po-price").val();
    $("#total_value").text(total);
}
$(function() {
        $(".qty").on("change keyup", calculateTotal)
    })
    // $(function() {
    //     $(".po-price").on("change keyup", calculateTotal)
    // })

// I need to take the module on JS to understand why this isn 't working.

console.log(total);