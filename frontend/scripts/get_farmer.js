async function getFarmer() {
  var mobile_no = document.getElementById("mobileno").value;

  var result = await fetch("http://localhost:3000/farmer/find", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobile_no }),
  });

  responseData = await result.json();

  // console.log(responseData[0].name);

  document.getElementById("farmer_name").value = responseData[0].name;
  document.getElementById("farmer_address").value = responseData[0].address;
  document.getElementById("farmer_land").value = responseData[0].land;
  document.getElementById("farmer_mobileno").value = responseData[0].mobileno;
  document.getElementById("farmer_id").value = responseData[0].farmer_id;
  document.getElementById("farmer_sr").value = responseData[0].id;
}

// update farmer to update data of farmer
// this function will get details of farmer from form and send request to server (backend) for updation
async function updateFarmer() {
  // getting data from form elements and save to respective variable
  var farmer_name = document.getElementById("farmer_name").value;
  var farmer_address = document.getElementById("farmer_address").value;
  var farmer_land = document.getElementById("farmer_land").value;
  var farmer_mobileno = document.getElementById("farmer_mobileno").value;
  var farmer_id = document.getElementById("farmer_id").value;
  var farmer_sr = document.getElementById("farmer_sr").value;

  // sending request to server as POST and store response in result veriable after completion of request
  var result = await fetch("http://localhost:3000/farmer/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      farmer_name,
      farmer_address,
      farmer_land,
      farmer_mobileno,
      farmer_id,
      farmer_sr,
    }),
  });

  // get json data from result and save in response data.
  responseData = await result.json();

  // if row count in response data is greater than 0, that means server updated record of farmer
  if (responseData.rowCount > 0) {
    alert("Farmer data updated");
  } else {
    alert("Farmer data not update");
  }
}
