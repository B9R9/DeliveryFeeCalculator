import axios from 'axios'

const baseURL = '/deliveryFeeCalculator'

const createOrderObject = (inputValues) => {
	const orderObject =  {
	  cart_value: parseFloat(inputValues.cart_value) * 100,
	  delivery_distance: parseInt(inputValues.delivery_distance),
	  number_of_items: parseInt(inputValues.number_of_items),
	  time: inputValues.utctime
	}
	return orderObject
}

const CalculateFee = async (inputValues) =>  {
	const payloads = createOrderObject(inputValues)
	try {
		const response = await axios.post(baseURL, payloads)
		return response.data
	} catch (err){ () => console.log(err)}
}
export default CalculateFee