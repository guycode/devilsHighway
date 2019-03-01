Signupform = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <p className="text-muted">
                    It's free and always will be. 
                    </p>
                </div>
                <form>
                    <div className="col-sm-9">
                        <div className="col-sm-6 form-group">
                            <input type="text" ref="first_name" name="first_name" placeholder="First Name" className="form-control"/> 
                        </div>
                    </div>
                </form>
            </div>
        )
    }
})