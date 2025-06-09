
import { useLoaderData, useParams, type LoaderFunctionArgs } from "react-router-dom"
import stories from "../data/content"
import axios from "axios";
import { useState } from "react";
import StoryComments from "../StoryComments";
import StoryCommentsForm from "../StoryCommentsForm";
import useUser from "../hooks/useUser";

interface Story {
    likes: number
    comments: {writtenBy: string; content: string}[];
}

export default function StoryPage(){

     const {name}= useParams();
     const {likes: initialLikes,  comments: initialComments} : Story = useLoaderData();


     const [likes, setLikes] = useState(initialLikes);

     const [comments, setComments] = useState(initialComments)


     const {user, isLoading} = useUser()
     
     
    const story = stories.find((story)=> story.name === name )!;



    async function likeStory(){;
        const token = user && ( await user.getIdToken())

        const headers = token ? {authtoken : token } : {};

        const response = await axios.post("/api/stories/" + name + "/like", null, {
            headers,
        })

        const updatedStoryData = response.data
        setLikes(updatedStoryData.likes)
    }




    async function commentStory({nameText, contentText}:{nameText: string, contentText: string}){
        
        const token = user && ( await user.getIdToken())

        const headers = token ? {authtoken : token } : {};
        
        const response = await axios.post("/api/stories/" + name + "/comments",
            {
                writtenBy: nameText,
                content: contentText
            },{
                headers
            }
        );
        const updatedStoryData = response.data;
        setComments(updatedStoryData.comments)
    }
      
      


    return (
        <>
        <h1 className="text-center text-white text-3xl font-bold">{story.title}</h1>
        

        <section className="flex flex-col gap-3 lg:max-w-3xl lg:mx-auto text-white ">

         {
            story.content.map((str) => (
                <p  className="text-xl" key={str}>{str}</p>
            ))}
        </section>

        
        <section className="space-y-6 self-center w-full text-white lg:max-w-3xl"
        ><p className="text-left text-[#ff6500]">{likes} {likes === 1 ? "like " : "likes "}</p>
         
         {user && (<button  className="text-white border border-[#ff6500] px-4 py-2 rounded" onClick={likeStory}> Like Story

         </button>)}
         
         </section>

         
            {
                user ? (<StoryCommentsForm commentStory={commentStory}/>) :(
                    <p className="text-xl text-[#ff6500] text-center font-bold">

                        Log in to Comment or Like
                    </p>
                )
            }




         <StoryComments comments={comments}/>
        </>

        
    )
}

export    async function storyLoader({params}: LoaderFunctionArgs){
    const response = await axios.get("/api/stories/" + params.name)


    const {likes, comments} = response.data;
    return {likes, comments} ;
}         