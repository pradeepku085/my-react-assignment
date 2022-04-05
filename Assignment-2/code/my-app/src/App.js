import './App.css';


function App(props) {
 const {employee}=props;
    
return(
<div className="container">
  {/* Start your React code here */}
  <img src={employee.profileImg} alt="#"/>
  <div className="info">
  <h1>{employee.name}</h1>
    <p>Location</p>
    <p><strong>{employee.location}</strong></p>
    <p>BloodGroup</p>
    <p><strong>{employee.bloodGroup}</strong></p>
    <p>Age</p>
    <p><strong>{employee.age}</strong></p>
  </div>
</div>
)
}



export default App;
