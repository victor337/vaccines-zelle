const sixthMonthVaccines = [
    {
        id: "24",
        name: "Hepatite B",
        coveredBy: ["27", "29"],
        types: [
            {
                name: "PB",
                encompass: [],
            },
            {
                name: "PV",
                encompass: [],
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "25",
        name: "Rotavirus",
        coveredBy: [],
        types: [
            {
                name: "PB",
                encompass: [],
            },
            {
                name: "PV",
                encompass: [],
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "26",
        name: "Pneumocócica",
        coveredBy: [],
        types: [
            {
                name: "PB",
                encompass: [],
            },
            {
                name: "PV",
                encompass: [],
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "27",
        name: "Pentavalente",
        coveredBy: ["29"],
        types: [
            {
                name: "PB",
                encompass: ["24", "28"],
            },
            {
                name: "PV",
                encompass: [], // PRIVADA ENGLOBA POLI?
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "28",
        name: "VIP Poliomelite",
        coveredBy: ["27", "29"],
        types: [
            {
                name: "PB",
                encompass: [],
            },
        ],
        whenApplyInMonths: 6
    },
    {
        id: "29",
        name: "Hexavalente",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: ["24", "28", "27"]
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "30",
        name: "Meningocócica B",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: []
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "31",
        name: "Meningocócica C",
        coveredBy: ["31"],
        types: [
            {
                name: "PB",
                encompass: []
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "32",
        name: "Meningocócica ACWY",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: ["31"]
            }
        ],
        whenApplyInMonths: 6
    },
    {
        id: "33",
        name: "Influenza",
        isRequired: false,
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: []
            },
            {
                name: "PB",
                encompass: []
            }
        ],
        whenApplyInMonths: 6
    }
];

module.exports = sixthMonthVaccines;