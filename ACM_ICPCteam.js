/* */
function ICPteam(topic) {

    // Optimize conversion.
    let normalTopic = topic.map(attendee => {

        let attendeeArr = attendee.split('');

        let normalAttendeeArr = attendeeArr.map(verse => {
            return parseInt(verse);
        });
        
        console.log(normalAttendeeArr)
        return normalAttendeeArr;
    });

    let versesMax = 0;
    let maxsCount = 0;

    // Typical double loop to iterate all possible pairs of twos.
    normalTopic.forEach((attendee1, index1) => {

        normalTopic.forEach((attendee2, index2) => {
            // Set known verse's count to 0.
            let versesCount = 0;

            // Make sure attendee2 is different from attendee1.
            if (index2 > index1) {

                // Loop through each number of attendee1 array. Attendee1's length equals to attendee2's length.
                for (i = 0; i < attendee1.length; i++) {

                    // Check if the number at i's position exists either in attendee1's or attendee2's array. 1 - truthy value; 0 - falsy value.
                    if (attendee1[i] || attendee2[i]) {
                        // if the condition is fulfilled then verse's count increments.
                        versesCount++;
                    };
                };
            };

            // If current count equals to maximum then increment count.
            if (versesCount == versesMax) {
                maxsCount++;
            };
            // If current count greater than maximum recorded value count?
            if (versesCount > versesMax) {
                // Set maximum value pairs count to one. It is the first pair.
                maxsCount = 1;
                // Assign current count to the maximum count.
                versesMax = versesCount;
            };

        });

    });

    console.log(versesMax);
    console.log(maxsCount);
    
    return [versesMax, maxsCount];
};

ICPteam([ '10101', '11100', '11010', '00101' ]);