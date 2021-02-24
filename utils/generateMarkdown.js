// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  Contact:

  Github:[${data.username}]
  
  Email:[${data.email}]

`;
}

module.exports = generateMarkdown;
