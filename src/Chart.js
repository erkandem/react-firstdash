import React from "react"

class Chart extends React.Component {
    render() {
        return (
            <div>
                <p>Rendered at {new Date().toISOString()}</p>

                Transmitted:
                <pre>
                    <code>
                        {JSON.stringify(
                            this.props.data,
                            null,
                            2
                        )}
                    </code>
                </pre>
            </div>
        )
    }
}


export default Chart;