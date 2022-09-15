function createCalculator(val) {
    let counts = val;
    return {
        add: (val) => counts += val,
        mult: (val) => counts *= val,
        sub: (val) => counts -= val,
        div: (val) => counts /= val,
        set: (val) => counts = val
    }
}