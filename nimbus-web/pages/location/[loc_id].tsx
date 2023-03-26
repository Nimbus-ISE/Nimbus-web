import getLocation from "@/utils/api/getLocation";
import { GetServerSidePropsContext } from "next";
import React from "react";

interface IProps {
    location: any;
}

const location = ({ location }: IProps) => {
    React.useEffect(() => {
        console.log(location);
    }, []);
    return (
        <div>
            <div>{location?.loc_name}</div>
            <div>{location?.description}</div>
        </div>
    );
};

export default location;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const loc_id = params?.loc_id;
    const location = await getLocation(loc_id as string);
    return { props: { location } };
}
