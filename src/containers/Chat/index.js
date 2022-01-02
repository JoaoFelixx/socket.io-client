import { 
  Navbar,
  FormChat,
  CardAbout,
  FlexContainer,
} from '../../components';

function Chat() {
  return (
    <div>
      <Navbar />
      <FlexContainer>
        <CardAbout/>
        <FormChat />
      </FlexContainer>
    </div>
  )
}

export default Chat;