import Post from "./post"

const Posts_Data = [
  {
    id: '123',
    username: 'dev_david',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Testing'
  },
  {
    id: '123',
    username: 'dev_david',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Testing'
  }
]

function Posts() {
  return (
    <div>
      {Posts_Data.map((post) => (
        <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))}
    </div>
  )
}

export default Posts