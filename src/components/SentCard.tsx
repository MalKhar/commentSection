import BtnArea from "./BtnArea";
import data from "../data/data.json";

function SentCard() {
  const customData = data;

  return (
    <div className="sentCard">
      <div className="score">{<BtnArea />}</div>
      <div className="contentBox">
        <div className="userAvatar">
          <img
            src={customData.comments[0].user.image.png}
            alt=""
            className="profilePic"
          />
          <span className="name">{customData.comments[0].user.username}</span>
          <span className="postedAt">{customData.comments[0].createdAt}</span>
        </div>
        <span className="content">{customData.comments[0].content}</span>
      </div>
    </div>
  );
}

export default SentCard;
