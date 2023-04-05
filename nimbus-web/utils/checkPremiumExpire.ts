const checkPremiumExpire = ({
    premium_type,
    premium_expire,
}: {
    premium_type: string;
    premium_expire: Date | number;
}) => {
    let expireDate =
        typeof premium_expire === "number"
            ? premium_expire
            : Number(premium_expire);
    if (premium_type === "None" || Date.now() < expireDate) return false;
    return true;
};

export default checkPremiumExpire;
