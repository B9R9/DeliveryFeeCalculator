import React from 'react';
import styled from 'styled-components';

import { Input } from './Input'

const StyledForm = styled.form`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 10vh;
	margin-top: -35px;


	
		/* Petits téléphones mobiles (jusqu'à 576px) */
		@media (max-width: 576px) {
			height: 220px;
		}
		/* Téléphones mobiles en mode portrait (de 576px à 768px) */
		@media (min-width: 576px) and (max-width: 768px) {
			height: 320px;
			margin-top: -35px;
		}
		
		/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
		@media (min-width: 768px) and (max-width: 992px) {
			height: 350px;
			margin-top: -35px;
		}
		
		/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
		@media (min-width: 992px) and (max-width: 1200px) {
			height: 400px;
			margin-top: -50px;
		}
		
		/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
		@media (min-width: 1200px) and (max-width: 1440px) {
			height: 450px;
			margin-top: -45px;
		}
		
		/* Grands ordinateurs de bureau (1440px et plus) */
		@media (min-width: 1440px) {
			height: 450px;	
		}
`;

const StyledButton = styled.button`
font-family: 'Poetsen', sans-relif;
border-radius: 50px;


&.clear-button {
	border: none;
	background:  none;
}

/* Petits téléphones mobiles (jusqu'à 576px) */
	@media (max-width: 576px) {
		font-size: 0.8rem;
		width: 6rem;
		height: 2rem;
	}
	
	/* Téléphones mobiles en mode portrait (de 576px à 768px) */
	@media (min-width: 576px) and (max-width: 768px) {
		  font-size: 1rem;
		  width: 7.5rem;
		  height: 2.5rem;
		}
		
	/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
	@media (min-width: 768px) and (max-width: 992px) {
		font-size: 1rem;
		width: 7.5rem;
		height: 2.5rem;
	}
	
	/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
	@media (min-width: 992px) and (max-width: 1200px) {
		font-size: 1rem;
		width: 7.5rem;
		height: 2.5rem;
	}
	
	/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
	@media (min-width: 1200px) and (max-width: 1440px) {
		font-size: 1rem;
		width: 7.5rem;
		height: 2.5rem;
	}
	
	/* Grands ordinateurs de bureau (1440px et plus) */
	@media (min-width: 1440px) {
		font-size: 1.5rem;
		width: 10rem;
		height: 3rem;
  	}

`;

const StyledButtonContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 0.6rem;

/* Petits téléphones mobiles (jusqu'à 576px) */
	@media (max-width: 576px) {


	}

	/* Téléphones mobiles en mode portrait (de 576px à 768px) */
  	@media (min-width: 576px) and (max-width: 768px) {
    	font-size: 0.9rem;
    	padding: 0.4rem;
  	}

  	/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
  	@media (min-width: 768px) and (max-width: 992px) {
   		font-size: 1.2rem;
   		// padding: 0.5rem;
  	}

  	/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
  	@media (min-width: 992px) and (max-width: 1200px) {
    	font-size: 1.1rem;
    	padding: 0.6rem;
  	}

  	/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
  	@media (min-width: 1200px) and (max-width: 1440px) {
    	font-size: 1.2rem;
    	padding: 0.7rem;
  	}

  	/* Grands ordinateurs de bureau (1440px et plus) */
  	@media (min-width: 1440px) {
    	font-size: 1.3rem;
    	padding: 0.8rem;
  	}

`;

const StyledError =  styled.p`
color: red;
height: 1.2em;
/* Téléphones mobiles en mode portrait (de 576px à 768px) */
@media (min-width: 576px) and (max-width: 768px) {
	font-size: 1rem;
}

/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
@media (min-width: 768px) and (max-width: 992px) {
   	font-size: 1.3rem;
}
/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
@media (min-width: 1200px) and (max-width: 1440px) {
	font-size: 1.3rem;
}

