export const AddAddress = async ({ Address, ClientId }) => {
  const Data = await fetch(`http://localhost:4000/${ClientId}/addaddress`, {
    method: "POST",
    body: JSON.stringify({
      Address: Address,
    }),
    headers: { "Content-type": "application/json" },
  });
  if (Data.status === "200") {
    return true;
  } else {
    return false;
  }
};
