// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const origin = req.query.origin;
    const destination = req.query.destination;
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyDJSTWjqR3w__4qaPpUPjyNLfDUbokZ8Bc`
        );
        const route = await response.json();

        res.status(200).json(route.routes[0].overview_polyline.points);
    } catch (err) {
        console.log(err);
        res.status(500).json("error invalid url");
    }
} //13.746389,100.535004
//12.5324,99.9613
