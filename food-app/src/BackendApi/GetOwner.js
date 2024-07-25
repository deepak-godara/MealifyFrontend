export const GetOwner = async (ClientId) => {
    const Data = await fetch(`http://localhost:4000/owner/${ClientId}/getowner`, {
      method: "GET",
    });
  
    
    // console.log(js)
    if (Data.status===200) {
        const js = await Data.json();
      const UserData = {
        _id:js.Data._id,
        UserName: js.Data.UserName,
        Email: js.Data.Email,
        HotelId:js.Data.HotelId
      };
      return { status: "success", User: UserData };
    } else {
      return { status: "fail" };
    }
  
  };