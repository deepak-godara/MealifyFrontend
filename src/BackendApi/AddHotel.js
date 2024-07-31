import { Ports } from "./Url";
export const AddHotel = async (Datas, OwnerId) => {
  const res = await fetch(`${Ports}/owner/${OwnerId}/addhotel`, {
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
