import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm:false
    }
  }
  onGetTaskChild=(id)=>{
    var {tasks}= this.state;
    var index=this.findIndex(id);
    console.log(index);
    if(index!==-1){
      tasks[index].status=!tasks[index].status;
      this.setState({
        tasks:tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }
  findIndex=(id)=>{
    var {tasks}=this.state;
    var result=-1;
    tasks.forEach((task, index)=>{
      if(task.id===id){
        result=index;
      }
    })
    return result;
  }
componentWillMount(){
  if(localStorage && localStorage.getItem('tasks') ){
    var tasks= JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks:tasks
    })
  }
}

  // onGenerateData = () => {
  //   var tasks = [
  //     {
  //       id: this.generateID(),
  //       name: 'Học lập trình',
  //       status: true
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'Đi ngủ',
  //       status: true
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'Đi bơi',
  //       status: false
  //     }
  //   ];
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID() {
    return this.s4() + this.s4() + '-' + this.s4();
  }
  onToggleForm=()=>{
    this.setState({
      isDisplayForm:!this.state.isDisplayForm
    })
  }
  onCloseForm=()=>{
    this.setState({
      isDisplayForm:false
    })
  }
  onGet=(data)=>{
    var {tasks}= this.state;
    data.id=this.generateID();
    tasks.push(data);
    this.setState({
      tasks:tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
  }
  render() {
    var {tasks, isDisplayForm}= this.state;// var tasks=this.state.tasks;
    var elmTaskForm= isDisplayForm 
    ? <TaskForm onSubmit={this.onGet}
      onCloseForm={this.onCloseForm}/>
    : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lí công việc</h1>
          <hr/>
        </div>

        <div className="row">
          <div className={isDisplayForm? "col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
            {/* <TaskForm /> */}
            {elmTaskForm}
          </div>

          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" :"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

            <button
             type="button" 
             className="btn btn-primary"
             onClick={this.onToggleForm}
             >
              <span className="fa fa-plus mr-5"></span>Thêm công việc
            </button>
            {/* <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}>
              <span className="fa fa-plus mr-5"></span>Generate Data
            </button> */}
            <Control></Control>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <TaskList 
                tasks={tasks} 
                onUpdateStatus={this.onGetTaskChild}/>

              </div>
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default App;
