import { useEffect, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Group,
} from './style';

function GroupInfo({ messageList }) {

  const [members, setMembers] = useState([]);
  const room = useSelector(state => state.room);

  const Info = memo(() => {

    return (
      <div>
        <p>{room} </p> <br />
        {members.map((member) => <p> {member} </p>)}
      </div>
    )
  })

  useEffect(() => {
    try {
      const getMembers = [messageList]
        .map((message) => message.reduce((acc, { author }) => {
          const data = [];

          if (!author) return []

          data.push(author);
          
          const allMembers = acc.concat(data)

          const removeTheSameNames = allMembers.filter((member, index) => allMembers.indexOf(member) === index);
          
          return acc = removeTheSameNames; 

        }, [])
      )

      setMembers(getMembers)

    } catch (err) {
      console.error(err)
    }
  }, [messageList])

  return (
    <Group>
      <h1 style={{ color: '#fff' }}> Membros do Grupo </h1>
      <Info />
    </Group>
  )
}

export default GroupInfo;