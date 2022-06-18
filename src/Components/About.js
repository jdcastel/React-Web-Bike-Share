import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class About extends Component {
    render() {
        return <div><Card>
  <Card.Header>About</Card.Header>
  <Card.Body>
    <Card.Title>All about me - Juan Castelblanco Developer</Card.Title>
    <Card.Text>
     I am currently studying Computer Programming and Analysis advanced diploma program at Seneca College, I have participated in intensive training in the latest technology in the IT field and have developed strong programming skills using C, C++, VBScript, jQuery, AJAX, Bootstrap, JavaScript, React, Microsoft .NET, and UNIX Shell Script. Especially with the new development tools, Visual Studio and Visual Studio Code from Microsoft. I have also had the opportunity to develop other essential areas of programming including database usage and management using MySQL, MS SQL, and MongoDB.
    I have developed my organizational and teamwork skills by always looking for ways to work efficiently, accurately, and self-motivated. In addition, I seek to always successfully handle many stressful situations and skillfully resolve them under time pressure.
    </Card.Text>
  </Card.Body>
</Card></div>
    }
}

export default About;