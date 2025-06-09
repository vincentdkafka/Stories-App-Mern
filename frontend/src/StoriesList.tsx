import { Link } from "react-router-dom";

interface Story {
    name: string;
    title: string;
    content: string[]
}


interface StoriesListProps{
    stories: Story[]
}



export default function StoriesList ({stories} : StoriesListProps){
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-12">
           {
            stories.map((story) =>(
                <div
                key={story.name} 
                className=" bg-[#1E3E62] text-white px-4 py-6 flex flex-col gap-y-4 rounded ">
                    <h3 className="text-bold text-xl">
                        {story.title}
                    </h3>
                    <p>{story.content[0].substring(0, 100) + " ..."}</p>
                    <Link className="text-1g px-3 py-1.5 bg-[#0B192C] rounded self-start" 
                        to={"/stories/" + story.name}> Read More</Link>
                </div>
            ))
           }
        </section>
    )
}