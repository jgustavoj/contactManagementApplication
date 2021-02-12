import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		id: ""
	});

	return (
		<>
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link to="/add">
							<button className="customButton">Add new contact</button>
						</Link>
					</p>
					<ul className="list-group">
						<li className="list-group-item">
							{store.contacts.map((value, index) => {
								return (
									<ContactCard
										contact={value}
										key={index}
										onDelete={() => setState({ showModal: true, id: value.id })}
									/>
								);
							})}
						</li>
					</ul>
				</div>
				<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			</div>
		</>
	);
};
