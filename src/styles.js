import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 80vh;
display: grid;
justify-content: center;
align-items: center;
text-align: center
`;

export const LocaleInfo = styled.div`
    width: 30vw;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 50%;
    
`;

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
`;

export const Img = styled.img`
   
`;

export const Title = styled.h1`
    font-size: 1rem; 
    
`;
export const WeatherInfo = styled.span`
    font-size: 1rem; 
    margin-top: 3rem
    
`;
export const TempInfo = styled.div`
    font-size: 1rem; 
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 3rem
`;
