# Password-Generator


### My Task

I was required to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code that I wrote. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## The Work 

I have created a password generator that includes the following; 
Once the "Generate Password" button is clicked, the user get a prompt asking how many characters they would like their password to be, somewhere between 8 and 128 characters. If they enter a number between 8 and 128, they move on to the next prompt. If they do not, they are given another prompt asking them to try again. Following a correct input, they are asked "Yes" or "Cancel" questions asking if they would like to inclue uppercase, lowercase, special characters, and numbers. If the employee does not select at least one of the options, they are prompted again asking them to please try again. If the employee selects "Yes" to at least one of the options, they will get a prompt letting them know their password is being generated. Upon that message, a password will appear in the password box with the amount of characters they chose, and any of their selections from the "Yes" or "Cancel" questions.

```

## Review

I am submitting the following for review:

* The URL of the deployed application: https://paterma.github.io/Password-Generator/

* The URL of the GitHub repository, with a unique name and a readme describing the project: https://github.com/Paterma/Password-Generator

* And a screenshot of the assignment: ![Screenshot of Password Generator](/Assets/Password-G-Screenshot.PNG)
!
