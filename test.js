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
  dateBS = DateBS.fromAD();
  console.log(dateBS);
  console.log(dateBS.toAD());
    console.log(dateBS.financialYear());
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

function testtoAD()
{
  console.log(DateToAD("2077-03-30"))
}

function testtoBS()
{
  console.log(DateToBS("2020-07-01"))
}

function testUserInfo()
{
console.log(Session.getActiveUser().getEmail());
}
