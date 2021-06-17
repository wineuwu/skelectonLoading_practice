const requestUrl = `https://api.pexels.com/v1/photos/2014422`;

document.addEventListener('DOMContentLoaded',async() => {
  const data = await fetchData(requestUrl);
  console.log(data);
 // insertContent();
  
})



const fetchData = async(requestUrl) => {
  const response = await fetch(requestUrl,{
    method: 'GET',
    headers: {
        'Authorization': `${config.PEXEL_API_TOKEN}`
      },
    }).then(res => res.json())

    
}