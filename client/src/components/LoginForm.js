import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default ({ onSubmit }) => (
	<Formik
		initialValues={{ login: "", password: "" }}
		validationSchema={Yup.object().shape({
			login: Yup.string()
				.required("Login is required")
				.email("Login must be email address"),
			password: Yup.string().required("Password is required")
		})}
		onSubmit={onSubmit}
		render={() => (
			<Form>
				<div>
					<ErrorMessage name="login" component="div" />
					<ErrorMessage name="password" component="div" />
				</div>
				<div>
					<label htmlFor="txtLogin">Login</label>
					<Field type="email" name="login" id="txtLogin" />
				</div>
				<div>
					<label htmlFor="txtPassword">Password</label>
					<Field type="password" name="password" id="txtPassword" />
				</div>
				<button type="submit">Login</button>
			</Form>
		)}
	/>
);
