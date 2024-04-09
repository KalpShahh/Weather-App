import React from "react";
class Ccountp extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleclick1=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleclick2=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    
    render()
    {
        return(
            <div><center>
                <button onClick={()=>{this.handleclick1()}}>+++</button>
                <button onClick={()=>{this.handleclick2()}}>---</button>
                {this.state.count}
                </center></div>
        )
    }
}
export default Ccountp