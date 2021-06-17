const requestUrl = `https://api.pexels.com/v1/photos/2014422`;

document.addEventListener('DOMContentLoaded',async() => {
  const data = await fetchData(requestUrl);
  const {res, status} = data;
  if(status === 200){
    insertContent(res,status)
  }
  
  
  setTimeout(fakeDataLoading(),5000)
})
const img = document.querySelector('.item__pic');
const title = document.querySelector(' .item_title ');
const author = document.querySelector(' .item_author ');
const txt = document.querySelector(' .item_txt ');
const content = [
  img,
  title,
  author,
  txt
]

const insertContent = (res,status) => {
    const { photographer, src } = res;
    const { large } =src;

    content.map(item =>{item.classList.remove('isLoading');})
    img.innerHTML =`<img src='${large}' alt="我是圖片" />`
 //   img.innerHTML =`<img src="https://fakeimg.pl/1000x1000">`
    author.innerHTML =`${photographer}`
    //author.innerHTML =`i am  photographer`
    title.innerHTML ='I m title'
    txt.innerHTML ='Lorem ipsum dolor sit amet,consectetur adipisicing elit. Vitae nobisLorem ipsum dolor sit amet,consectetur adipisicing elit. Vitae nobis'

}


const fakeDataLoading = () => {
  content.map(item =>{item.classList.remove('isLoading');})
 
  img.innerHTML =`<img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?cs=srgb&dl=pexels-kaique-rocha-598917.jpg&fm=jpg">`
  author.innerHTML ='Kaique Rocha'
  title.innerHTML ='Camera'
  txt.innerHTML ='Lorem ipsum dolor sit amet,consectetur adipisicing elit. Vitae nobisLorem ipsum dolor sit amet,consectetur adipisicing elit. Vitae nobis'

}

const fetchData = async(requestUrl) => {
  const response = await fetch(requestUrl,{
    method: 'GET',
    headers: {
        'Authorization': `${config.PEXEL_API_TOKEN}`
      },
    })

    const status = response.ok;  
    const res = await response.json();
    return { res , status };    
}