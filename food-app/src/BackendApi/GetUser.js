export const GetUser = async (ClientId) => {
  const Data = await fetch(`http://localhost:4000/${ClientId}/data`, {
    method: "GET",
  });

  const js = await Data.json();
  console.log(js)
  if (js.status === "200") {
    const UserData = {
      _id:js.Data._id,
      Address:js.Data.Address,
      Orders:js.Data.Orders,
      UserName: js.Data.UserName,
      Email: js.Data.Email,
      PhoneNo: js.Data.PhoneNo,
      DOB: js.Data.DOB,
      Gender: js.Data.Gender,
      ForeGroundImage: js.Data.ForeGroundImage,
      BackGroundImage: js.Data.BackGroundImage,
      CurrentActiveAddress:js.Data.CurrentActiveAddress
    };
    return { status: "success", User: UserData };
  } else {
    return { status: "fail" };
  }

};
