interface Props {
  username: string;
  description: string;
  file: string | undefined;
}

const Post = ({ username, file, description }: Props) => {
  return (
    <div className="row bg-body-secondary ">
      <div className="col bg-primary-subtle">
        <img
          className="mh-100 w-50"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
        <h2>{username}</h2>
      </div>
      <div className="col-9 bg-danger-subtle">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Post;
