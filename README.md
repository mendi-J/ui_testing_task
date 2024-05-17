## UI Automated Test Task:

This repository contains automated UI tests for the provided task.

## Pre-requisites:

Node.js 18+

## Running Tests Locally\*\*

### Clone this repository:

```bash
git clone https://github.com/mendi-J/ui_testing_task.git
```

### Navigate to the project directory:

`bash cd ui_testing_task `

### Install Dependencies:

```bash
npm install
```

### Run Tests:

To run the tests, execute the following command.

```bash
npm run script
```

This command will run, generate, and open the test report in your default browser.

### Generate report:

The report is generated using cypress-mochawesome-reporter.

### Running Tests in GitHub Action CI/CD Pipeline:

GitHub Actions is used for the pipeline configuration. The event trigger is configured to run the automated test using GitHub Actions triggered on every push to the repository.
To run the test, make a push to the repository, and the pipeline will be triggered and start running automatically.

### Author:

| Name           | GitHub   | LinkedIn       |
| -------------- | -------- | -------------- |
| Ndifreke Jacob | @Mendi-J | Ndifreke Jacob |
