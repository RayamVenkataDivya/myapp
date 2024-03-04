import './App.css';
import React from 'react';

function App() {
  var [tours,setTours]=React.useState([
    {
      img:"https://www.course-api.com/images/tours/tour-1.jpeg",
      title:"Best Of Paris In 7 Days Tour",
      price:1995,
      content:"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas"
    },
    {
      img:"https://www.course-api.com/images/tours/tour-2.jpeg",
      title:"Best Of Ireland In 14 Days Tour",
      price:3895,
      content:"Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's"
    },
    {
      img:"https://www.course-api.com/images/tours/tour-1.jpeg",
      title:"Best Of Salzburg & Vienna In 8 Days Tour",
      price:2695,
      content:"Let's go where classical music, towering castles, and the-hills-are-alive scenery"
    },
    {
      img:"https://www.course-api.com/images/tours/tour-4.jpeg",
      title:"Best Of Rome In 7 Days Tour",
      price:2095,
      content:"Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history"
    },
    {
      img:"https://www.course-api.com/images/tours/tour-5.jpeg",
      title:"Best Of Poland In 10 Days Tour",
      price:2595,
      content:"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace"
    }
  ])
  var [loader,setLoader]=React.useState(true)

  function delTour(i){
    tours.splice(i,1)
    setTours([...tours])
  }
  // function refresh(){
  //   return(
      React.useEffect(()=>{
        {
          loader && <h2>Loading...</h2>
        }

      },[tours.length===0])
  //   )
  // }

  if(tours.length===0){
    return(
      <div style={{textAlign:"center"}}>
        <h2>No Tours Left</h2>
        <button className="btn btn-primary">Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Our Tours</h1>
      {
        tours.map((tour,i)=>{
          return (
             <div className="m-4 text-center">
             <img style={{ width: "40%", height: "50%" }} src={tour.img} alt="" />
             <div>
                 <h6>{tour.title}</h6>
                 <h5 className="text-info">${tour.price}</h5>
             </div>
             <p>{tour.content}</p>
             <button className="btn btn-outline-danger" onClick={()=>{delTour(i)}}>Not interested</button>
         </div>
          )
        })
      }
      
    </div>
  );
}

export default App;
