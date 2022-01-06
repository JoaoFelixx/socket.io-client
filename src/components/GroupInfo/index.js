import { useEffect, memo, useState } from 'react';
import {
  Title,
  Group,
  Members,
  Separator,
} from './style';
import { localizedStrings } from '../../constants'

function GroupInfo({ messageList }) {

  const [members, setMembers] = useState([]);

  const Info = memo(() => {
    return (
      <div >
        {members
          .map((member) => member
            .map(user => (
              <div> 
                <Members> {user} </Members>
                <hr />
              </div>
            )
          ))
        }
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
      <Separator>
        <Title> { localizedStrings.groupMembers } </Title>
      </Separator>
      <Info />
    </Group>
  )
}

export default GroupInfo;