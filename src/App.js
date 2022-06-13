import logo from './logo.svg';
import './App.css';
import { Parallax } from 'react-parallax';

function App() {

  const image1 = "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  const image2 = "https://images.unsplash.com/photo-1588862081167-d5b98006637e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhdG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  const image3 = "https://images.unsplash.com/photo-1583440194369-ac78b451536a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhdG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"

  const mystyle = {
    height: "500px",
    padding: "10px",
    fontFamily: "Arial",
    height: "100vh"
  };

  const inline = {
    background: "#fff",
    left: "50%",
    top: "50%",
    position: "absolute",
    color: "black",
    padding: "20px"

  }

  return (
    <div className="App">

      <Parallax bgImage={image1} strength={700}>
        <div style={mystyle}>
         <div style={inline}>HTML inside the parallax</div>
        </div>
        
      </Parallax>
      
      <Parallax bgImage={image2} blur={{ min:-1, max:5}}>
        <div style={mystyle}>
         <div style={inline}>Dynamic blur</div>
        </div>
        
      </Parallax>

      <Parallax bgImage={image1} strength={200}
        renderLayer={percentage => (
          <div style= {{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `rgba(255, 123, 23, ${percentage}) `,
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) scale(${percentage * 5})`
            
          }}>
          </div>
        )}>
        <div style={mystyle}>
         <div style={inline}>HTML inside the parallax</div>
        </div>
        
      </Parallax>
    
    </div>
  );
}

export default App;
