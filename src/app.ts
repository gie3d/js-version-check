const Checker = (version1: string, version2: string) => {
    // version 1.0.0.0......0
    let splitV1 = version1.split('.');
    let splitV2 = version2.split('.');
    let minLength = Math.min(splitV1.length, splitV2.length);
    for (let i = 0; i < minLength; i++) {
        let v1 = parseInt(splitV1[i]);
        let v2 = parseInt(splitV2[i]);
        if (v1 > v2) {
            return 1;
        } else if (v2 > v1) {
            return -1;
        }
    }

    return 0;
}

export default Checker;