import styled from 'styled-components';
import React, {useState} from 'react';


const Button = styled.button`
background-color: #3949ab;
color: white;
padding: 5px 15px;
border-radius: 5px;
`


const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({active}) => active && `
    opacity: 1;
  `}
`


const Tab = styled.button`
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  /* background: white;
  border 0;
  outline: 0; */
  transition: ease border-bottom 250ms;
  ${({ active }) => active && `
    border-bottom: 2px solid black;
    opacity: 1;
    color: blue;
  `}
`;


function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return(
    <>
      <div>
        {types.map(type => (
          <Tab key={type}
                active={active === type}
                onClick={() => setActive(type)}>
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p>Выбрано: {active}</p>
    </>
  )
}



const types = ['Главная', 'Услуги', 'О нас', 'Контакты'];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map(type => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  )
}

function clickMe() {
  alert('You clicked me')
}

function App() {
  return (
    <div className="App">
      <h1>Навигационное меню</h1>
      {/* <Button onClick={clickMe}>
        Button
      </Button> */}
      {/* <ToggleGroup/> */}
      <TabGroup/>
    </div>
  );
}

export default App;
