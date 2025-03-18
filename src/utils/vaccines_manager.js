const onBirthVaccines = require('../data/vaccines/on_birth.js');
const secondMotnhsVaccines = require('../data/vaccines/second_months.js');
const fourthMonthVaccines = require('../data/vaccines//fourth_month.js');


function getAllVaccines() {
    return [].concat(onBirthVaccines, secondMotnhsVaccines, fourthMonthVaccines);
}

function getVaccineById(id) {

    const allVaccines = getAllVaccines();

    let vaccine = allVaccines.filter((e) => e.id == id);

    if (vaccine.length > 0) {
        return vaccine[0];
    }

    return 'A vacina não existe';
}


module.exports = { getAllVaccines, getVaccineById }