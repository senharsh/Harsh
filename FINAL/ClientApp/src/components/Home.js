import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CategoryData } from '../service/Service';

export class Home extends Component {
  constructor(props) {
    super(props);
      this.state = { forecasts: [], loading: true};
  }
  
    isShowPopup = (status) => {
        this.setState({ showModalPopup: status });
    };
  componentDidMount() {
      this.GetAllCategoryData();
    }
    GetAllCategoryData() {
        CategoryData().then(res => {
            let response = res;
            if (response.message !== Error) {
                    this.setState({ forecasts: response.result});
                this.setState({ loading: false }); // hide loader after load data
            }
        });
    }
  
  static renderForecastsTable(forecasts) {
      return (
          <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Categoryname  </th>
          </tr>
        </thead>
              <tbody>
                  {forecasts.map(forecast =>
                      <tr key={forecast.catId}>
                          <td>{forecast.catName}</td>
                          <td><img src="E:\FINAL\ClientApp\src\Image\download.jfif" /></td>
                          <td>
                              <Link to={"/edit/" + forecast.catId} className="btn btn-success">Edit</Link>
                          </td>
                      </tr>
         )}
               </tbody>
          </table>
    );
  }

  render() {
      let contents = this.state.loading
          ? <p><em>Loading...</em></p> 
      : Home.renderForecastsTable(this.state.forecasts);

    return (
        <div>
        <h1 id="tabelLabel" >Business Info </h1>
        <p>This Info Of All Stored Business.</p>
        {contents}
        </div>
       
    );
  }
}
export default Home;