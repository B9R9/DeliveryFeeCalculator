from pydantic import BaseModel, Field
from fastapi import HTTPException
from datetime import datetime
import math

class DeliveryFeeCalculator(BaseModel):
    MIN_CART_VALUE: int = 1000
    MIN_DISTANCE_DELIVERY: int = 1000
    DISTANCE_THRESHOLD: int = 500
    MIN_DISTANCE_DELIVERY_FEE: int = 200
    COST_SURCHARGE_ITEM: int = 50
    SURCHARGE_ITEM_THRESHOLD: int = 4
    COST_BULK_FEE: int = 120
    BULK_FEE_THRESHOLD: int = 12
    RUSH_HOUR_START: int = datetime.strptime("15:00", "%H:%M").time()
    RUSH_HOUR_END: int = datetime.strptime("19:00", "%H:%M").time()
    RUSH_HOUR_DAY: str = "Friday"
    SURCHARGE_RUSH_HOUR: int = 120
    MAX_DELIVERY_FEE: int = 1500
    MAX_CART_VALUE: int = 20000

    cart_value: float = Field(..., gt=0)
    delivery_distance: int = Field(..., gt=0)
    number_of_items: int = Field(..., gt=0)
    time: str = Field(...)
      
    def __init__(self, **data):
        super().__init__(**data)
        if not isinstance(self.cart_value, float):
            raise HTTPException(status_code=400, detail="cart_value must be a float.")
        if not isinstance(self.delivery_distance, int):
            raise HTTPException(status_code=400, detail="delivery_distance must be an int.")
        if not isinstance(self.number_of_items, int):
            raise HTTPException(status_code=400, detail="number_of_items must be an int")
        if not isinstance(self.time, str):
            raise HTTPException(status_code=400, detail="time must be a string")

    def cart_value_fee_calculator(self, cart_value) -> int:
        if cart_value < self.MIN_CART_VALUE:
            return self.MIN_CART_VALUE - cart_value
        return 0

    def delivery_distance_fee_calculator(self, delivery_distance) -> int:
        if delivery_distance <= self.MIN_DISTANCE_DELIVERY:
            return self.MIN_DISTANCE_DELIVERY_FEE
        delivery_fee: int = math.ceil(delivery_distance / self.DISTANCE_THRESHOLD)
        return delivery_fee * 100
    
    def number_of_items_fee_calculator(self, number_of_items) -> int:
        fee: int = 0
        if number_of_items <= self.SURCHARGE_ITEM_THRESHOLD:
            return 0
        if number_of_items > self.BULK_FEE_THRESHOLD:
            fee = self.COST_BULK_FEE
        fee = (number_of_items - self.SURCHARGE_ITEM_THRESHOLD) * self.COST_SURCHARGE_ITEM + fee
        return fee 
             
    def time_fee_calculator(self, time) -> bool:
        time_object = datetime.strptime(time, "%Y-%m-%dT%H:%M:%SZ")
        day_of_the_week = time_object.strftime("%A")
        hour = time_object.time()
        if day_of_the_week == self.RUSH_HOUR_DAY and self.RUSH_HOUR_START <= hour < self.RUSH_HOUR_END:
            return True
        return False
        
    def calculate_delivery_fee (self):
        if self.cart_value >= self.MAX_CART_VALUE :
            return {"delivery_fee" : 0}

        cart_value_fee :int = self.cart_value_fee_calculator(self.cart_value)
        delivery_distance_fee :int = self.delivery_distance_fee_calculator(self.delivery_distance)
        number_of_items_fee: int = self.number_of_items_fee_calculator(self.number_of_items)
        time_coef: int = self.time_fee_calculator(self.time)
        total_delivery_fee :int = (cart_value_fee + delivery_distance_fee + number_of_items_fee)
        
        if (time_coef):
            total_delivery_fee = (total_delivery_fee * self.SURCHARGE_RUSH_HOUR) / 100
        if total_delivery_fee > self.MAX_DELIVERY_FEE:
            total_delivery_fee = self.MAX_DELIVERY_FEE
            
        return {"delivery_fee" : total_delivery_fee}