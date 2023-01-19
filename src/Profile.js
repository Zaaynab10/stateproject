import React from "react";
let count=0;
class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      profession:"Prof",
    fullName:"Name",
    bio:"bio",
    imgSrc:"link",
    shows:false,
  }
    }
  static getDerivedStateFromProps(props, state) {
    return {fullName: props.name,
      bio:props.bio,
      imgSrc:props.link,
      profession:props.prof,
    };
  }

  componentDidUpdate(){
   function showTime(){
    count++
    return console.log("le nombre de secondes est  "+count)
   }
   setInterval(showTime,1000)

  }


  


  render(){
   const rew=()=>{if(this.state.shows){return ( <div className="whole">
   <div className="fullName"> {this.state.fullName}</div>
        <div className="bio">{this.state.bio}</div>
         <div className="imgSrc">{this.state.imgSrc}</div>*
         <div className="prof">{this.state.profession}</div>
         </div>
   )
  }
  }
    const clickMe=()=>{
      this.setState({shows:true})
    
    }

    const wer=()=>{if(!this.state.shows){return ( <button onClick={clickMe}> WHO AM I ? </button>
           
      )
     }else{return (<button style={{visibility:"hidden"}}> WHO AM I ? </button>)}
     }
     
    

    return (
      
      <div className="myBtn">
       {wer()}
        {rew()}
      </div>
    )
  }
  }
  
export default Profile;