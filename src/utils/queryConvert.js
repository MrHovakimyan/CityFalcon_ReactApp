const queryConvert = (queryStr) => {
  if (!queryStr) {
    return null;
  }

  const queryArr = queryStr.replace("?", "").split("&");
  const queryParams = {};

  for (let i = 0; i < queryArr.length; i++) {
    let qArr = queryArr[i].split("=");
    queryParams[qArr[0]] = qArr[1];
  }

  return queryParams;
};

export default queryConvert;
