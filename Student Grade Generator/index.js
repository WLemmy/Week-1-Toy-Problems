//defines a function named grade using an arrow function.
const grade = (marks) => {
    //The function uses a switch statement to determine the letter grade based on the provided marks.
    switch (true) {
        case (marks >= 79 && marks <= 100):
            return "You scored A";
        case (marks >= 60 && marks <= 78):
            return "You scored B";
        case (marks >= 50 && marks <= 59):
            return "You scored C";
        case (marks >= 40 && marks <= 49):
            return "You scored D";
        case (marks >= 0 && marks <= 39):
            return "You scored E";
            //The default case handles invalid input (marks outside the expected range) and returns "Invalid input".
        default:
            return "Invalid input";
    }
}

function calculateGrade() {
    const marksInput = document.getElementById("marksInput").value;
    const marks = parseInt(marksInput);
    const gradeResult = grade(marks);
    console.log(gradeResult)
    //return `you scored ${gradeResult}`;
    //alert(grade(marks));
    document.getElementById("resultValue").textContent = gradeResult;
}

