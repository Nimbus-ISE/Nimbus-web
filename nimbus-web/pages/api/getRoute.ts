// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let origin;
    let destination;
    try {
        // const response = await fetch(
        //     "http://34.28.125.106:5000/get_sample_trip"
        // );
        // await response.json().then((data) => {
        //     origin = `${data[0][0].coordinate[0]},${data[0][0].coordinate[1]}`;
        //     destination = `${data[0].at(-1).coordinate[0]},${
        //         data[0].at(-1).coordinate[1]
        //     }`;
        // });
        // const routeResponse = await fetch(
        //     `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyDJSTWjqR3w__4qaPpUPjyNLfDUbokZ8Bc`
        // );
        // const result = await routeResponse.json();
        // res.status(200).json(result.routes[0].overview_polyline.points);
        // console.log("run");
    } catch (err) {
        console.log(err);
        res.status(500).json("error invalid url");
    }
} //13.746389,100.535004
//12.5324,99.9613
// const dataFromDB = await fetch(
//     "http://34.28.125.106:5000/get_sample_trip"
// );
// const data = await dataFromDB.json();
// const originCoordinate = `${data[0][0].coordinate[0]},${data[0][0].coordinate[1]}`;
// const destinationCoordinate = `${data[0][-1].coordinate[0]},${
//     data[0][-1].coordinate[1]
// }`;
