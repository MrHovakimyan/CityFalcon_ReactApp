import React, { useState } from "react";
import thumbUp from "../media/thumbUp.png";
import thumbDown from "../media/thumbDown.png";
import bookmark from "../media/bookmark.png";

export default function DataMarkUp({ data }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="dataMarkUp" key={data.id}>
      <div className="dataMarkUp-info">
        <a href={data.url} target="_blank" rel="noreferrer" className="dataMarkUp-title">
          {data.title}
        </a>
        {showDescription && <div className="dataMarkUp-description">{data.description}</div>}
        <div className="dataMarkUp-domainInfo">
          <img src={data.domain_cached_logo_url} alt="Logo" className="dataMarkUp-img"></img>
          <div className="dataMarkUp-domainNameTime">{data.domain_name}</div>
          <div className="dataMarkUp-domainNameTime">
            {new Date(data.publishTime).getUTCHours() + "h"}
          </div>
        </div>
        {showDescription && (
          <div className="dataMarkUp-info-bookmark">
            {
              <>
                <button className="dataMarkUp-info-bookmark-btn">
                  <img src={thumbUp} alt="Thumb-Up" className="dataMarkUp-info-bookmark-thumbs" />
                </button>
                <div>Like</div>
              </>
            }
            {
              <>
                <button className="dataMarkUp-info-bookmark-btn">
                  <img src={thumbDown} alt="Thumb-Up" className="dataMarkUp-info-bookmark-thumbs" />
                </button>
                <div>Dislike</div>
              </>
            }
            {
              <>
                <button className="dataMarkUp-info-bookmark-btn">
                  <img src={bookmark} alt="Thumb-Up" className="dataMarkUp-info-bookmark-thumbs" />
                </button>
                <div>Bookmark</div>
              </>
            }
          </div>
        )}
      </div>
      <div className="dataMarkUp-score-wrpr">
        <div className="dataMarkUp-score-wrpr-score">{data.score + "%"}</div>
        <button
          className="dataMarkUp-score-wrpr-scoreBtn"
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          {showDescription ? <>^</> : <>v</>}
        </button>
      </div>
    </div>
  );
}
