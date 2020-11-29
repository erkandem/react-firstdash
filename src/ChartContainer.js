import React from "react"
import Chart from "./Chart.js"


var xhr;
var apiUrl = "http://localhost:5000";
var hearBeatEndpoint = 'heartbeat';


class ChartContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data:  "date"};
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl + '/' + hearBeatEndpoint, true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response)
            this.setState({data: response});
        }
    }

    render() {
        return <Chart data={this.state.data}/>
    }
}


export default ChartContainer;