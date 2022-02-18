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
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 50%;
    text-align: center;
    align-items: center;
    
`;

export const WeatherInfo = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    justify-items: center;
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
export const WeatherApp = styled.div`
    font-size: 1rem; 
    margin-top: 3rem
    
`;
export const TempInfo = styled.div`
    font-size: 1rem; 
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 3rem
`;
