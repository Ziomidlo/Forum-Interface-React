const CommentList = ({comments, handleDelete}) => {

    return (
        <div className="comment-list">
            <h2>Sekcja Komentarzy</h2>          
            {comments.map((comment) => (
                <div className="comment-preview" key={comment.id}>
                    <p>Stworzony przez: { comment.user }</p>
                    <p>{ comment.body }</p>
                </div>
            ))}
            </div>
    );
}
 
export default CommentList;