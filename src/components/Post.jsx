const Post = ({data}) => {
  return ( 
    <>
      <div className="card">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </>
   );
}
 
export default Post;