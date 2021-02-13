const inquirer
const generateReadMe
const fs = require("fs")

const dataInput = [
    {
        type: 'input',
        message: 'Please enter your Git Hub Name?',
        name: 'username',
      },

    {
        type: 'input',
        message: 'Please enter your email address?',
        name: 'email',
      },
    
      {
        type: 'input',
        message: 'Please enter the name of your project?',
        name: 'title',
      },   
    
      {
        type: 'input',
        message: 'Please provide a description of your project?',
        name: 'description',
      },
    
      {
        type: 'input',
        message: 'What must be installed to run this program?',
        name: 'installation',
      },
    
      {
        type: 'input',
        message: 'Please enter licenses needed?',
        name: 'license',
      },
    
      {
        type: 'input',
        message: 'Please add contributors',
        name: 'contributors',
      },
      
    {
        type: 'input',
        message: 'Please add contributors',
        name: 'contributors',
      },  
]