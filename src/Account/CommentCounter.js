import useFetch from "../useFetch";

const CommentCounter = () => {

    const { data: comment, error} = useFetch('http://localhost:8000/comments/');

    return ( 
        <div className="comment-counter">
            { error && <div>{ error }</div> }      
            { comment && (
                <comment>
                <h3>Ilość napisanych komentarzy: {comment.length}</h3>    
                </comment>
            )}
        </div>
    );
}
 
export default CommentCounter;