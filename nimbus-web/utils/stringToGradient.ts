function fixedLengthHash(str: string, length: number) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash &= hash;
    }
    const hexString = Math.abs(hash).toString(16);
    return hexString.padStart(length, "0").slice(0, length);
}

export default function stringToGradient(str: string) {
    const hash = fixedLengthHash(str, 7);

    const r1 = parseInt(hash.substring(0, 2), 16);
    const g2 = parseInt(hash.substring(1, 3), 16);
    const b1 = parseInt(hash.substring(2, 4), 16);
    const r2 = parseInt(hash.substring(3, 5), 16);
    const g1 = parseInt(hash.substring(4, 6), 16);
    const b2 = parseInt(hash.substring(5, 7), 16);

    const gradient = `radial-gradient(circle at center, rgba(${r1}, ${g1}, ${b1}, 0.4), rgba(${r2}, ${g2}, ${b2}, 0.4))`;
    return gradient;
}
