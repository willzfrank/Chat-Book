import { useContext, useState } from "react";
import moment from "moment";
import {ImageContainer, WriteContainer, InputContainer, CommentContainer,CommentBox} from "./CommentsStyles.js"
import image from "../../assets/avatar2.png"

// const Comments = ({ postId }) => {
//   const [desc, setDesc] = useState("");
//   const { currentUser } = useContext(AuthContext);

//   const { isLoading, error, data } = useQuery(["comments"], () =>
//     makeRequest.get("/comments?postId=" + postId).then((res) => {
//       return res.data;
//     })
//   );

//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     (newComment) => {
//       return makeRequest.post("/comments", newComment);
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["comments"]);
//       },
//     }
//   );

//   const handleClick = async (e) => {
//     e.preventDefault();
//     mutation.mutate({ desc, postId });
//     setDesc("");
//   };

//   return (
//     <div className="comments">
//       <div className="write">
//         <img src={"/upload/" + currentUser.profilePic} alt="" />
//         <input
//           type="text"
//           placeholder="write a comment"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <button onClick={handleClick}>Send</button>
//       </div>
//       {error
//         ? "Something went wrong"
//         : isLoading
//         ? "loading"
//         : data.map((comment) => (
//             <div className="comment">
//               <img src={"/upload/" + comment.profilePic} alt="" />
//               <div className="info">
//                 <span>{comment.name}</span>
//                 <p>{comment.desc}</p>
//               </div>
//               <span className="date">
//                 {moment(comment.createdAt).fromNow()}
//               </span>
//             </div>
//           ))}
//     </div>
//   );
// };

const Comments = ()=>{
  return(
  <CommentContainer className="comments">
       <WriteContainer className="write">
         <ImageContainer src={image} alt="" />
            <InputContainer
                type="text"
                placeholder="write a comment"
                // value={desc}
                // onChange={(e) => setDesc(e.target.value)}
              />
            <button>Send</button>
        </WriteContainer>
           <CommentBox className="comment">
              <ImageContainer src={image} alt="" />
                <div className="info">
                  <span>ipsum dolor</span>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius quo placeat ullam sapiente architecto veniam quam, sequi velit tenetur vero. 
                    Quo asperiores ut ab doloribus culpa inventore optio itaque molestiae.</p>
                </div>
                  <span className="date">
                    {/* {moment(comment.createdAt).fromNow()} */}
                    12-02-24
                  </span>
            </CommentBox>
    </CommentContainer>
  )
}

export default Comments;
