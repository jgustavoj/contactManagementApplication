import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});

	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={e => setContact({ ...contact, name: e.target.value })}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={e => setContact({ ...contact, email: e.target.value })}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={e => setContact({ ...contact, phone: e.target.value })}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={e => setContact({ ...contact, address: e.target.value })}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<Link to="/">
						<button
							onClick={() =>
								actions.addContact(contact.name, contact.email, contact.phone, contact.address)
							}
							type="button"
							className="btn btn-primary form-control">
							{" "}
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
