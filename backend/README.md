# Delivery Fee Calculator

This project is a FastAPI-based API that calculates delivery fees based on various parameters such as cart value, delivery distance, number of items, and order time.

## Requirements

- Python 3.12 or later
- Poetry (for managing dependencies)

## Installation

1. Clone this repository to your local machine.
2. Run `poetry install` to install the dependencies. If you haven't installed Poetry yet, you can do so by following the instructions [here](https://python-poetry.org/docs/#installation).

## Usage

1. Run `poetry run uvicorn main:app --reload` to start the FastAPI server.
2. Access `http://localhost:8000/docs` in your browser to view the interactive documentation and test the API endpoints.

## Tests

This project comes with unit tests to ensure the proper functioning of the API and the delivery fee calculation methods.

### Running the Tests

1. Make sure the FastAPI server is stopped if it's currently running.
2. Run `pytest` from the root of the project to execute all the tests.

### Interpreting the Results

- The tests are divided into several test functions, each testing a specific part of the API or calculation methods.
- Successful tests will simply display "OK", while failed tests will provide information about the nature of the failure.

### Example

```bash
$ pytest
============================= test session starts ==============================
...
collected 15 items

test_delivery_fee_calculator.py .......                                  [ 46%]
test_delivery_fee_calculator_valid_payload.py ...........................   [100%]

============================== 15 passed in 0.22s ==============================
```
In this example, all tests passed successfully. If a test fails, you'll see additional information about the failure, such as the specific test point that failed and the expected versus actual results