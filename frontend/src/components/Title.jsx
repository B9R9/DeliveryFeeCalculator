import React from "react";
import styled from 'styled-components'

const StyledTitle = styled.h3`

flex: 0 0 auto;
height: 5vh;
color: white;
font-family: 'Poetsen', sans-serif;
font-size: 4rem;

text-align: center;
display: flex;
justify-content: center;
margin-top: 5px;

/* Petits téléphones mobiles (jusqu'à 576px) */
@media (max-width: 576px) {
	height: auto;
	font-size: 3rem;
}
/* Téléphones mobiles en mode portrait (de 576px à 768px) */
@media (min-width: 576px) and (max-width: 768px) {
	font-size: 3rem;
	height: 15vh;
}
/* Téléphones mobiles en mode paysage et tablettes en mode portrait (de 768px à 992px) */
@media (min-width: 768px) and (max-width: 992px) {
	font-size: 3rem;
	height: 15vh;
}
/* Tablettes en mode paysage et petits ordinateurs de bureau (de 992px à 1200px) */
@media (min-width: 992px) and (max-width: 1200px) {
	font-size: 4rem;
	height: 15vh;
}

/* Ordinateurs de bureau de taille moyenne (de 1200px à 1440px) */
@media (min-width: 1200px) and (max-width: 1440px) {
	font-size: 4rem;
	height: 15vh;
}
/* Grands ordinateurs de bureau (1440px et plus) */
@media (min-width: 1440px) {
	font-size: 4rem;
	height: 10vh;
}

/* Pour les mobiles en mode paysage */
@media screen and (max-width: 600px) and (orientation: landscape) {
  border: 2px solid red;
}

/* Pour les tablettes en mode paysage */
@media screen and (min-width: 601px) and (max-width: 1280px) and (orientation: landscape) {
	border: 2px solid yellow;
}

`;

export const Title = () => {
	return (
			<StyledTitle>Delivery Fee Calculator</StyledTitle>
	);
};