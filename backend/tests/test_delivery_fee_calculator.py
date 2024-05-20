from fastapi.testclient import TestClient
from models.DeliveryFeeCalculator import DeliveryFeeCalculator
import pytest
from main import app  # import your FastAPI instance

client = TestClient(app)

def test_delivery_fee_calculator():
    # Define a sample payload
    payload = {
        "cart_value": 790,
        "delivery_distance": 2235,
        "number_of_items": 4,
        "time": "2024-05-20T15:30:00Z"
    }

    # Make a request to the API
    response = client.post("/deliveryFeeCalculator", json=payload)

    # Assert that the response is successful
    assert response.status_code == 200

    # Assert the structure of the response data
    assert "delivery_fee" in response.json()

    # Assert the calculation of the delivery fee
    # This will depend on your business logic
    assert response.json()["delivery_fee"] == 710  # replace 500 with the expected delivery fee

@pytest.mark.parametrize(
        "payload, expected_status, expected_delivery_fee",
        [
			 ({"cart_value": 790, "delivery_distance": 2235, "number_of_items": 4, "time": "2024-05-20T15:30:00Z"}, 200, 710),
			 ({"cart_value": 20000, "delivery_distance": 2235, "number_of_items": 4, "time": "2024-05-20T15:30:00Z"}, 200, 0),
			 ({"cart_value": 790, "delivery_distance": 2235, "number_of_items": 4, "time": "2024-05-03T16:30:00Z"}, 200, 852),
			 ({"cart_value": 100, "delivery_distance": 2235, "number_of_items": 10, "time": "2024-05-03T16:30:00Z"}, 200, 1500),
		]
)

def test_delivery_fee_calculator_valid_payload(payload, expected_status, expected_delivery_fee):
    response = client.post("/deliveryFeeCalculator", json=payload)
    assert response.status_code == expected_status
    assert response.json()["delivery_fee"] == expected_delivery_fee

@pytest.mark.parametrize(
    "payload, expected_status",
    [
        ({"cart_value": -10, "delivery_distance": 2000, "number_of_items": 5, "time": "2024-05-20T15:30:00Z"}, 422),
        ({"cart_value": 1500.0, "delivery_distance": -2000, "number_of_items": 5, "time": "2024-05-20T15:30:00Z"}, 422),
        ({"cart_value": 1500.0, "delivery_distance": -2000, "number_of_items": -5, "time": "2024-05-20T15:30:00Z"}, 422),
		({"cart_value": 0, "delivery_distance": 0, "number_of_items": 0, "time": "2024-05-05T16:30:00Z"}, 422),
        # Add more invalid payloads and their expected status codes
    ],
)
def test_delivery_fee_calculator_invalid_payload(payload, expected_status):
    response = client.post("/deliveryFeeCalculator", json=payload)
    assert response.status_code == expected_status
    

@pytest.mark.parametrize(
    "cart_value, expected_fee",
    [
        (790, 210),  # replace 210 with the expected result for cart_value=790
        (1000, 0),  # replace 0 with the expected result for cart_value=1000
        (2000, 0),  # replace 0 with the expected result for cart_value=1000
    ],
)
def test_cart_value_fee_calculator(cart_value, expected_fee):
    # Create an instance of the class with dummy values for other parameters
    calculator = DeliveryFeeCalculator(cart_value=cart_value, delivery_distance=2235, number_of_items=4, time="2024-05-20T15:30:00Z")

    # Call the method and get the result
    result = calculator.cart_value_fee_calculator(cart_value)

    # Assert the result
    assert result == expected_fee
    

@pytest.mark.parametrize(
    "delivery_distance, expected_fee",
    [
        (499, 200),  # replace 210 with the expected result for cart_value=790
        (900, 200),  # replace 210 with the expected result for cart_value=790
        (1200, 300),  # replace 0 with the expected result for cart_value=1000
        (1499, 300),  # replace 0 with the expected result for cart_value=1000
        (1500, 300),  # replace 0 with the expected result for cart_value=1000
        (1501, 400),  # replace 0 with the expected result for cart_value=1000
        (2235, 500),  # replace 0 with the expected result for cart_value=1000
    ],
)
def test_delivery_distance_fee_calculator(delivery_distance, expected_fee):
    # Create an instance of the class with dummy values for other parameters
    calculator = DeliveryFeeCalculator(cart_value=1100, delivery_distance=delivery_distance, number_of_items=1, time="2024-05-20T15:30:00Z")

    # Call the method and get the result
    result = calculator.delivery_distance_fee_calculator(delivery_distance)

    # Assert the result
    assert result == expected_fee
    
@pytest.mark.parametrize(
    "number_of_items, expected_fee",
    [
        (4, 0),  # replace 210 with the expected result for cart_value=790
        (5, 50),  # replace 210 with the expected result for cart_value=790
        (10, 300),  # replace 0 with the expected result for cart_value=1000
        (13, 570),  # replace 0 with the expected result for cart_value=1000
        (14, 620),  # replace 0 with the expected result for cart_value=1000
    ],
)
def test_number_of_items_fee_calculator(number_of_items, expected_fee):
    # Create an instance of the class with dummy values for other parameters
    calculator = DeliveryFeeCalculator(cart_value=1100, delivery_distance=1500, number_of_items=number_of_items, time="2024-05-20T15:30:00Z")

    # Call the method and get the result
    result = calculator.number_of_items_fee_calculator(number_of_items)

    # Assert the result
    assert result == expected_fee
    
@pytest.mark.parametrize(
    "time, expected",
    [
        ("2024-05-03T16:30:00Z", True),  # replace 210 with the expected result for cart_value=790
        ("2024-05-03T14:30:00Z", False),  # replace 210 with the expected result for cart_value=790
        ("2024-05-10T16:30:00Z", True),  # replace 210 with the expected result for cart_value=790
        ("2024-05-10T12:30:00Z", False),  # replace 210 with the expected result for cart_value=790
        ("2024-05-17T16:30:00Z", True),  # replace 210 with the expected result for cart_value=790
        ("2024-05-17T20:00:00Z", False),  # replace 210 with the expected result for cart_value=790
        ("2024-05-03T14:59:00Z", False),  # replace 210 with the expected result for cart_value=790
        ("2024-05-03T16:00:00Z", True),  # replace 210 with the expected result for cart_value=790
        ("2024-05-03T18:59:59Z", True),  # replace 210 with the expected result for cart_value=790
        ("2024-05-03T19:00:00Z", False),  # replace 210 with the expected result for cart_value=790
    ],
)
def test_time_fee_calculator(time, expected):
    # Create an instance of the class with dummy values for other parameters
    calculator = DeliveryFeeCalculator(cart_value=1100, delivery_distance=900, number_of_items=1, time=time)

    # Call the method and get the result
    result = calculator.time_fee_calculator(time)

    # Assert the result
    assert result == expected