/* Grands ordinateurs de bureau (1440px et plus) */
@media (min-width: 1440px) {
	font-size: 1.3rem;
}
`;

export const MyForm = ({ handleFee, setFee }) => {

	const [inputValues, setInputValues] = React.useState({
		cart_value: null,
		delivery_distance: null,
		number_of_items: null,
		utctime: null,
		localtime: null
	  })

	const [errors, setErrors] = React.useState({
		cart_value: false,
		delivery_distance: false,
		number_of_items: false,
		utctime: false,
	  })
	
	const fields = [
		{
			type: 'number', 
			step: '0.01',
			min: '0',
			placeholder: `${(inputValues.cart_value === '') ? ''  :'Cart Value in € ...'}`,
			value: inputValues.cart_value || '' ,
			onChange:(event) => handleValuesChange(event, 'cart_value'),
			error: errors.cart_value ? 'true' : 'false'
		},
		{
			type: 'number',
			step: '0',
			min: '0',
			placeholder: `${(inputValues.delivery_distance === '') ? ''  :'Delivery Distance in m ...'}`,
			value: inputValues.delivery_distance || '' ,
			onChange:(event) => handleValuesChange(event, 'delivery_distance'),
			error: errors.delivery_distance ? 'true' : 'false'
		},
		{
			type: 'number',
			step: '0',
			min: '0',
			placeholder: `${(inputValues.number_of_items === '') ? ''  :'Number of Items ...'}`,
			value: inputValues.number_of_items || '' ,
			onChange:(event) => handleValuesChange(event, 'number_of_items'),
			error: errors.number_of_items ? 'true' : 'false'
		},
		{
			type: 'datetime-local',
			placeholder: `${(inputValues.time === '') ? ''  :'Time ...'}`,
			value: inputValues.localtime || '' ,
			onChange:(event) => handleTimeChange(event, 'utctime'),
			error: errors.utctime ? 'true' : 'false'
		}
	]

	const handleValuesChange = ( event, fieldName ) => {
		event.preventDefault();

		const value = event.target.value !== '' ? Number(event.target.value) : null;

		if (value < event.target.min){
			setErrors(prevErrors => ({
				...prevErrors,
				[fieldName]: true
			}));
			return ;
		}
		
		setErrors(prevErrors => ({
			...prevErrors,
			[fieldName]: false
		}));
		setInputValues(prevInputValues => ({
			...prevInputValues,
			[fieldName]: event.target.value !== '' ? Number(event.target.value) : null
		}));
	};
	
	const handleTimeChange = ( event, fieldName ) => {
		event.preventDefault();

		const localDateTime = new Date(event.target.value);
		localDateTime.setHours(localDateTime.getHours() + 3)
		let utcDateTime = localDateTime.toISOString();
		utcDateTime = utcDateTime.slice(0, -5) + "Z"
		setInputValues(prevInputValues => ({
		  ...prevInputValues,
		  [fieldName]: utcDateTime,
		  ['localtime']: event.target.value,
		}));
	  };
	
	const handleSubmit = (event) => {
		event.preventDefault();
		let newErrors = {}
		for (let key in inputValues){
			newErrors[key] = inputValues[key] === null;
		}
		setErrors(newErrors)
		setTimeout(() => {
			setErrors ({
				cart_value: false,
				delivery_distance: false,
				number_of_items: false,
				utctime: false,
			  })
			}, 5000)
		const allValuesFilled = !Object.values(newErrors).includes(true);
		if (allValuesFilled) {
			handleFee(inputValues);
		} else {
			console.log("There is mistake(s) in the form.");
		}
	}

	const clearInput = () => {
		setFee('-');
		setInputValues ({
			cart_value: null,
			delivery_distance: null,
			number_of_items: null,
			utctime: null,
			localtime: null
		  })
		setErrors ({
			cart_value: false,
			delivery_distance: false,
			number_of_items: false,
			utctime: false,
		  })
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			{fields.map(( field, index) => (
				<Input key={index} {...field} />
			))}
			<StyledButtonContainer>
				<StyledButton className='clear-button' type='button' onClick={clearInput}>Clear</StyledButton>
				<StyledButton type="submit">Submit</StyledButton>
			</StyledButtonContainer>
			{Object.values(errors).some(error => error === true)
			? <StyledError>-- There is invalid input in your form. --</StyledError>
			: <StyledError style={{visibility: 'hidden'}}>-- There is invalid input in your form. --</StyledError>}
		</StyledForm>																																																																																																																																																							
	);
};