import React from 'react'
class  Cprops extends React.Component
{
    constructor(props){
    super(props)
    console.log(props)
    this.state={
       
    }
}

render()
{
    return(
        <div>hi<center>
 <table>
    <tr>
        <th>id</th>
        <th>title</th>
        <th>task</th>
    </tr>
 {this.props.arr.map((val)=>(
    <tr>
        <td>{val.id}</td>
        <td>{val.title}</td>
        <td>{val.task}</td>
        
        
    </tr>
))} 
</table>
</center> 

        </div>
    )
}

}
export default Cprops


































































// import React from "react";
// import Fp from "./Classcom/Fp";

// class  App extends React.Component
//  {
//   constructor(){
//     super()
//     this.state={
//       name1:'kalpshah'
//     }
//   }
 
//   render() 
//   { 

//     return (
//       <div> <Fp name={this.state.name1}/></div>
//     );
//   }
// }
 
// export default App
