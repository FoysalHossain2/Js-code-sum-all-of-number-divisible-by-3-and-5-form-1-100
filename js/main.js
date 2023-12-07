//writ a program that will print sum all of number  divisible by 3 and 5 form 1-100
let x = 1;

sum = 0;

while (x <= 100) {
    if (x % 3==0 && x % 5==0) {

        document.write( " + " + x );
        sum = sum + x;
    }

    x = x + 1;
}
document.write( " = " + sum );
document.write(" <h3>end</h3> ");



// even number divisible by 3 and 5 form 1-100

let i = 1;

sum = 0;

while (i <= 100) {
    if (i%3 ==0  &&  i%5 ==0) {

        document.write( " + " + x );
        sum = sum + x;
    }

    i = i + 1;
}
document.write( " = " + sum );
document.write(" <h3>end</h3> ");