import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
flex: 2 0 auto;
text-align: center;

/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
@media (min-width: 768px) and (max-width: 992px) {
  margin-top: -50px;
}
/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
@media (min-width: 992px) and (max-width: 1200px) {
	margin-top: -60px;
}
/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
@media (min-width: 1200px) and (max-width: 1440px) {
	margin-top: -120px;
}

/* Pour les tablettes en mode paysage */
@media screen and (min-width: 601px) and (max-width: 1280px) and (orientation: landscape) {

}

`;

const StyledTitle = styled.h3`
color: black;
font-family: 'Poetsen', sans-serif;
font-size: 3rem;
padding: 0;

/* Petits téléphones mobiles (jusqu'à 576px) */
@media (max-width: 576px) {
	font-size: 2rem;
}
/* Téléphones mobiles en mode portrait (de 576px à 768px) */
@media (min-width: 576px) and (max-width: 768px) {
	font-size: 2rem;
  	}
/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
@media (min-width: 768px) and (max-width: 992px) {
   	font-size: 3rem;
}
/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
@media (min-width: 992px) and (max-width: 1200px) {
	font-size: 3rem;
}
/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
@media (min-width: 1200px) and (max-width: 1440px) {
	font-size: 3rem;
}
/* Grands ordinateurs de bureau (1440px et plus) */
@media (min-width: 1440px) {
	font-size: 3rem;
}
`;

const StyledFeeContainer= styled.p`
font-family: 'Poetsen', sans-serif;
font-size: 2rem;
border: 3px solid black;
border-radius: 50px;

width: 10rem;
height: 3rem;
align-content: center;
margin: -20px auto;

/* Petits téléphones mobiles (jusqu'à 576px) */
@media (max-width: 576px) {
	font-size: 1rem;
	height: 2rem;
}
/* Téléphones mobiles en mode portrait (de 576px à 768px) */
@media (min-width: 576px) and (max-width: 768px) {
	font-size: 1rem;
	height: 2rem;
}
/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
@media (min-width: 768px) and (max-width: 992px) {
	font-size: 1rem;
	height: 2rem;
}
/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
@media (min-width: 992px) and (max-width: 1200px) {
	font-size: 1.5rem;
	height: 2.5rem;
	margin-top: -25px;
}
/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
@media (min-width: 1200px) and (max-width: 1440px) {
	font-size: 2rem;
	height: 3rem;
	margin-top: -25px;
}
/* Grands ordinateurs de bureau (1440px et plus) */
@media (min-width: 1440px) {
	font-size: 2rem;
	height: 4rem;
}
`;


export const DisplayFee = ({ totalFee }) => {
	let formatedFee = '-'
    if (!isNaN(totalFee)) {
        formatedFee = (totalFee / 100).toFixed(2);
    }
	return (
		<StyledDisplay>
			<StyledTitle>Total Fee</StyledTitle>
			<StyledFeeContainer>{formatedFee}€</StyledFeeContainer>
		</StyledDisplay>
	)
}