import {
    handleAuth,
    handleLogin,
    handleProfile,
    LoginOptions,
} from "@auth0/nextjs-auth0";
import { getSession, Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

export async function refetchUserProfile(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await handleProfile(req, res, {
            refetch: true,
            afterRefetch,
        });
    } catch (error) {
        console.error("error refetch user profile", error);
    }
}

export const afterRefetch = (
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) => {
    const newSession = getSession(req, res);
    if (newSession) {
        return newSession as Promise<Session>;
    }
    return session;
};

const getLoginState = (req: NextApiRequest, loginOptions: LoginOptions) => {
    const { prompt, redirect } = req.query;
    console.log("getLoginState", loginOptions);
    if (
        typeof prompt === "string" &&
        typeof redirect === "string" &&
        loginOptions.authorizationParams
    ) {
        console.log("prompt param changed to ", prompt, redirect);
        loginOptions.authorizationParams.prompt = prompt;
        if (redirect) {
            loginOptions.returnTo = "/";
        } else {
            loginOptions.returnTo = req.headers.referer;
        }
    } else {
        console.log("prompt param unchanged");
    }
    return {};
};

export default handleAuth({
    async login(req, res) {
        try {
            await handleLogin(req, res, { getLoginState });
        } catch (error: any) {
            res.status(error.status || 500).end();
        }
    },
    async profile(req, res) {
        try {
            await handleProfile(req, res, {
                refetch: true,
                afterRefetch,
            });
        } catch (error: any) {
            res.status(error.status || 500).end(error.message);
        }
    },
});
