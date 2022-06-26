import React, { useState } from "react";

export default function DataMarkUp({ data }) {
  const [showDescription, setShowDescription] = useState(false);

  let scoreColor = "green";
  if (data.score < 20) {
    scoreColor = "red";
  } else if (data.score < 50) {
    scoreColor = "orange";
  }

  return (
    <div className="dataMarkUp" key={data.id}>
      <div className="dataMarkUp-info">
        <div className="dataMarkUp-info-text">
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="dataMarkUp-info-text-title"
          >
            {data.title}
          </a>

          {showDescription && (
            <div className="dataMarkUp-info-text-description">{data.description}</div>
          )}

          {/* Domain name and published time */}
          <div className="dataMarkUp-domainInfo">
            <img src={data.domain_cached_logo_url} alt="Logo" className="dataMarkUp-img"></img>
            <div className="dataMarkUp-domainNameTime">{data.domain_name}</div>
            <div className="dataMarkUp-domainNameTime">
              {new Date(data.publishTime).getUTCHours() + "h"}
            </div>
          </div>
        </div>

        {/* Score and button for opening description */}
        <div className="dataMarkUp-info-score-wrpr">
          <div
            className={`dataMarkUp-score-wrpr-score dataMarkUp-info-score-wrpr-score-${scoreColor}`}
          >
            {data.score + "%"}
          </div>
          <button
            className="dataMarkUp-info-score-wrpr-scoreBtn"
            onClick={() => {
              setShowDescription(!showDescription);
            }}
          >
            {showDescription ? (
              <>
                <i className="fa fa-chevron-up"></i>
              </>
            ) : (
              <>
                <i className="fa fa-chevron-down"></i>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Like / Dislike / Bookmark */}
      {showDescription && (
        <div className="dataMarkUp-bookmarks">
          <button className="dataMarkUp-bookmarks-btn">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span className="dataMarkUp-bookmarks-btn-txt">Like</span>
          </button>
          <button className="dataMarkUp-bookmarks-btn">
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
            <span className="dataMarkUp-bookmarks-btn-txt">Dislike</span>
          </button>
          <button className="dataMarkUp-bookmarks-btn">
            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
            <span className="dataMarkUp-bookmarks-btn-txt">Bookmark</span>
          </button>
        </div>
      )}
    </div>
  );
}
