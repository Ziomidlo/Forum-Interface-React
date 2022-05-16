import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const CommentDelete = () => {

    const { id } = useParams();
    const { data: comment, error, isPending } = useFetch('http://localhost:8000/comments');
    const history = useHistory();

    const handleClick = () => {
           fetch('http://localhost:8000/comments', {
        method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    
    }

    return (
        <div className="comment-delete">
            { isPending && <div>Usuwanie...</div> }
            { error && <div>{ error }</div> }
            { comment &&           
                <comment>
                    <div>{ comment.user }</div>
                    <div>{ comment.body }</div>
                    <button onClick = { handleClick }>usun</button>                   
                </comment>              
            }
        </div>
     );
}
 
export default CommentDelete;