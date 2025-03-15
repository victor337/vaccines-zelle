const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/vaccines", (req, res) => {
    return res.send(allVaccines);
});

app.get("/vaccines/:id", (req, res) => {
    const id = req.params.id;

    let vaccine = allVaccines.filter((e) => e.id == id);

    if (vaccine.length > 0) {
        return res.send(vaccine[0]);
    }

    return res.send('A vacina não existe');
});

app.listen(PORT, () => {
    console.log('Listen port')
})

const allVaccines = [
    {
        id: "1",
        name: "BGC", // É pública e privada?
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
        whenApplyInMonths: 0
    },
    {
        id: "2",
        name: "Hepatite B",
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
        whenApplyInMonths: 0
    },
    {
        id: "3",
        name: "Hepatite B",
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
        id: "4",
        name: "Rotavirus",
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
        id: "5",
        name: "Pneumocócica",
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
        id: "6",
        name: "Pentavalente",
        types: [
            {
                name: "PB",
                encompass: ["3", "7"],
            },
            {
                name: "PV",
                encompass: [], // PRIVADA ENGLOBA POLI?
            }
        ],
        whenApplyInMonths: 2
    },
    {
        id: "7",
        name: "VIP Poliomelite",
        types: [
            {
                name: "PB",
                encompass: [],
            },
        ],
        whenApplyInMonths: 2
    },
    {
        id: "8",
        name: "Hexavalente",
        types: [
            {
                name: "PV",
                encompass: ["3", "7", "6"]
            }
        ],
        whenApplyInMonths: 2
    },
    {
        id: "9",
        name: "Meningocócica B",
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
        types: [
            {
                name: "PV",
                encompass: ["10"]
            }
        ],
        whenApplyInMonths: 3
    }
];
