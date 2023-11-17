export const GetCart = async (ClientId) => {
  console.log("evve" + " " + ClientId);
  const Data = await fetch(`http://localhost:4000/${ClientId}/getcart`, {
    method: "GET",
  });
  const js = await Data.json();
  if (js.status === "200") {
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
