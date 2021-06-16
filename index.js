const requestUrl = `https://api.pexels.com/v1/photos/2014422`;

document.addEventListener('DOMContentLoaded',async() => {
  const data = await fetchData(requestUrl);
  console.log(data);
  const { url, src,photographer } = data
  
  const { large } = src


  
})


const fetchData = async(requestUrl) => {
  const reponse =await fetch(requestUrl,{
    method: 'GET',
    headers: {
        //這邊需要驗證，所以要加上這行，沒有驗證的朋友就不用加了
        'Authorization': `${config.PEXEL_API_TOKEN}`
      },
    }).then(res => res.json())
    
  return reponse ;
}