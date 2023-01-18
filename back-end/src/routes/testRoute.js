export const testRoute = {
	path: "/api/test",
	method: "get",
	handler: (req, res) => {
		res.status(200).send("It works!");
	},
	path: "/",
	method: "get",
	handler: (req, res) => {
		res.status(200).send("HOME MILYI HOME!");
	},
};
