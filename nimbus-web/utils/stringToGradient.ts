function basicHash(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash &= hash;
    }
    return Math.abs(hash).toString(16);
}
export default function stringToGradient(str: string) {
    const hash = basicHash(str);

    const r1 = parseInt(hash.substring(0, 2), 16);
    const g2 = parseInt(hash.substring(1, 3), 16);
    const b1 = parseInt(hash.substring(2, 4), 16);
    const r2 = parseInt(hash.substring(3, 5), 16);
    const g1 = parseInt(hash.substring(4, 6), 16);
    const b2 = parseInt(hash.substring(6, 8), 16);

    return `radial-gradient(circle at center, rgba(${r1}, ${g1}, ${b1}, 0.4), rgba(${r2}, ${g2}, ${b2}, 0.4))`;
}
