import PropTypes from "prop-types";

function Profile(props) {
    return (
        <div style={props.style}>
            <h1>Name : {props.name}</h1>
            <p>Bio : {props.bio}</p>
            <p>Profession : {props.job}</p>
            <button onClick={() => props.func(props.name)}>Click me</button>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string
   };

export default Profile;

