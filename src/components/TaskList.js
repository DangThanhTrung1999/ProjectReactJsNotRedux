import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import TaskItem from './TaskItem';
class TaskList extends React.Component {
  render() {
    var {tasks}= this.props;// var tasks=this.props.tasks;
    var elmTask=tasks.map((task,index)=>{
      return <TaskItem 
      key={task.id} 
      index={index} 
      task={task}
      onUpdateStatus={this.props.onUpdateStatus}
      />
    })
    return (
        <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng thái</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text"
                className="form-control"
                name="filterName"
              />
            </td>
            <td>

              <select
                name="filterStatus"
                className="form-control">
                <option value={-1}>Tất cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích hoạt</option>
              </select>

            </td>
            <td></td>
          </tr>
          {elmTask}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
