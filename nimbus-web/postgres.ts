import postgres from "postgres";

const sql: any = postgres(process.env.DB_CONN as string, {
    ssl: "require",
    idle_timeout: 60,
    max_lifetime: 60 * 30,
});

export default sql;
