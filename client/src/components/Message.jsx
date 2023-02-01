import MailIcons from "./MailIcons";
import MessageContent from "./MessageContent";
import MessageReply from "./MessageReply";

export default function Message() {
  return (
    <div className="mail-detail">
      <div className="mail-detail-header">
        <div className="mail-detail-profile">
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            className="members inbox-detail"
          />
          <div className="mail-detail-name">Natalie Smith</div>
        </div>
        <MailIcons />
      </div>
      <div className="mail-contents">
        <div className="mail-contents-subject">
          <div className="mail-contents-title">
            Write an article about design
          </div>
        </div>
        <MessageContent />
      </div>
      <MessageReply />
    </div>
  );
}
