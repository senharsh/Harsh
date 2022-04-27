import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Home } from './Home';

export class AddBusinessInfo extends Component{
    constructor(props) {
        super(props);
      
        this.state = { title: "", loading: true, cityList: [],categoryList: [], PostList: [],   empData: new Home };

        //--- Fetch data for drowpdown
       
        fetch('api/BusinessInfo/GetAllCity')
            .then(response => response.json())
            .then(data => {
                this.setState({ cityList: data.result });
            });
        fetch('api/BusinessInfo/GetAllCategory')
            .then(response => response.json())
            .then(data => {
                this.setState({ categoryList: data.result });
            });
        fetch('api/BusinessInfo/GetAllPost')
            .then(response => response.json())
            .then(data => {
                this.setState({ PostList: data.result });
            });
        var empid = this.props.match.params["bussid"];

        // This will set state for Edit employee  
        if (empid > 0) {
            fetch('api/BusinessInfo/GetAllDataByid/' + empid)
                .then(response => response.json() )
                .then(data => {
                    this.setState({ title: "Edit", loading: false, empData: data });
                });
        }
        // This will set state for Add employee  
        else {
            this.state = { title: "Create", loading: false, cityList: [], categoryList: [], PostList: [],  empData: new Home };
        }
        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.cityList, this.state.categoryList, this.state.PostList);

        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>Add</p>
                <hr />
                {contents}
            </div>
        );
    }

    handleSave(event) {
        debugger;   
        event.preventDefault();
        const data = new FormData(event.target);

          // PUT request for Edit employee.  
        if (this.state.empData.bussid) {
            fetch('api/BusinessInfo/Edit', {
                method: 'PUT',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/Home");
                })
        }
        // POST request for Add employee.  
        else {
            fetch('api/BusinessInfo/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/Home");
                })
        }
    }
    // This will handle Cancel button click event.  
     handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/Home");
    }

     renderCreateForm(cityList, categoryList, PostList) {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="employeeId" value={this.state.empData.bussid} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">BusinessTitle</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.empData.bussTitle} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Department">Address</label>
                    <div className="col-md-4">
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Department" defaultValue={this.state.empData.address} required />
                        </div>
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Department" >Owern Name </label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Department" defaultValue={this.state.empData.ownerName} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Category">Category</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="Category" defaultValue={this.state.empData.catId} required>
                            <option value="">-- Select Category --</option>
                            {categoryList.map(category =>
                                <option key={category.catId} value={category.catName}>{category.catName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Post">Post</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="Post" defaultValue={this.state.empData.postId} required>
                            <option value="">-- Select City --</option>
                            {PostList.map(post =>
                                <option key={post.postId} value={post.postName}>{post.postName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="City">City</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="City" defaultValue={this.state.empData.cityId} required>
                            <option value="">-- Select City --</option>
                            {cityList.map(city =>
                                <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}
