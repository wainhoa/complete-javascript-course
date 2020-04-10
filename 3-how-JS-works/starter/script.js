///////////////////////////////////////
// Lecture: Hoisting

/* calculateAge(1965);

function calculateAge(year) {
    console.log(2020 - year);
}

var retirement = function(year) {
    console.log(65 - (2020 - year));
}


var age = 33;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);









///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


/* 

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a+d);
}




///////////////////////////////////////
// Lecture: The this keyword

*/


//console.log(this);

// calculateAge(1985);

/*
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
} 

*/

var ainhoa = {
    name: 'Ainhoa',
    yearOfBirth: 1987,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
   
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

ainhoa.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = ainhoa.calculateAge;
mike.calculateAge();