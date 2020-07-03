function taumBday(b, w, bc, wc, z) {
    // Set intial set of values.
    let totalCost;

    // Does trade make sense?
    if (z < Math.abs(bc - wc)) {

        // Is black present cheaper than white?
        if (bc < wc) {
            // Buy black and white presents for the black cost and trade black presents to get required number of white. 
            totalCost = (b + w) * bc + w * z;
        };

        if (bc > wc) {
            totalCost = (b + w) * wc + b * z;
        };
    } else {
        // Trade does not make any sense => buy all presents normally.
        totalCost = b * bc + w * wc;
    };

    console.log(totalCost)

    return totalCost;
};

taumBday(3, 6, 9, 1, 1)