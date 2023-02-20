import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useAppContext } from "../context/appContext";

export default function Inbox() {
  const { user, conversations, getUserConversations } = useAppContext();

  const getConv = () => {
    getUserConversations();
  };

  const handleUserId = () => {
    console.log(user);
  };

  return (
    <div className="inbox-container">
      <div className="inbox">
        <div className="msg selected-bg anim-y">
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            className="members mail-members"
          />
          <div className="msg-content">
            <button onClick={getConv}>fdfd</button>
            <button onClick={handleUserId}>user</button>
            <p className="py-[1px] text-sm">Natalie Smith</p>
            <div className="msg-title">Write an articke about design</div>
            <div className="msg-date">22 Feb, 2019</div>
          </div>
          <FiberManualRecordIcon color="primary" sx={{ marginLeft: "auto" }} />
        </div>
        <div className="msg selected-bg anim-y">
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            className="members mail-members"
          />
          <div className="msg-content">
            <div className="msg-title">Write an articke about design</div>
            <div className="msg-date">22 Feb, 2019</div>
          </div>
        </div>
      </div>
    </div>
  );
}
