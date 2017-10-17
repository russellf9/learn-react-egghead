import React from 'react';
import PropTypes from 'prop-types';


const myCar = { registrationNumber: 'F1G56H', year: 2010};


class App extends React.Component {

    render() {
        return (
            <div>
                <Title text="Russell"/>
                <Person
                    firstName='Russell'
                    lastName='Wenban'
                    country="UK"
                    car={myCar}
                    gender="male"/>
            </div>
        )
    }
}


// stateless function Component
const Title  = (props) => <h1>Title =  { props.text }</h1>;

Title.propTypes = {
    text: PropTypes.string.isRequired
};


const Person = (props) => <div>
    <h1>{props.firstName} {props.lastName}</h1>
    {props.country ? <p>Country: {props.country}</p> : null}
    <div>
        <h2>{props.car.registrationNumber} {props.car.year} </h2>
    </div>
    <p>Gender: {props.gender}</p>
</div>;

Person.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    country: PropTypes.string,
    car: PropTypes.shape({
        registrationNumber: PropTypes.string,
        year: PropTypes.number
    }),
    gender: PropTypes.oneOf([
        'female', 'male'
    ])
};

Person.defaultProps = {
    country: 'UK'
};

export default App


