import React, { Component } from 'react'
import { TextField, Button, Typography } from "@material-ui/core";
import { connect } from 'react-redux';
import { AppState } from "../store";

import { TaskState } from "../store/tasks/types";
import { addTask } from "../store/tasks/actions";


export interface NewTaskProps{
    taskList: TaskState;
    addTask: typeof addTask;
}
export interface NewTaskState{
    isAddButtonDisabled: boolean;
    taskAlreadyExistsMessage: boolean;
}

class NewTask extends Component<NewTaskProps, NewTaskState> {


    inputRef: React.RefObject<HTMLInputElement>

    constructor(props: NewTaskProps){
        super(props);

        this.state={
            isAddButtonDisabled: true,
            taskAlreadyExistsMessage: false,
        }

        this.inputRef = React.createRef();

    }


    onInputTask = (): void => {

        this.setState({ taskAlreadyExistsMessage: false })

        this.inputRef.current.value 
        ?
            this.setState({ isAddButtonDisabled: false })  
        :
            this.setState({ isAddButtonDisabled: true })  
    }


    onClickAdd = ():void => {
        
        if(this.props.taskList.tasks.find(task => task.name === this.inputRef.current.value)  !== undefined){
            this.setState({ taskAlreadyExistsMessage: true })
            return;
        }
        
        this.props.addTask({ name: this.inputRef.current.value})
       
        this.inputRef.current.value= '';
        this.setState({ isAddButtonDisabled: true }) 
        this.setState({ taskAlreadyExistsMessage: false })
    }


  render() {
    return (
      <div 
        style={{
            display: 'flex', 
            flexDirection:'column', 
            justifyContent:'stretch', 
            alignItems:'flexStart'}}
        >
            <TextField 
                placeholder={'add new task'}
                label="New Task"
                margin="normal"
                variant="outlined"
                inputRef={this.inputRef}
                onChange={this.onInputTask}


        />

            <Button
                variant='contained'
                color='primary'
                size='medium'
                disabled={this.state.isAddButtonDisabled}
                style={{textTransform: 'none'}}
                onClick={this.onClickAdd}
            >
                <Typography variant='h6'>
                    Add New Task
                </Typography>
            </Button>
            
            {
                this.state.taskAlreadyExistsMessage &&

                <Typography
                    color='secondary'
                    variant='body1'
                    style={{marginTop: '1rem',}}
                > 
                    This task already exists
                </Typography>
            }
      </div>
    )
  }
}



const mapStateToProps = (state: AppState) => ({
    taskList: state.tasks,
});

export default connect(
    mapStateToProps,
    { addTask }
)(NewTask);