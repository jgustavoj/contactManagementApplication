import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		full_name: props.location.state.full_name,
		email: props.location.state.email,
		phone: props.location.state.phone,
		address: props.location.state.address,
		id: props.location.state.id
	});

	let handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5" style={{ fontSize: "5vmin" }}>
					Edit contact
				</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name="full_name"
							onChange={handleChange}
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={contact.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							name="email"
							onChange={handleChange}
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={contact.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							name="phone"
							onChange={handleChange}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={contact.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							name="address"
							onChange={handleChange}
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={contact.address}
						/>
					</div>
					<Link to="/" className="d-flex justify-content-center">
						<button
							onClick={() =>
								actions.editContact(
									contact.full_name,
									contact.email,
									contact.phone,
									contact.address,
									contact.id
								)
							}
							type="button"
							className="customButtonSave">
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	location: PropTypes.object
};
