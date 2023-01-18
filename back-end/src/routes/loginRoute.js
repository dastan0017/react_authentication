import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {getDbConnection} from "../db";

export const loginRoute = {
	path: "/api/login",
	method: "post",
	handler: async (req, res) => {
		try {
			const {email, password} = req.body;

			const db = getDbConnection("react-auth-db");
			const user = await db.collection("users").findOne({email});

			if (!user) return res.sendStatus(401);

			const {_id: id, isVerified, passwordHash, info} = user;

			const isCorrect = await bcrypt.compare(password, passwordHash);

			if (isCorrect) {
				const token = jwt.sign({id, isVerified, email, info}, "donothackme", {
					expiresIn: "2d",
				});

				res.status(200).json({token});
			} else {
				res.sendStatus(401);
			}
		} catch (err) {
			res.status(505).json({error: "Something went wrong"});
			console.log("Error is: ", err);
		}
	},
};
