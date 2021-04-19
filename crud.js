const cars = [
    {
        id: 0,
        brand: "BMW",
        model: "zz",
        color: "blue",
        year: "2013",
        price: "$ 15.000",
        photo: "https://benigarautomocion.com/wp-content/uploads/2019/06/bmw-serie-1-dinamismo.jpg"
        
     },
     {
        id: 1,
        brand: "Mercedes-benz",
        model: "B123",
        color: "green",
        year: "2014",
        price: "$ 18.000",
        photo: "https://www.diariomotor.com/imagenes/picscache/1920x1600c/ford-fiesta-st-edition-2021-06_1920x1600c.jpg"
         
     },
     {
        id: 2,
        brand: "Mazda",
        model: "Cx-3",
        color: "Red",
        year: "2017",
        price: "$ 10.000"
        photo: "https://www.elcarrocolombiano.com/wp-content/uploads/2018/05/20180531-MAZDA-CX-3-2019-COLOMBIA-01-750x375.jpg"
     },
];


// --------------------- Car List -------------------------
const edit = false;
function printCars(dataCars) {
    const container = document.getElementById('Cars-container');
    container.innerHTML = '';
    dataCars.forEach((car) => {
        const htmlCar = `<tr class="text-center">
                            <td>${car.brand}</td>
                            <td>${car.model}</td>
                            <td>${car.color}</td>
                            <td>${car.year}</td>
                            <td>${car.price}</td>
                            <td>
                            <div class="">
                                 <img class="img-max" src="${car.photo}" alt="car">
                            </div>
                            </td>
                            <td>
                                <button class="btn btn-danger" onclick="deleteCar(${car.id})">Delete</button>
                                <button class="btn btn-warning" onclick="editCar(${car.id})">Modify</button>
                            </td>
                            
                        </tr>`;
        container.innerHTML += htmlCar;
    });
}

// --------------------- global variables -------------------------
const EDIT = 'Modify';
const CREATE = 'create';


// --------------------- Add Car -------------------------
function addCar() {
    // Podemos acceder al value en una sola línea
    const carBrand = document.getElementById('brand').value;
    const carModel = document.getElementById('model').value;
    const carColor = document.getElementById('color').value;
    const carYear = document.getElementById('year').value;
    const carPrice = document.getElementById('price').value;
    const carPhoto = document.getElementById('photo').value;
    
    

    const newCar = {
        id: generateId(),
        brand: carBrand,
        model: carModel,
        color: carColor,
        year: carYear,
        price: carPrice,
        photo: carPhoto,
    }

    cars.push(newCar);
    printCars(cars);
    resetForm();
    HideFormContainer();
}

// --------------------- Image Cars -------------------------

// function imageCar(){
//     const container = document.getElementById('car-container');
//     const image = document.getElementById('image').value;
//     const html = `<div class="">
//                     <img class="img-max" src="${image}" alt="car">
//                 </div>`
// }

// --------------------- Generate ID -------------------------

function generateId() {
    let biggerId = 0;
    cars.forEach((car) => {
        if(car.id > biggerId) {
            biggerId = car.id;
        }
    });
    return biggerId += 1;
}

// --------------------- Delete Car -------------------------

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id === id);
    cars.splice(index, 1);
    printCars(cars);
}

// --------------------- Modify car -------------------------

function editCar(id) {
    const index = cars.findIndex((car) => car.id === id);
    const car = cars[index];
    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    showFormContainer();
    changeEditbutton(id);
}



// --------------------- global variables -------------------------

function resetForm() {
    document.getElementById('car-form').reset();
}

function HideFormContainer() {
    document.getElementById('create-car-container').classList.add('d-none');
}

function showFormContainer() {
    document.getElementById('create-car-container').classList.remove('d-none');
    changeCreatebutton();
}

function changeEditbutton(id) {
    const button = getFormCarButton();
    button.textContent = 'Modify'
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
    button.value = id;
    
}

function changeCreatebutton() {
    const button = getFormCarButton();
    button.innerHTML = 'Save'
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
    button.value = CREATE;
}

function car() {
    const buttonValue = getFormCarButton();
    if(buttonValue.textContent === EDIT){
        updateCar(buttonValue.value)
    } else {
        addCar();
    }
}

function updateCar(id){
    cars[id].brand = document.getElementById('brand').value;
    cars[id].model = document.getElementById('model').value;
    cars[id].color = document.getElementById('color').value;
    cars[id].year = document.getElementById('year').value;
    cars[id].price = document.getElementById('price').value;
    printCars(cars);
}

function getFormCarButton() {
    return document.getElementById('btn-car-form');
}

printCars(cars);
