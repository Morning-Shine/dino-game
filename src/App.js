import './App.css';
import styled from '@emotion/styled';
import LabyrinthCont from './сomponents/LabyrinthCont';
import AboutLabyrinth from './сomponents/AboutLabyrinth';
import LabyrinthResult from './сomponents/LabyrinthResult';
import { BGD_MAIN, BGRD_2, FONT_HEADER } from './constants/CSS_COLORS';

export default function App() {
  return (
    <div className="App">
      <Header >
        Ментальный лабиринт
      </Header>
      <Cont>
        <AboutLabyrinth />
        <LabyrinthCont />
        <LabyrinthResult />
      </Cont>

    </div>
  );
}

const Header = styled.header`
  background-color: ${BGRD_2};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${FONT_HEADER};
  font-weight: bold;
`;

const Cont = styled.div`
  height: 90vh;
  background-color: ${BGD_MAIN};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* align-items: center; */
  /* flex-direction: column; */
`
