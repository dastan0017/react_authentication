import {getDbConnection} from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupRoute = {
	path: "/api/signup",
	method: "post",
	handler: async (req, res) => {
		const {email, password} = req.body;

		const db = getDbConnection("react-auth-db");

		const user = await db.collection("users").findOne({email});

		if (user) {
			res.sendStatus(409);
		}

		const passwordHash = await bcrypt.hash(password, 10);

		const startingInfo = {
			hairColor: "Black",
			favoriteFood: "Manty",
		};

		const result = await db.collection("users").insertOne({
			email,
			passwordHash,
			info: startingInfo,
			isVerified: false,
		});

		const {insertedId} = result;

		try {
			const token = jwt.sign(
				{id: insertedId, email, info: startingInfo, isVerified: false},
				"donothackme",
				{expiresIn: "2d"}
			);

			res.status(200).json({token});
		} catch (err) {
			res.status(505).json({error: "Something went wrong"});
			res.status(500).send(err);
		}
	},
};
