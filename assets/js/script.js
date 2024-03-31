// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function collects employee data and returns an array of employee objects
const collectEmployees = function() {

  //Define employees array

  let employeesArray = [];

  // Define function to insert employee info into object and push to array if employee variables are not null, else set variables to null

function groupEmployeeInfo(firstName,lastName,salary){
  if(firstName != "" && lastName != "" && salary != ""){

    //Define employee object inside function to instantiate everytime function is called to not override previous information
    let employees = {};

    employees['firstName'] = firstName;
    employees['lastName']  = lastName;
    employees['salary']    = salary;

    employeesArray.push(employees);
  }else{
    firstName = "";
    lastName  = "";
    salary    = "";
  }
}

  //prompt user for input. prompt method displays a dialog box that prompts the user for input

  let firstName =  prompt("Enter First Name:");
  let lastName  =  prompt("Enter Last Name:");
  let salary    =  prompt("Enter Salary:");

  // Check if salary is number, else default to 0

  salary =  isNaN(salary) ? 0 : salary;

  //Call function to insert into employee object and push to array

  groupEmployeeInfo(firstName,lastName,salary);
  
 // Confirm if user wants to add another employee, clicking 'ok' returns true and 'cancel' returns false

  let addAnotherEmployee = confirm("Do you want to add another employee ?");

  while(addAnotherEmployee){

  firstName =  prompt("Enter First Name:");
  lastName  =  prompt("Enter Last Name:");
  salary    =  prompt("Enter Salary:");
  
  // Check if salary is number, else default to 0

  salary =  isNaN(salary) ? 0 : salary;

  // Insert into object and push to array if above attributes are not null else set them to null

  groupEmployeeInfo(firstName,lastName,salary);

  addAnotherEmployee = confirm("Do you want to add another employee ?");

  }
  return employeesArray;
}

// Display the average salary among all the employees
const displayAverageSalary = (employeesArray) => {
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  
}


// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
