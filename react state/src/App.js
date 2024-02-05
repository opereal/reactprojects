import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this ia a person profile data
      person: {
        fullName: 'Uzor Emmanuel',
        bio: 'Am emmanuel more known as Manuel, am a web developer with a high skills. I gain some of my knowladge from Gomycode with the help of Mr Emmanuel Tosin. ',
        imgSrc: 'https://floqast.com/wp-content/uploads/2023/01/iStock-1148960878.jpg',
        profession: 'Software Engineer',
      },
      // this is use to hide the profile data 
      show: false,
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  // this is where i destructure the props to shorten it  
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show} = this.state;


    // this is the first display u see on the page which carrys only the title and the button
    return (
      <div style={{marginLeft:"200px"}}>
        <h1>St Manuel info</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide State' : 'Show State'}
        </button>

        {show && (

          // this is this what will help display the data props 
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} style={{width:"200px", height:"200px"}} />
            <p>Profession: {profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

