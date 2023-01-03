import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.color};
`;

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter</p>
        <p>{count}</p>
        <ButtonContainer>
          <CountButton color="red" onClick={() => dispatch(decrement())}>
            -
          </CountButton>
          &nbsp;
          <CountButton color="blue" onClick={() => dispatch(increment())}>
            +
          </CountButton>
        </ButtonContainer>
      </header>
    </div>
  );
}

export default App;
