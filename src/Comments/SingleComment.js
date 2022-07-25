import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const SingleComment = () => {

    const { id, article} = useParams ();
    const { data: comment, error, isPending } = useFetch(`http://localhost:8000/comments/${article}`);

    return (
        <div className="single-comment">            
            { isPending && <div>Loading... </div>}
            { error && <div>{ error }</div>}
            { comment && comment.map((item) => (
                    <div>
                    <p>Stworzony przez: {item.user}</p>
                    <p>{item.body}</p>
                    <p>{item.date}</p>
                    </div>
            ))}
        </div>
    );
}
 
export default SingleComment;