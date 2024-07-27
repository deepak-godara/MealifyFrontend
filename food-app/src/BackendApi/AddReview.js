export const AddReview = async () => {
  // console.log(Profile);
  console.log("hiiiiid")
  const Data = await fetch(`http://localhost:4000/review/add`, {
    method: "POST",
    body: JSON.stringify({
      HotelId: "669d48abf270c33dbffccf6f",
      UserId: "669be9d8f288d7adc7ba0039",
      Rating: 1,
      Review: "very good",
    }),
    headers: { "Content-type": "application/json" },
  });
  if (Data.status === "200") {
    console.log("yes");
    return true;
  } else {
    return false;
  }
};
