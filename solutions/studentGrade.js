//student grades function based on marks provided 
function studentGrade() {
    //deine marks 
    let marks = parseInt(prompt("Enter student marks (0-100):"));
    //code to ensure marks provided are within the limits (0-100)
    if(isNaN(makrs) || marks < 0 || marks > 100 ){
        console.log("please enter a value between 0 - 100.")
        return;
    }

    //while loop to give grades according to the marks
    if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

//run the funciton 

studentGrade();




