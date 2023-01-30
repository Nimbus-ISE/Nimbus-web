import React from "react";

const ErrorMessage = ({ children }: { children: string }) => (
    <h1 className="text-red-500">{children}</h1>
);

export default ErrorMessage;
