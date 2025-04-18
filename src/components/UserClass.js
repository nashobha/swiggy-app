import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

   componentDidMount() {
    this.timer = setInterval(()=>{
      console.log("Namaste React OP");
    },1000);
    console.log("Child componentDidMount is called");
   
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component did Unmount");
  }
  
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location :{location}</h3>
        <h4>Contact : @nashobha</h4>
      </div>
    );
  }
}

export default UserClass;
