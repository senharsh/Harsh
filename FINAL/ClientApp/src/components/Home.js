import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CategoryData } from '../service/Service';

export class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
          SuperCategoryList: [],
          loading: true
      };
  }
  
    isShowPopup = (status) => {
        this.setState({ showModalPopup: status });
    };
  componentDidMount() {
      this.GetAllCategoryData();
    }
    GetAllCategoryData() {
        debugger;
        CategoryData().then(res => {
            let response = res;
            if (response.message !== Error) {
                this.setState({ SuperCategoryList: response.result});
                this.setState({ loading: false }); // hide loader after load data
            }
        });
    }
  


    render() {
        const { SuperCategoryList } = this.state;
        console.log(SuperCategoryList);
    return (
        <>
            <div className="container py-md-4 mt-lg-0 mt-md-4">
                <div className="grids-area-hny main-cont-wthree-fea row justify-content-center">
                    {SuperCategoryList.map(items =>
                        <div className="card h-100" >
                            <img className="card-img-top" style={{ maxWidth: '80px' }} src="../../Content/img/Delhi.png" alt="" />

                            <div className="card-body">
                                <h5 className="card-title text-center">{items.catName}</h5>

                            </div>
                            <NavLink to={"/category/" + items.catId} className="overlay-link"></NavLink>

                        </div>
                    )}
                </div>
            </div>

        </>


    );
  }
}
export default Home;