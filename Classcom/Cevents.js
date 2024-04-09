
import React from "react";
class Cevents extends React.Component
    {
        constructor(){
        super()
        this.state={

        }
    }
    handleclick1(){
        alert('click1')
        console.log('this',this)
    }
    render()
    {
        return(
            <div>
                <center>
                    <button onClick={()=>{this.handleclick1()}}>button1</button>
                    <button>button2</button>
                    </center>
            </div>
        );
    }
}
export default Cevents;