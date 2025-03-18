const thirdMonthVaccines = [
    {
        id: "9",
        name: "Meningocócica B",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: []
            }
        ],
        whenApplyInMonths: 3
    },
    {
        id: "10",
        name: "Meningocócica C",
        coveredBy: ["10"],
        types: [
            {
                name: "PB",
                encompass: []
            }
        ],
        whenApplyInMonths: 3
    },
    {
        id: "11",
        name: "Meningocócica ACWY", // Adicionar pública?
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: ["10"]
            }
        ],
        whenApplyInMonths: 3
    }
];

module.exports = thirdMonthVaccines;