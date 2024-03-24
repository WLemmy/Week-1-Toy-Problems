const grade = (marks) => {
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

