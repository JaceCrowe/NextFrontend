import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";
import { createJWT, hashPassword } from "../../lib/auth";
import { serialize } from "cookie";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.create({
      data: {
        email: req.body.email,
          //can't handle a granular error for this await, but you can put await pretty much anywhere as long as async is declared.
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });

    const jwt = await createJWT(user);
      //set is a cookie instead of local storage because it's a lot of work to code out where it goes on the local environment. We will be using next middleware that lives on the edge which will have access to the header.
      //Local is great for client side apps
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME, jwt, {
          //can't access the cookies with JS
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
      res.status(201);
      //not sending back the user data. It was a previous optimization but now because getting data is "free" it is  becoming much less of a burden
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}