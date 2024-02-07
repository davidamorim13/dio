import Input from './components/Input';
import Button from './components/Buttons';

import { Container, Content, Row, column } from '. /styles';

const App = () => {
  return (
    <Container>
      <Content>
      <Input />
      <Row>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="-"/>
      </Row>
      <Row>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="+"/>
      </Row>
      <Row>
        <Button label="3"/>
        <Button label="2"/>
        <Button label="1"/>
        <Button label="="/>
      </Row>
      <Row>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </Row>
      </Content>
    </Container>
  );
}

export default App;
