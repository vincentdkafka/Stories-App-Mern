import StoriesList from "../StoriesList";
import stories from "../data/content"

export default function StoryListPage(){
    return <StoriesList stories={stories}/>;
}