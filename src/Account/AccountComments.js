import CommentList from "../Comments/CommentList";
import useFetch from "../useFetch";

const AccountComments = () => {

    const { data: comments, isPending, error } = useFetch('http://localhost:8000/comments')
    return (
        <div className="account-comments">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { comments && <CommentList comments = { comments }/>}
        </div>
    );
}
 
export default AccountComments;