import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
    login: async (req, res) => {
        try {
            await handleLogin(req, res, {
                authorizationParams: { prompt: "select_account" },
            });
        } catch (error) {
            console.error(error);
        }
    },
});
