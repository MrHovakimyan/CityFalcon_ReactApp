import React from "react";

export default function dataMarkUp(data) {
  return (
    <div className="dataMarkUp">
      <div className="dataMarkUp-info">
        <a href={data.url} className="dataMarkUp-title">
          {data.title}
        </a>
        <div className="dataMarkUp-domainInfo">
          <img src={data.domain_cached_logo_url} alt="Logo" className="dataMarkUp-img"></img>
          <div className="dataMarkUp-domainNameTime">{data.domain_name}</div>
          <div className="dataMarkUp-domainNameTime">
            {new Date(data.publishTime).getUTCHours() + "h"}
          </div>
        </div>
      </div>
      <div className="dataMarkUp-score-wrpr">
        <div>{data.score}</div>
        <button>v</button>
      </div>
    </div>
  );
}
