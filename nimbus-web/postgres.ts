import postgres from "postgres";

const sql: any = postgres(process.env.DB_CONN as string, {
    ssl: "require",
});

export default sql;
