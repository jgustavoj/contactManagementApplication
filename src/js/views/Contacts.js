import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map(item => {
							return (
								<ContactCard
									key={item.id}
									id={item.id}
									// name={item.full_name}
									// email={item.email}
									// phone={item.phone}
									// address={item.address}
									onDelete={() => setState({ showModal: true, id: item.id })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
