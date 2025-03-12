#Volume Calculation of a Prism

This project calculates the volume of a prism using TypeScript and includes Jest tests for validation.

##  Formula
The volume of a prism is calculated as:

```
Volume = width × length × height
```

For example:
```
30 = 2 × 3 × 5
```
where `width = 2`, `length = 3`, and `height = 5`.

---

## Project Structure
```
 your-project-folder
│──  src
│   ├── volume.ts
│   ├── volume.test.ts
│── package.json
│── tsconfig.json
│── jest.config.js
│── README.md
```

---

## Installation

Ensure you have **Node.js** and **npm** (or **yarn**) installed.

1. Clone the repository:
   ```sh
   git clone git@github.com:Sheetalrana190/MAT-Practice.git
   cd MAT-Practice
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

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
