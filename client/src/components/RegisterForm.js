import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default ({ onSubmit }) => (
	<Formik
		initialValues={{
			login: "",
			password: "",
			name: "",
			confirmPassword: ""
		}}
		validationSchema={Yup.object().shape({
			name: Yup.string().required("Name is required"),
			login: Yup.string()
				.required("Login is required")
				.email("Login must be email address"),
			password: Yup.string().required("Password is required"),
			confirmPassword: Yup.string()
				.required("Confirm password is required")
				.oneOf([Yup.ref("password")], "Passwords must match")
		})}
		onSubmit={onSubmit}
		render={() => (
			<Form>
				<div>
					<ErrorMessage name="name" component="div" />
					<ErrorMessage name="login" component="div" />
					<ErrorMessage name="password" component="div" />
					<ErrorMessage name="confirmPassword" component="div" />
				</div>
				<div>
					<label htmlFor="txtName">Name</label>
					<Field name="name" id="txtName" />
				</div>
				<div>
					<label htmlFor="txtLogin">Login</label>
					<Field type="email" name="login" id="txtLogin" />
				</div>
				<div>
					<label htmlFor="txtPassword">Password</label>
					<Field type="password" name="password" id="txtPassword" />
				</div>
				<div>
					<label htmlFor="txtConfirmPassword">Confirm password</label>
					<Field
						type="password"
						name="confirmPassword"
						id="txtConfirmPassword"
					/>
				</div>
				<button type="submit">Register</button>
			</Form>
		)}
	/>
);
