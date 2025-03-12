# Volume Calculator

## Purpose

This project provides a utility to programmatically calculate the volume of a rectangular prism while validating input dimensions.

---

## Features

- **Create Volume Calculation:**
    - Accepts width, length, and height as input parameters.
    - Ensures that dimensions are positive and non-zero values.
    - Computes the volume of the prism using the formula: `width * length * height`.

- **Read Volume Data:**
    - Outputs the calculated volume to the console.

- **Validate Input:**
    - Throws descriptive errors for invalid inputs:
        - Negative dimensions (e.g., "Width should be positive").
        - Zero dimensions (e.g., "Length should not be zero").

---
## File Structure

The project includes the following files:

- **`volume.ts`**: Implements the `calculateVolumeOfaPrism` function.
- **`volume.test.ts`**: Contains unit tests for the function, written using Jest.

---
## Usage


1. **Clone the Repository**:
    ```bash
    git clone git@github.com:Sheetalrana190/MAT-Practice.git
    ```

2. **Install Dependencies**:
    - Make sure you have [Node.js](https://nodejs.org) installed.

3. **Write Your Code**:
    - Import the `calculateVolumeOfaPrism` function and use it in your script volume.test.ts:
      ```typescript
      import { calculateVolumeOfaPrism } from './volume';
      ```
---

## Test-Driven Development (TDD) Flowchart

This project follows a TDD approach to ensure the function meets all specified requirements.

---
## Testing

Unit tests are provided using [Jest](https://jestjs.io/) to validate the functionality. Test cases include:

- Successful calculation with valid inputs.
- Handling negative dimensions.
- Handling zero dimensions.

### Running Tests

- Run Tests:
    ```bash
    npm run test
    ```

---

