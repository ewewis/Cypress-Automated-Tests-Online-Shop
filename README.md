# Automated Tests for AutomationPractice.pl

This repository contains automated tests for the website [http://www.automationpractice.pl/](http://www.automationpractice.pl/) using **Cypress**.

## Prerequisites

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ewewis/Cypress-Automated-Tests-Online-Shop.git

2. Install the dependencies:

   ```bash
   npm install

## Running the Tests

There are two ways to run the tests:

1. Open Cypress Test Runner
To open Cypress and run tests interactively:

 ```bash
npx cypress open

This will open the Cypress Test Runner, allowing you to select and run individual tests.

2. Run Tests in Headless Mode
To run all the tests without opening the Test Runner (ideal for CI/CD pipelines):

 ```bash
npx cypress run
