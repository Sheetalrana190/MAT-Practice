# Volume Calculation of a Prism

This project provides a utility to programmatically calculate the volume of a rectangular prism while validating input dimensions.


##  Formula
The volume of a prism is calculated as:

```
Volume = width × length × height
```


---
## What This Project Does

- **Calculates the Volume**: 
  - Formula used: 
```
Volume = width × length × height
```
 
    For example:
```
30 = 2 × 3 × 5
```
where `width = 2`, `length = 3`, and `height = 5`.

- **Validates Input**:
  - Ensures width, length, and height are all positive and non-zero.
  - Throws descriptive errors if the input is invalid (e.g., negative or zero values).
- **Includes Tests**:
  - Comprehensive tests to ensure the calculator works perfectly.

---
## How It Works

The `calculateVolumeOfaPrism` function:
1. Accepts three inputs: `width`, `length`, and `height`.
2. Checks for invalid inputs:
   - If any value is negative, it throws an error like `Width should be positive`.
   - If any value is zero, it throws an error like `Length should not be zero`.
3. Returns the calculated volume if all inputs are valid.

### Example Code
You can use the function in your own script like this:
```typescript
import { calculateVolumeOfaPrism } from './volume';

const width = 2;
const length = 3;
const height = 5;

 volume = calculateVolumeOfaPrism(width, length, height);

}
```
---
## Prerequisites

Before getting started, ensure the following are installed on your system:
1. [Node.js](https://nodejs.org/) (v14 or later)
2. [npm](https://www.npmjs.com/) (comes with Node.js)
3. [TypeScript](https://www.typescriptlang.org/) (v4 or later)

If you don’t have these installed, download and install them first.

---

## Project Structure
```
.
├── src/
│   ├── volume.ts         # Main implementation of the calculateVolumeOfaPrism function.
│   └── volume.test.ts    # Folder containing test files.
├── dist/                 # Compiled JavaScript files after TypeScript compilation.
├── jest.config.js        # Jest configuration file.
├── package.json          # Project metadata and dependencies.
├── tsconfig.json         # TypeScript configuration file.
└── README.md             # Documentation (this file).

```

---

## Usage 

Ensure you have **Node.js** and **npm** (or **yarn**) installed.

1. Clone the repository:
   ```sh
   git clone git@github.com:Sheetalrana190/MAT-Practice.git
   cd MAT-Practice
   ```

### 2. Install Dependencies
Run this command to install all necessary dependencies:
```bash
npm install
```

### 3. Build the Project
Compile the TypeScript code into JavaScript:
```bash
npm run build
```

### 4. Run the Code
Execute the compiled JavaScript file to see the program in action:
```bash
npm start
```

---

## Running the Tests

This project uses Jest to test the functionality of the volume calculation function. To run the tests:

1. **Install Jest (if not already installed)**:
   ```bash
   npm install --save-dev jest @types/jest ts-jest
   ```

2. **Run Tests**:
   Execute the test suite using the following command:
   ```bash
   npm test
   ```

The test results will show whether the program is calculating volumes correctly and handling invalid inputs properly.

---

## TypeScript Configuration (`tsconfig.json`)

Create a `tsconfig.json` file in the project root to enable TypeScript support for Jest:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./"
  }
}
```

---

## Dependencies & Scripts (`package.json`)

Ensure your `package.json` file includes the necessary dependencies:
```Bash
npm install --save-dev jest @types/jest ts-jest
```

```json
{
  "name": "prism-volume-calculator",
  "version": "0.1.0",
  "description": "A TypeScript project to calculate the volume of a prism with Jest tests",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "dependencies": {},
  "devDependencies": {
    "@types/jest": "^29.0.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "typescript": "^5.0.0"
  }
}
```

---

## Jest Configuration (`jest.config.js`)

Create a `jest.config.js` file to ensure Jest works with TypeScript:

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node'
};
```

---

## Running Tests

To execute the tests, run:

```Bash
npm run test
```

---

## Expected Test Output

After running tests, you should see output similar to:

```
PASS  ./tests/volume.test.ts
✓ should calculate the volume correctly (X ms)
✓ should throw an error when length is negative (X ms)
✓ should throw an error when height is negative (X ms)
✓ should throw an error when width is negative (X ms)
✓ should throw an error when length is zero (X ms)
✓ should throw an error when height is zero (X ms)
✓ should throw an error when width is zero (X ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
```

---
