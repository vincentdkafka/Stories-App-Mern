import { useState } from "react";

interface CommentStoryProp{
    commentStory: ({nameText, contentText}: {nameText: string, contentText: string}) => void;
}

export default function StoryCommentsForm({commentStory}: CommentStoryProp){

   const [nameText, setNameText] = useState("")
   const [contentText, setContentText] = useState("")



    return(
        <form onSubmit={(e) =>{
            e.preventDefault()
            if (!nameText || !contentText) return
            commentStory({nameText, contentText})
            setNameText("")
            setContentText("")
        }}
        
        className="flex flex-col gap-8 self-center w-full text-white lg:max-w-3xl my-8">

            <h3 className="text-2xl font-bold mb-4">Add a Comment</h3>

            <label 
            htmlFor="name"
            className="flex flex-col text-xl gap-2 focus-within: text-[#FF6500] focus-within: font-bold "
            >
                Name
                <input 
                className=" border-b border-gray-300 focus:border-[#ff6500] outline-none py-2 text-2xl text-white"
                
                type="text" 
                id="name" 
                value={nameText} 
                onChange={(e)=> setNameText(e.target.value)} 
                required
                 />
            </label>



             <label 
            htmlFor="comment"
            className="flex flex-col text-xl gap-2 focus-within: text-[#FF6500] focus-within: font-bold "
            >
                Comment
                <input 
                className=" border-b border-gray-300 focus:border-[#ff6500] outline-none py-2 text-2xl text-white"
                
                type="text" 
                id="comment" 
                value={contentText} 
                onChange={(e)=> setContentText(e.target.value)} 
                required
                 />
            </label>


            <button 
             className="text-white bg-[#ff6500] px-4 py-3 rounded text-xl"
             type="submit"
            >Add a comment</button>

        </form>
    );
}