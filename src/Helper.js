export const getQueryString = (query) => {
  let newUrl = ''
  Object.keys(query).forEach((key) => {
    newUrl = `${newUrl}${newUrl === '' ? '?': '&'}${key}=${query[key]}`
  });
  return newUrl;
}

export const getQueryObj = (data) => {
  return JSON.parse('{"' + data.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { 
    return key === "" ? value : decodeURIComponent(value) 
  })
}