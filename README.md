# Week-1-Toy-Problems
## Challenge 1: Student Grade Generator (Toy Problem)
Getting started on the brief: 
In this lab, the brief wanted us to write a function that prompts the user to input student marks. The input should be between 0 and 100, hence Grade Calculator is a simple JavaScript function that calculates the grade based on the marks input by the user. It categorizes the grade into different levels ranging from A to E based on specific score ranges.

### Functionality
The grade function takes a parameter marks representing the score obtained by the student and returns the corresponding grade based on the score range.

The calculateGrade function is invoked when the user clicks the "Calculate" button. It retrieves the marks input by the user, calculates the grade using the grade function, and displays the result on the webpage.

#### Usage
To use the Grade Calculator:

Enter the marks in the input field labeled "Enter your marks."
Click the "Calculate" button.
The grade corresponding to the entered marks will be displayed below.
Grade Categories
A: Marks between 79 and 100
B: Marks between 60 and 78
C: Marks between 50 and 59
D: Marks between 40 and 49
E: Marks between 0 and 39
If the entered marks are outside these ranges, the calculator will display "Invalid input."


# Speed Limit Checker
The Speed Limit Checker is a JavaScript function that calculates demerit points based on the input speed compared to the speed limit. It then displays the result on the webpage, indicating whether the speed is within the limit, how many demerit points have been earned, or if the license is suspended.

## Functionality
The speedLimit function is invoked when the user interacts with the input field. It retrieves the speed input by the user, calculates demerit points based on the speed limit (70 km/h) and the input speed, and displays the result accordingly.

### Usage
To use the Speed Limit Checker:

Enter the speed in the input field labeled "Enter speed."
The result indicating the status of the speed limit will be displayed below.
#### Result Categories
If the speed is within the speed limit (0 demerit points).
Demerit Points: If the speed exceeds the speed limit but is within the allowable demerit points range (up to 12 points).
License Suspended: If the demerit points exceed the allowable limit (more than 12 points).

# Net Salary Calculator
The Net Salary Calculator is a JavaScript function that computes the net salary based on the provided gross salary, deductions, and tax rates. It then displays the net salary on the webpage for the user to see.

## Functionality
The calculateNetSalary function is invoked when the user clicks the "Calculate Net Pay" button. It retrieves the gross salary and deductions entered by the user, calculates the tax amount based on the gross salary using the taxCalc function, and then computes the net salary. The net salary is displayed on the webpage.

The taxCalc function calculates the tax rate based on the gross salary. It uses different tax brackets to determine the appropriate tax rate for the given gross salary.

###VUsage
To use the Net Salary Calculator:

Enter the gross salary in the input field labeled "Enter the Gross Salary."
Enter the deductions in the input field labeled "Enter the deductions."
Click the "Calculate Net Pay" button.
The net salary will be displayed below, indicating the amount after taxes and deductions.
#### Tax Calculation
The tax calculation is based on the gross salary and follows the tax brackets specified in the taxCalc function. Different tax rates are applied depending on the gross salary range.

##### Author
This Grade Calculator was developed by [Wilfred Lemayian Ketere].