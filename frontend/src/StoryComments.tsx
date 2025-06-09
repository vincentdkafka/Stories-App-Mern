interface Comment{
    writtenBy: string; 
    content: string
}

export default function StoryComments({ comments}:{ comments: Comment[]} ){
    return(
        <section className="self-center w-full text-white lg:max-w-3xl space-y-6">
            <h3 className="text-2xl font-bold">Comments</h3>

              {
                comments.map((comment) =>(
                    <div key={comment.content}
                    className="space-y-2 border-l-4 border-[#ff6500] pl-4 py-2  ">

                        <h4 className="text-[#ff6500]">{comment.writtenBy}</h4>
                        <p className="text-gray-300">{comment.content}</p>
                    </div>
                ))
              }


        </section>
    )

}