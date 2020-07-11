function convert(data)
{
  if (data.dateAD)
    {
        let date = DateBS.fromAD(new Date(data.dateAD));
        console.log("converted log from AD "+date.dateAD+" to BS "+ date);
        return date;
    }
    else if (data.dateBS)
    {
        let date = DateBS.fromString(data.dateBS);
        console.log("converted date in BS "+ date + " to AD " + date.toAD());
        return date.toAD();
    }
    else
    {
        let date = DateBS.fromAD();
        console.log("todays date: "+ date);
        return date;
    }
}

function doGet(request)
{
    console.log(request.parameters);
    let data = request.parameter;
    let date = convert(data);
    output = ContentService.createTextOutput(date.toString()).setMimeType(ContentService.MimeType.TEXT);
    return output;
}

function doPost(request)
{
    let data = JSON.parse(request.postData.contents);
    console.log(data);
    let date = convert(data);
    return ContentService.createTextOutput(JSON.stringify({date:date})).setMimeType(ContentService.MimeType.JSON);
}

