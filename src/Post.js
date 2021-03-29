import './Post.css';

export default function Post({ info }){
    const { userId, title, body } = info;

    return (
      <div className="post">
        <div>
          <span className="post-title">User</span>
          {` ${userId}`}
        </div>
        <div>
          <span className="post-title">Title</span>
          {` ${title}`}
        </div>
        <hr/>
        <div>
          <span className="post-title">Body</span>
          {` ${body}`}
        </div>
      </div>
    );
}