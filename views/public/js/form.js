async function handleFormSubmission() {
    // TO DO: send request to server with data of form
    //        wait for response
    // NICE TO HAVE: spinning wheelnpm star
    try {
        const response = await sendRequest();
        handleFormResponse(response);
    } catch (e) {
        // TO DO: if response neg: pop up
        console.error(e);
    }
}

async function sendRequest() {
    submitFlag = true;
    const species = document.getElementById('species').value;
    const age = document.getElementById('age').value;
    const condition = document.getElementById('condition').value;
    const url = 'https://stormy-falls-91485-113c8c95f4d5.herokuapp.com';
    /*const url = 'http://localhost:3003/';*/

    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ species: species, age: age, condition: condition }),
            success: function(response) {
                resolve(response);
            },
            error: function(error) {
                reject(error);
            }
        });
    }).then(response => {
        console.log('Response from microserviceB:', response);
        return response;
    }).catch(error => {
        console.error('Error:', error);
    });
}

async function showRecommendation() {
    // Fetch data initially when the page loads
    const data = await sendRequest();
    const { foodValue, box } = data;

    const showMealPlan = document.getElementById('mealplan');
    const showBoxSize = document.getElementById('box');
    showMealPlan.innerHTML = `<p>${foodValue}</p>`;
    showBoxSize.innerHTML = `<p>${box}</p>`;

    showform('recommendation');
}


function handleFormResponse(response) {
    // TO DO: implement later
    // if response pos: go to next page, deactivate tinker-guard
    
}

function showform(dostuff) {
    if (dostuff == 'page1') {
        document.getElementById('page1').style.display = 'block';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'none';
    } else if (dostuff == 'page2') {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'none';
    } else if (dostuff == 'page3') {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
        document.getElementById('page4').style.display = 'none';
    } else if (dostuff == 'page4') {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'block';
        populateSummary();
    } else if (dostuff == 'recommendation') {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'none';
        document.getElementById('recommendation').style.display = 'block';
    }
}

function nextPage(page) {
    showform(page);
}

$(document).ready(function () {
    $('.select2').select2();
});

function populateSummary() {
    // Get all the input values
    var species = document.getElementById('species').value;
    var sex = document.getElementById('sex').value;
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var condition = document.getElementById('condition').value;
    var behavior = document.getElementById('behavior').value;
    var skeleton = document.getElementById('skeleton').value;
    var injuries = document.getElementById('injuries').value;

    // Populate the summary section with the gathered values
    document.getElementById('summary-species').innerText = species;
    document.getElementById('summary-sex').innerText = sex;
    document.getElementById('summary-age').innerText = age;
    document.getElementById('summary-weight').innerText = weight + ' g';
    document.getElementById('summary-condition').innerText = condition;
    document.getElementById('summary-behavior').innerText = behavior;
    document.getElementById('summary-skeleton').innerText = skeleton;
    document.getElementById('summary-injuries').innerText = injuries;
}
