import React from "react";

export const AnimeInfo = (props) => {
  const {
    title,
    images: {
      jpg: { large_image_url },
    },
    source,
    rank,
    score,
    popularity,
    members,
    status,
    rating,
    duration,
  } = props.animeInfo;
  return (
    <>
      <div className="anime-content">
        <h3>{title}</h3>
        <br />
        <img src={large_image_url} alt="" />
        <br />
        <br />
        <div className="info">
          <h3>#Rank: {rank}</h3>
          <h3>#Skor: {score}</h3>
          <h3>#Popülarite: {popularity}</h3>
          <hr />
          <br />
          <h4>Üyeler:{members}</h4>
          <h4>Kaynak:{source}</h4>
          <h4>Süre:{duration}</h4>
          <h4>Statü:{status}</h4>
          <h4>Fame:{rating}</h4>
        </div>
      </div>
    </>
  );
};
