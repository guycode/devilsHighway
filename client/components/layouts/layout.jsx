Layout = React.createClass({
    render() {
        return (
            <div className="wrapper">
            <div className="box">
                <div className="srow row-offcanvas row-offcanvas-left push-down-5">
                Navbar
                    {this.props.sidebar}
                    {this.props.content}

                </div>
            </div>
            </div>
        )
    }
})