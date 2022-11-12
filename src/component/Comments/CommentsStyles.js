import styled from "styled-components"

// .comments {
//   @include themify($themes) {
//     img {
//       width: 40px;
//       height: 40px;
//       border-radius: 50%;
//       object-fit: cover;
//     }

//     .write{
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       gap: 20px;
//       margin: 20px 0px;

//       input{
//         flex:5;
//         padding: 10px;
//         border: 1px solid themed("border");
//         background-color: transparent;
//         color: themed("textColor");
//       }

//       button{
//         border: none;
//         background-color: #5271ff;
//         color: white;
//         padding: 10px;
//         cursor: pointer;
//         border-radius: 3px;
//       }
//     }

//     .comment {
//       margin: 30px 0px;
//       display: flex;
//       justify-content: space-between;
//       gap: 20px;

//       .info {
//         flex:5;
//         display: flex;
//         flex-direction: column;
//         gap: 3px;
//         align-items: flex-start;

//         span {
//           font-weight: 500;
//         }

//         p{
//           color:themed("textColorSoft")
//         }
//       }

//       .date{
//         flex:1;
//         align-self: center;
//         color: gray;
//         font-size: 12px;
//       }
//     }
//   }
// }

export const CommentContainer = styled.div`
border-radius:5px;
      button{
            border: none;
            background-color: var(--main);
            color: white;
            padding: 10px;
            cursor: pointer;
            border-radius: 3px;
            
          }
`

export const CommentBox = styled.div`
      margin: 30px 0px;
      display: flex;
      justify-content: space-between;
      gap: 20px;

            .info {
        flex:5;
        display: flex;
        flex-direction: column;
        margin:0 1rem;
        align-items: flex-start;

        span {
              font-weight: 500;
            }

            p{
                color:var(--main);
            }

            .date{
                  flex:1;
                  align-self: center;
                  color: gray;
                  font-size: 12px;
                }
`

export const ImageContainer = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

export const WriteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 20px 0px;
`

export const InputContainer = styled.input`
    border:1px solid var(--main);
     flex:5;
    padding: 10px;
    background-color: transparent;
    color: var(--main);
    margin:0 1rem;
    border-radius:5px;
    outline:none;

`