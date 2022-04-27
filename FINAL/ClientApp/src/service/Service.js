

async function CategoryData() {
    debugger
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const GetResponse = await fetch('api/BusinessInfo/GetAllCategory', requestOptions)
        .then((response) => {
            return response.json();
        });
    return GetResponse;
    //debugger;
    //const response = await fetch('api/BusinessInfo/GetAllCategory');
    //const data = await response.json();
    //console.log(data);
    //this.setState({ forecasts: data.result, loading: false });
}
export  { CategoryData };
