
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./Portfolio";




function App() {
  return (
    <div className="body">
      
       <Header   />
       
      
      <br></br>
      <Portfolio 
      section="Moose Yetis"
      source1="./MooseYeti2.jpg" 
      source2="./MooseYeti1.jpg"  
      source3="./MooseYeti3.jpg"/>
      <Portfolio
      section="Cozy"
      source1="Cozy1.jpg"
      source2="Cozy2.jpg"
      source3="Cozy3.jpg"
      />
       <Footer   />


    
    </div>
  );
}

export default App;
