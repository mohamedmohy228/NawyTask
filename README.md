# Project Name

## Project Structure
```
/src         - Contains the source code
/tests       - Contains all test files
/tests/Pages - Contains all the pages with the locators and their functions
/test/spec   - Contains all the test cases 
/docs        - Documentation files
```

## How to Run the Tests
1. Ensure all dependencies are installed.
2. Run the following command: npx playwright test tests.specs.TestCases.spec.ts  --headed
    

## Dependencies
- Node.js >= 14.x
- npm >= 6.x
- Any additional dependencies are listed in `package.json`.

## Getting Started
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Follow the instructions above to run tests.
