from fastapi import FastAPI, Request, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
import logging
import socket
from datetime import datetime
from models.DeliveryFeeCalculator import DeliveryFeeCalculator

logging.basicConfig(filename='app.log', level=logging.INFO)

app = FastAPI()

@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    if exc.status_code == status.HTTP_404_NOT_FOUND:
        logging.error(f"error: Unknow endpoint")
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={"error": "Unknow endpoint"})
    logging.error(f"error: {exc.detail}")
    return JSONResponse(status_code=exc.status_code, content={"error": exc.detail})

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    logging.error(f"error: {exc.errors()}, body: ${exc.body}")
    return JSONResponse(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, content={"error": exc.errors(), "body": exc.body})


@app.middleware("http")
async def log_request(request: Request, call_next):
    # Get the client's IP address
    ip_address = request.client.host
    # Get the current time
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    # Log the request details
    logging.info(f"Time: {current_time} | IP: {ip_address} | Request: {request.method} {request.url}")
    body = await request.body()
    if body:
        logging.info(f"Request body: {body}")
    else:
        logging.info(f"Request body is empty")
    try:
        response = await call_next(request)
    except Exception as e:
        logging.error(f"Error: {str(e)}")
    # Log the response details
    logging.info(f"Response: {response.status_code}")
    return response

@app.post("/deliveryFeeCalculator")
async def deliveryCalculatorFee(values: DeliveryFeeCalculator):
    return values.calculate_delivery_fee()
