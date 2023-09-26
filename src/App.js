import './App.css';
import { Button } from 'reactstrap';

function App() {

  const randomColor =function(){
    const hex='0123456789ABCDEF'
    let color='#'

    for(let i=0;i<6;i++){
      color+= hex[Math.floor(Math.random() *16)];
    }

    return color;
  }

  let intervelId;
  const startChangingColor =function(){

    if(!intervelId){intervelId=setInterval(changeBodycolor,900);};
    

    function changeBodycolor(){document.body.style.backgroundColor=randomColor();}
    
  }

  const stopChangingColor =function(){

     clearInterval(intervelId);
     intervelId=null;
  }

  return (
    <>

    

     <div className="btns">

        <h2>JUST CLICK ON START AND SHOW MAGIC!</h2>
        <br></br>
       <Button color="dark mx-4" onClick={startChangingColor}>Start</Button>
       <Button color="dark" onClick={stopChangingColor}>Stop</Button>

    </div>

    </>
  );
}

export default App;
