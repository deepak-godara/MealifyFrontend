import { Ports } from "./Url";
export const GetCart = async (ClientId) => {
  const Data = await fetch(`${Ports}/${ClientId}/getcart`, {
    method: "GET",
  });
  const js = await Data.json();
  if (js.status === "200") {
    // console.log(js.Cart)
    const CartData = {
      HotelName: js.Cart.HotelName,
      HotelId: js.Cart.HotelId,
      Items: js.Cart.Items,
      BillDetails: {
        SubTotal: js.Cart.SubTotal,
        GST: js.Cart.GST,
        Total: js.Cart.Total,
        Delivery: js.Cart.Delivery,
      },
    };
    return { status: "success", Cart: CartData };
  } else {
    return { status: "fail" };
  }
};
