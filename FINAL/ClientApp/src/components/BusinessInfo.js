import React from 'react';
import { Link } from 'react-router-dom';
class BusinessInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { businessInfodata: [], loading: true };
    }
    async componentDidMount() {
        debugger;
        const response = await fetch('api/BusinessInfo/GetAllDataByid?subCatId='+ this.props.match.params.subCatId);
        const data = await response.json();
        console.log(data);
        this.setState({ businessInfodata: data.result, loading: false });
    }
    static renderBusinessDataTable(businessInfodata) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Business Name</th>
                        <th>Owner Name</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Post</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Logo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {businessInfodata.map(forecast =>
                        <tr key={forecast.businessId}>
                            <td>{forecast.bussinessTitle}</td>
                            <td>{forecast.ownerName}</td>
                            <td>{forecast.category}</td>
                            <td>{forecast.subCategory}</td>
                            <td>{forecast.post}</td>
                            <td>{forecast.address}</td>
                            <td>{forecast.city}</td>
                            <td>{forecast.ownerContact}</td>
                            <td><img src="E:\FINAL\ClientApp\src\Image\download.jfif" /></td>
                            <td>
                                <Link to={"/edit/" + forecast.subCatId} className="btn btn-success">Edit</Link> 
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
            : BusinessInfo.renderBusinessDataTable(this.state.businessInfodata);

        return (
            <div>
                <h1 id="tabelLabel" >Business Info </h1>
                <p>This Info Of All Stored Business.</p>
                {contents}
            </div>

        );
    }
}
export default BusinessInfo;