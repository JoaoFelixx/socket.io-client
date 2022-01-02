import {
  FlexItem,
  DivCenter,
  Title,
  Input,
  Label,
  Form,
  ButtonEnter,
} from './style';

function FormChat() {
  return (
    <FlexItem>
      <DivCenter>
        <Form>
          <Title>Entrar no Grupo</Title>

          <Label>Nome</Label> <br />
          <Input />
          <br /><br />
          <Label>ID da sala</Label> <br />
          <Input />
          <br /><br />
          <ButtonEnter type="submit"> Entrar </ButtonEnter>
        </Form>
      </DivCenter>
    </FlexItem>
  )
}

export default FormChat;