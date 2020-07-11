function createPostRequest(data)
{
  let request = {
    "postData": {
    "contents": JSON.stringify(data)
    }
  };
  return request;
}

function createGetRequest(data)
{
  let request = {
    "parameters": data
  }
  return request;
}

function testGetMonth() {
  console.log(getMonthInYear(2000));
}

function testGetYear() {
  console.log(getDaysInMonth(2000,1));
}

function today()
{
  dateBS = new DateBS();
  console.log(dateBS.fromAD());
  console.log(dateBS.toAD());
}

function testServer()
{
  data = {"dateAD":"2020-07-01"};
  request = createPostRequest(data);
  //console.log(request);
  console.log(doPost(request));
  request = createGetRequest(data);
  //console.log(request);
  console.log(doGet(request));
}