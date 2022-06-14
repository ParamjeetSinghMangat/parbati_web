async function getFarmer() {
  var mobile_no = document.getElementById("farmer_mobileno").value;

  var result = await fetch("http://localhost:3000/farmer/find", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ test: "test" }),
  });

  responseData = await result.json();

  console.log(responseData);
}
