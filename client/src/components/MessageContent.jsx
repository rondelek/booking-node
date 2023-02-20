export default function MessageContent() {
  return (
    <div className="mail">
      <div className="mail-time">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-clock"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        12 Mar, 2019
      </div>
      <div className="mail-inside">
        iquam a dui eu arcu hendrerit porta sed in velit. Fusce eu semper magna.
      </div>
      <div className="mail-assign">
        <div className="assignee">
          <strong>Okla Nowak</strong> assigned to Natalie Smith.
          <span className="assign-date">25 Nov, 2019</span>
        </div>
        <div className="assignee">
          <strong>Okla Nowak</strong> added to Marketing.
          <span className="assign-date">18 Feb, 2019</span>
        </div>
        <div className="assignee">
          <strong>Okla Nowak </strong> created task.
          <span className="assign-date">18 Feb, 2019</span>
        </div>
      </div>
      <div className="mail-doc">
        <div className="mail-doc-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-file-text"
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
          </svg>
          <div className="mail-doc-detail">
            <div className="mail-doc-name">Article.docx</div>
            <div className="mail-doc-date">added 17 May, 2020</div>
          </div>
        </div>
        <div className="mail-doc-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-download-cloud"
          >
            <path d="M8 17l4 4 4-4M12 12v9" />
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
          </svg>
        </div>
      </div>
    </div>
  );
}
