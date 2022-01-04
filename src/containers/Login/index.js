import {
  Navbar,
  FormChat,
  CardAbout,
  FlexContainer,
} from '../../components';

function Login({ socket }) {

  return (
    <div>
      <Navbar />
      <FlexContainer>
        <CardAbout />
        <FormChat socket={socket} />
      </FlexContainer>
    </div>
  )
}

export default Login;