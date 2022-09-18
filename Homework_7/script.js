function createCalculator(val) {
    let result = val;
    return {
        add: (val) => result += val,
        mult: (val) => result *= val,
        sub: (val) => result -= val,
        div: (val) => result /= val,
        set: (val) => result = val
    }
}