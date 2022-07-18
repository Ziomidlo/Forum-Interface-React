import CommentsList from "./CommentList";
import useFetch from "../useFetch";

const CommentSite = () => {

    const { data: comments, isPending, error } = useFetch('http://localhost:8000/comments')
    return (
        <div className="CommentSite">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { comments && <CommentsList comments = { comments }/>}
        </div>
    );
}
 
export default CommentSite;