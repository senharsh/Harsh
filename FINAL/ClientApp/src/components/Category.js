import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <>
            <div className="container py-md-4 mt-lg-0 mt-md-4">
                <div className="grids-area-hny main-cont-wthree-fea row justify-content-center">
                    {subcategorydata.map(items =>
                        <div className="card h-100" >
                            <img className="card-img-top" style={{ maxWidth: '80px' }} src="../../Content/img/12.png" alt="" />

                            <div className="card-body">
                                <h5 className="card-title text-center">{items.subCatName}</h5>

                            </div>
                            <NavLink to={"/subcategory/" + items.subCatId} className="overlay-link"></NavLink>

                        </div>
                    )}
                </div>
            </div>

        </>

        );
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Edit.renderStudentTable(this.state.subcategorydata);

        return (
            <div>
                               {contents}
            </div>

        );
    }
}
export default Edit;