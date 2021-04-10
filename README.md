# Crowd Desk Test Solution

This repo is the solution for the assesment for the QA position at Crowd Desk

## Problem: 
- Automate the Configuartion Path using Cypress End-to-End automation framework

## Solution
I used Cypress automation framework in this assesment. In this assesment I used Page object Model (POM) design pattern and follow the data driven approach. While creating this framework I keep in mind the notion of reusebility. Following are the steps for installing and running the solution.

* Install node.js & npm 
* Initiatize the project using following command
    * ```bash
        npm init -y
      ```  
* Install Cypress from the following command
    * ```bash
        npm install cypress --save-dev
      ```
* Install TypeScript from the following command
    * ```bash
        npm install typescript
      ```
* Make the Typescript available to Cypress using folloowing command
    * ```bash 
        npx tsc --init --types cypress --lib dom,es6
      ```  

* Run the following command for test case executions
    * ```bash
        ./node_modules/.bin/cypress run --browser electron --headed (Mac)
        node_modules\.bin\cypress run --browser electron --headed (Windows)
      ```

* If Cypress installed localy for that project use the follwoing command to run
    * ```bash 
        npx cypress open
      ```  

## Folder structure of the framework

    * fixtures                * Storing data for data driven testing approach
    * integration             * Test files (Test cases and assertions)
    * page                    * Page Object definations 
      
## NOTE

* Custom command use for delay. Currently adjusted to 1500 for viewing every page before moving to the next step. It includes some actions which are normally used. In case of addition just add the action in that path and the command will keep looking for the action. Once use the action it will add the delay to that action for viewing. Such configuarion can be edited in the following path.

    * ```bash
        cypress > support > command.js
      ```  
