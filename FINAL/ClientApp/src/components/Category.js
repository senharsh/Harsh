import React from 'react';
import { Link } from 'react-router-dom';
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subcategorydata: [], loading: true };
    }
    async componentDidMount() {
        debugger;
        const response = await fetch('api/BusinessInfo/GetAllSubCategory?id=' + this.props.match.params.id);
        const data = await response.json();
        console.log(data);
        this.setState({ subcategorydata: data.result, loading: false });
    }
    static renderStudentTable(subcategorydata) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Subcatgory Name  </th>
                    </tr>
                </thead>
                <tbody>
                    {subcategorydata.map(forecast =>
                        <tr key={forecast.subCatId}>
                            <td>{forecast.subCatName}</td>
                            <td><img src="E:\FINAL\ClientApp\src\Image\download.jfif" /></td>
                            <td>{forecast.ownerName}</td>
                            <td>{forecast.address}</td>
                            <td>{forecast.ownerContact}</td>
                            <td>
                                <Link to={"/subcategory/" + forecast.subCatId} className="btn btn-success">Edit</Link>
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
            : Edit.renderStudentTable(this.state.subcategorydata);

        return (
            <div>
                <h1 id="tabelLabel" >Business Info </h1>
                <p>This Info Of All Stored Business.</p>
                {contents}
            </div>

        );
    }
}
export default Edit;