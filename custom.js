document.addEventListener("DOMContentLoaded", function() {
    // page loads
    document.getElementById("display").focus();

    // clear the input field
    document.getElementById("clear").addEventListener("click", function() {
        document.getElementById("display").value = "";
    });

    //number buttons
    const numberButtons = document.querySelectorAll('.btn[value="0"], .btn[value="00"], .btn[value="1"], .btn[value="2"], .btn[value="3"], .btn[value="4"], .btn[value="5"], .btn[value="6"], .btn[value="7"], .btn[value="8"], .btn[value="9"]');
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById("display").value += this.value;
        });
    });

    // backspace button
    document.getElementById("backspace").addEventListener("click", function() {
        const currentValue = document.getElementById("display").value;
        document.getElementById("display").value = currentValue.slice(0, -1);
    });

    //percentage button
    document.getElementById("percentage").addEventListener("click", function() {
        document.getElementById("display").value += "%";
    });

    //divide button
    document.getElementById("divide").addEventListener("click", function() {
        document.getElementById("display").value += "/";
    });

    //multiply button
    document.getElementById("multiply").addEventListener("click", function() {
        document.getElementById("display").value += "*";
    });

    //subtract button
    document.getElementById("subtract").addEventListener("click", function() {
        document.getElementById("display").value += "-";
    });

    //add button
    document.getElementById("add").addEventListener("click", function() {
        document.getElementById("display").value += "+";
    });

    // equals button
    document.querySelector('.btn[value="="]').addEventListener("click", function() {
        try {
            const result = eval(document.getElementById("display").value);
            document.getElementById("display").value = result;
        } catch (error) {
            console.error("Error:", error);
            alert("Invalid expression!");
        }
    });

    document.querySelector('.btn[value="."]').addEventListener("click", function() {
        document.getElementById("display").value += ".";
    });
});
