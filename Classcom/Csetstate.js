import React from "react";
class Csetstate extends React.Component{
    constructor(){
        super()
        this.state={
            color:'red' 
        }
    }
    handleclick=()=>{
        this.setState({
            color:'blue'
        })

    }
  render()
    {
        return(
            <div>
                <center>
                    {this.state.color}
                    <button onClick={()=>this.handleclick()}>changecolor</button>

                </center>
            </div>
        )
    }
}
export default Csetstate