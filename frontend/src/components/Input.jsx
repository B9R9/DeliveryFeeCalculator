import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`

	display: block;
	border-radius: 30px;
	margin-bottom: 0.5rem;
	text-align: center;
	font-family: 'Poetsen', sans-serif;
	opacity: 0.5;
	border: ${props => props.$error === 'true' ? '3px solid red' : '3px solid transparent'};
	outline-color: #FFA500;


	/* Petits téléphones mobiles (jusqu'à 576px) */
	@media (max-width: 576px) {
		font-size: 0.8rem;
		width: 15rem;
		height: 3rem;
		
	}
	
	/* Téléphones mobiles en mode portrait (de 576px à 768px) */
	@media (min-width: 576px) and (max-width: 768px) {	
		font-size: 0.8rem;
		width: 15rem;
		height: 3rem;
	}
	
	/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
	@media (min-width: 768px) and (max-width: 992px) {
		  font-size: 0.8rem;
		  width: 15rem;
		  height: 3rem;
		  
		}
		
		/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
		@media (min-width: 992px) and (max-width: 1200px) {
		  font-size: 1rem;
		  width: 15rem;
		  height: 3rem;
		}
		
		/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
		@media (min-width: 1200px) and (max-width: 1440px) {
		  font-size: 1rem;
		  width: 15rem;
		  height: 3rem;
		}
		
		/* Grands ordinateurs de bureau (1440px et plus) */
		@media (min-width: 1440px) {
			font-size: 2rem;
			width: 30rem;
			height: 3.5rem;
  	}
`;

export const Input = ({ type, step, placeholder, value, onChange, error }) => {
	return (
			<StyledInput 
				type={type}
				step={step}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				$error={error} />
	); 
};