import { gql, useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup"

const LOGIN_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`

interface LoginValues {
	email: string
	password: string
}

function Login() {
	const navigate = useNavigate()
	const [ login, { data } ] = useMutation(LOGIN_MUTATION)

	const initialValues: LoginValues = {
		email: "",
		password: ""
	}

	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email address").required("Email def required"),
		password: Yup.string().max(20, "Must be 20 characters or less").required("Password Very much required"),
	})

	return (
		<div className="container">
			<div className="nav">
				<Link to="/">Home</Link> | <Link to="/signup">Register</Link>
			</div>
			<h3>Log in</h3>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(true)
					const response = await login({
						variables: values
					})
					localStorage.setItem("token", response.data.login.token)
					setSubmitting(false)
					navigate("/users")
				}}
			>
				<Form>
					<Field name="email" type="text" placeholder="Email" />
					<ErrorMessage name="email" component={"div"} />
					<Field name="password" type="password" placeholder="Password" />
					<ErrorMessage name="password" component={"div"} />
					<button type="submit" className="login-button">
						<span>Log in</span>
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Login