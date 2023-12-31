import { BookmarkIcon, ChatIcon, DotHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";


function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm" >
        <div className=" flex items-center p-5 ">
            <img src={userImg} alt='' className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
            <p className="flex-1 font-bold" >{username}</p>
            <DotHorizontalIcon className='h-5' />
        </div>
        <img src={img} className="object-cover w-full" alt="" />
        <div className="flex justify-between px-4 pt-4 " >
            <div className=' flex  space-x-4 ' >
                <HeartIcon className="btn"/>
                <ChatIcon className="btn"/>
                <PaperAirplaneIcon className="btn"/>
            </div>

            <BookmarkIcon className="btn" />
        </div>
    </div>
  )
}

export default Post;