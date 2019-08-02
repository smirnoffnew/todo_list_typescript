import React from 'react';
import { Paper } from "@material-ui/core";
import  NewTask  from './components/NewTask'
import TaskList from './components/TaskList'

const App: React.FC = () => {
  
  return (
    <Paper 
      component="div" 
      elevation={2} 
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
        padding: "2%",}} 
    >
      <div style={{
        height: "30rem",
        display: 'flex', 
        flexDirection: 'row', 
        alignItems:'flex-start', 
        justifyContent: 'flex-start',
        alignContent: 'stretch',
      }}
      >
        <div style={{
          height: "100%",
          width: '30%', 
          paddingRight: '2%',
          borderRight: '2px solid #cccccc'}}
        >
          <NewTask />
        </div>
        <div style={{ 
          height: "100%", 
          width: '70%', 
          paddingLeft: '2%', }}
        >
          <TaskList />
        </div>
      </div>
    </Paper>
  );
}

export default App;
