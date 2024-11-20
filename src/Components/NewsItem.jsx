import React from 'react';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", margin: "10px auto" }}>
      <img 
        src={src || "https://via.placeholder.com/345"} 
        style={{ height: "200px", width: "100%" }}
        className="card-img-top" 
        alt={title || "News image"} 
      />
      <div className="card-body">
      <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled"}</h5>
      <p className="card-text">{description ? description.slice(0, 90) : "No Description Available"}</p>

        <a 
          href={url || "#"} 
          className="btn btn-primary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click for more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
