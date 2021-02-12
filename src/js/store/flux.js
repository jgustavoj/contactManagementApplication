const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			loadContacts: () => {
				fetch("https://3000-harlequin-mammal-ffmkdi0f.ws-us03.gitpod.io/contact")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						console.log("responseAsJson", responseAsJson);
						setStore({ contacts: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addContact: (full_name, email, phone, address) => {
				fetch("https://3000-harlequin-mammal-ffmkdi0f.ws-us03.gitpod.io/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => response.json())
					.then(() => {
						fetch("https://3000-harlequin-mammal-ffmkdi0f.ws-us03.gitpod.io/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }));
						console.log("created");
					});
			},

			deleteContact: id => {
				fetch(`https://3000-harlequin-mammal-ffmkdi0f.ws-us03.gitpod.io/contact/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(() => {
						fetch("https://3000-harlequin-mammal-ffmkdi0f.ws-us03.gitpod.io/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }));
						console.log("deleted");
					});
			},

			editContact: (full_name, email, phone, address, id) => {
				fetch(`https://3000-harlequin-mammal-ffmkdi0f.ws-us03.gitpod.io/contact/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						phone: phone,
						address: address,
						id: id
					})
				})
					.then(response => response.json())
					.then(() => {
						fetch("https://3000-harlequin-mammal-ffmkdi0f.ws-us03.gitpod.io/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }));
						console.log("Edited");
					});
			}
		}
	};
};

export default getState;
