import React from "react";
import "./exploregrid.css";
const ExploreGrid = ({ restaurent }) => {
  const name = restaurent?.info?.name ?? "";
  const coverimg = restaurent?.info?.image?.url;
  const deliverytime = restaurent?.order?.deliveryTime;
  const rating = restaurent?.info?.rating?.rating_text;
  const approxprice = restaurent?.info?.cfo?.text;
  const offers = restaurent?.bulkOffers ?? [];
  const cuisins = restaurent?.info?.cuisins
    ?.map((items) => items.name)
    .slice(0, 3);
  const bottomContainers = restaurent?.bottomContainers || [];
  const goldoff = restaurent?.gold?.text;
  const prooff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;
  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverimg} alt={name} className="exlore-card-image" />
        <div className="deliverytime">{deliverytime}</div>
        {prooff && <div className="pro-off"></div>}
        {goldoff && <div className="gold-off absolute-center"></div>}
        {discount && <div className="discount">{discount}</div>}
      </div>

      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className=" res-rating absolute-center">
            {rating}
            <i class="material-symbols-outlined">grade</i>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisins && (
          <div className="res-cuisins">
            {cuisins.map((items, i) => {
              return (
                <span className="res-cuisins-tag">
                  {items}
                  {i != cuisins.lenght - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxprice && <div className="res-price">{approxprice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
          <img
            src={bottomContainers[0]?.image?.url}
            alt={bottomContainers[0]?.text}
            style={{ height: "18px" }}
          />
          <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  )};

export default ExploreGrid;
