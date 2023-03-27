import React from "react";

interface IProps {
    size?: number;
    src: string;
    className?: string;
}

const UserProfile = ({ src, size, className }: IProps) => {
    return (
        <img
            style={{
                width: size,
                height: size,
            }}
            className={`${className} rounded-full bg-black shadow-md`}
            src={src}
            alt="Profile picture"
        />
    );
};

export default UserProfile;
