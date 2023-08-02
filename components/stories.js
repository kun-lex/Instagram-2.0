import { useEffect, useState } from 'react'
import  { faker }  from '@faker-js/faker';
import Story from './story';
import Useravatar from './useravatar';

function Stories() {
  // const [suggestions, setSuggestions] = useState([])

  //   useEffect(() => {
  //       const suggestions = User => ({
  //           ...faker.helpers.contextualCard(),
  //           id: i
  //       });

  //       setSuggestions(suggestions);
  //   }, [])
  const username = faker.internet.userName()
  const fakeUsers = new Array(20).fill(null);


  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black ' >
      {fakeUsers.map((_, id) => (
        <Story key={id} img={Useravatar} username={username} />
        ))}
    </div>
  )
}

export default Stories