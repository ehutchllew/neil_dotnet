import { useEffect, useState } from 'react';
import {  Container, List } from 'semantic-ui-react';
import { NavBar } from '../../features/nav/NavBar';

function App() {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/activities').then(response => response.json()).then(json => setActivities(json))
  }, [])
  return (
    <div>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <List>
          {activities.map(activity => <List.Item key={activity.id}>{activity.title}</List.Item>)}
        </List>
      </Container>
    </div>

  );
}

export default App;
