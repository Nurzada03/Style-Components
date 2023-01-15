import styled from 'styled-components'



export const ChartBarCounteiner = styled.div`

 height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
   

export const ChartBarInner = styled.div`
    height: 100px;
    width: 30px;
    border: 1px solid #313131;
border-radius: 12px;
background-color: #c3b4f3;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: flex-end;
`


export const ChartBarFill = styled.div`
    background-color: blue;
    width: 100%;
    transition: all 0.3s ease-out;

`
    

export const ChartBarLabel = styled.p`

 font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
`
   
