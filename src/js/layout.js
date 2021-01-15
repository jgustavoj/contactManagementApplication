import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContact.js";
import { EditContact } from "./views/EditContact.js";
import { Crm } from "./views/Crm.js";
import { Navbar } from "./component/Navbar";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/index.html" component={Contacts} />
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/crm" component={Crm} />
						<Route exact path="/edit/:id" component={EditContact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
