export const AddHotel = async (Datas, OwnerId) => {
  const res = await fetch(`http://localhost:4000/owner/${OwnerId}/addhotel`, {
    method: "POST",
    body: JSON.stringify({
      HotelData: Datas,
    }),
    headers: { "Content-type": "application/json" },
  });
  const Data = res.json();
  if (Data.status === "200") {
    return true;
  } else {
    return false;
  }
};
