import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Typography, Button } from "@material-ui/core";
import { AppState } from "../store";
import { TaskState } from "../store/tasks/types";
import { deleteTask } from "../store/tasks/actions";


export interface TaskListProps {

    taskList: TaskState;
    deleteTask: typeof deleteTask;
}


class TaskList extends Component<TaskListProps> {


    onClickDelete = (name: string) => {

        this.props.deleteTask({name})
    }


  	render() {
        return (
                
                this.props.taskList.tasks.length === 0

                ?

                    <Typography
                        variant='body1'
                        style={{ marginTop: '1rem', }}
                    >
                        There are no tasks yet.
                    </Typography>

                :

                    <div style={{ height: '100%', overflowY: "auto",}} >
                        <ul>
                            {
                                this.props.taskList.tasks.map(task => 
                                    <li style={{ marginBottom: '1rem' }} key={Math.random().toString(36).substr(2, 9)}>

                                        <span style={{marginRight: '2rem'}}>
                                            {task.name}
                                        </span>

                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            size='small'
                                            style={{ textTransform: 'none' }}
                                            onClick={() => { this.onClickDelete(task.name)}}
                                        >
                                            Delete
                                        </Button>

                                    </li>
                                )
                            }

                        </ul>
                    </div>
        )
  }
}


const mapStateToProps = (state: AppState) => ({

  taskList: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators( { deleteTask }, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);