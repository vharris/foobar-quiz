/* Javascript Challenge
Create a function that prints to console the numbers 1 to 100.
Replace multiples of 6 with the text "foo" and replace multples of 7 with "bar"
Replace multiples of 6 AND 7 with "foobar"

Hint: The Modulus operator % might come in handy.
Bonus: Print the total number of foos, bars, and foobars
Challenge: Create a function using D3 that prints for any range of numbers using input from foobar.html
*/


document.getElementById("range").addEventListener("click", function (){
    // initialize range of multiples and word count
    var min = d3.select("#nummin").property("value");
    var max = d3.select("#nummax").property("value");
    var foos = 0, bars = 0, foobars = 0;
    
    // loop through input for multiples and log foobars
    for (var i = min; i <= max; i++) { 
        // your code here
    }
    // log results
});