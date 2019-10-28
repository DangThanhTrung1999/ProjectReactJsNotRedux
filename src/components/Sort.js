import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class Control extends React.Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div>
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id=""
            data-toggle="dropdown"
            // aria-haspopup="true"
            // aria-expanded="true"
          >
            Sắp xếp <span className="fa fa-caret-square-o-down"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a role="button" className="sort_selected" href="/#">
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
            </span>
              </a>
            </li>
            <li>
              <a role="button" className="sort_selected" href="/#">
                <span className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
            </span>
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a role="button" href="/#">
                Trạng thái kích hoạt
            </a>
            </li>
            <li>
              <a role="button" href="/#">
                Trạng thái ẩn
            </a>
            </li>
          </ul>
        </div>
      </div>
      );
  }
}

export default Control ;
