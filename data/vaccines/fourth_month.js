const fourthMonthVaccines = [
    {
        id: "12",
        name: "Hepatite B",
        coveredBy: ["15", "17"],
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
        whenApplyInMonths: 2
    },
    {
        id: "13",
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
        whenApplyInMonths: 2
    },
    {
        id: "14",
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
        whenApplyInMonths: 2
    },
    {
        id: "15",
        name: "Pentavalente",
        coveredBy: ["17"],
        types: [
            {
                name: "PB",
                encompass: ["12", "16"],
            },
            {
                name: "PV",
                encompass: [], // PRIVADA ENGLOBA POLI?
            }
        ],
        whenApplyInMonths: 2
    },
    {
        id: "16",
        name: "VIP Poliomelite",
        coveredBy: ["15", "17"],
        types: [
            {
                name: "PB",
                encompass: [],
            },
        ],
        whenApplyInMonths: 2
    },
    {
        id: "17",
        name: "Hexavalente",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: ["12", "16", "15"]
            }
        ],
        whenApplyInMonths: 2
    },
    {
        id: "18",
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
        id: "19",
        name: "Meningocócica C",
        coveredBy: ["19"],
        types: [
            {
                name: "PB",
                encompass: []
            }
        ],
        whenApplyInMonths: 3
    },
    {
        id: "20",
        name: "Meningocócica ACWY",
        coveredBy: [],
        types: [
            {
                name: "PV",
                encompass: ["19"]
            }
        ],
        whenApplyInMonths: 3
    }
];

module.exports = fourthMonthVaccines;