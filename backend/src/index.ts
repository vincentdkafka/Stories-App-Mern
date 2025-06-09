import express, { Express, NextFunction, Request, Response } from "express"
import { Db, Collection, ServerApiVersion, MongoClient, ReturnDocument } from "mongodb";

import admin, { credential } from "firebase-admin"
import fs from "fs"

const credentials = JSON.parse(fs.readFileSync("./genKey.json", "utf8"))

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});


interface Comment {
    writtenBy : string;
    content: string;
}

interface Story{
    name: string;
    likes: number;
    comments: Comment[];
    likeIds? : string[]
}

// const stories:Story[] =[
//     {name: "echo", likes: 4, comments: []},
//     {name: "photograph", likes: 0, comments: []},
//     {name: "steel", likes: 0, comments: []},
//     {name: "visitor", likes: 0, comments: []},
//     {name: "song", likes: 0, comments: []},
// ];

let db: Db;
let dbCollection: Collection<Story>;
async function dbConnection(){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,

        },
    });


    await client.connect();

    db = client.db("DailyDay")

    dbCollection = db.collection<Story>("stories")
}

const app: Express = express();
app.use(express.json());


app.get("/api/stories/:name", async (req: Request, res: Response)=> {
   const { name } = req.params;
   const story = await dbCollection.findOne({name})

   res.json(story);
   
})

interface AuthRequest extends Request {
    user? : admin.auth.DecodedIdToken

}

app.use(async function(req: AuthRequest , res:Response , next: NextFunction){
    const {authtoken} = req.headers


    if (authtoken){
        const user = await admin.auth().verifyIdToken(authtoken as string)
        req.user = user
        next()
    }else{
        res.sendStatus(400);
    }
})

app.post("/api/stories/:name/like", async (req: AuthRequest, res: Response) =>{
    const { name } = req.params;


    const uid = req.user?.uid as string;

    const story = await dbCollection.findOne({name})

    const likeIds = story?.likeIds || [];

    const canLike = uid && !likeIds.includes(uid)

    if (canLike){
         const updatedStory = await dbCollection.findOneAndUpdate(
        {name},
        {
            $inc: {likes : 1},
            $push: { likeIds: uid},
        },

        {returnDocument: "after"}
    );

    res.json(updatedStory);
    } else
    res.sendStatus(403);

   
});






app.post("/api/stories/:name/comments", async (req: Request, res: Response) =>{
   const { name } = req.params;
   const { writtenBy, content }=req.body;
   const newComment = { writtenBy, content }
   
    const updatedStory = await dbCollection.findOneAndUpdate(
        {name},
        {
            $push: {comments:  newComment},
        },

        {returnDocument: "after"}
    );

    res.json(updatedStory);
    
});


async function initialize(){
    await dbConnection()

    app.listen(3000, () =>{
    console.log("server is up and running on port 3000")
})


}

initialize();



