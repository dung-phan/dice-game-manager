import React, { Component } from "react"
import Form from "./Form"
import { connect } from "react-redux"
import { login } from "../actions/login"
import { Redirect } from "react-router-dom"
class Login extends Component {
	state = { email: "", password: "" }

	handleSubmit = event => {
		event.preventDefault()
		this.props.login(this.state.email, this.state.password)
	}
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render() {
		return this.props.auth ? (
			<Redirect to="/lobby" />
		) : (
			<div>
				Log In
				<Form
					values={this.state}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	auth: state.auth
})
export default connect(mapStateToProps, { login })(Login)
