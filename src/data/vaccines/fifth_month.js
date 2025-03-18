const fifthMonthVaccines = [
    {
        id: "21",
        name: "Meningocócica B",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: [],
            }
        ],
        whenApplyInMonths: 5
    },
    {
        id: "22",
        name: "Meningocócica C",
        coveredBy: [
            "23"
        ],
        types: [
            {
                name: "PB",
                encompass: [],
            },
        ],
        whenApplyInMonths: 5
    },
    {
        id: "23",
        name: "Meningocócica ACWY",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: [
                    "22"
                ],
            }
        ],
        whenApplyInMonths: 5
    },
];

module.exports = fifthMonthVaccines;