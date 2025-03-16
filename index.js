const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
    console.log("Shutting down server...");
    server.close(() => {
        console.log("Server closed.");
        process.exit(0);
    });
});

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

app.get("/vaccines", (req, res) => {
    return res.send(allVaccines);
});

const allVaccines = [
    {
        id: "1",
        name: "BGC",
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
        whenApplyInMonths: 0
    },
    {
        id: "2",
        name: "Hepatite B",
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
        whenApplyInMonths: 0
    },
    {
        id: "3",
        name: "Hepatite B",
        coveredBy: ["6", "8"],
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
        id: "5",
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
        id: "6",
        name: "Pentavalente",
        coveredBy: ["8"],
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
        coveredBy: ["6", "8"],
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
        coveredBy: [],
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
