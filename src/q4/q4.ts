import { RequestHandler } from "express";
import data from "./q4data.json";

export const getFirstName: RequestHandler = async (req, res) => {
  try {
    const { lastName } = req.body as {
      lastName: string;
    };

    const foundName = data.find((name) => {
      const [_, lName] = name.split(" ");
      return lName === lastName;
    });
    if (!foundName) {
      res.send(null);
      return;
    }
    res.send(foundName.split(" ")[0]);
  } catch (e) {
    console.log(`[Error]: ${e}`);
    res.sendStatus(500);
  }
};
