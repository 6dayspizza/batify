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

async function convertMealworms(mealworms) {
    console.log(mealworms);
    const inputValue = mealworms;
    const conversionType = 'mwtobuf';

    const response = await fetch(`https://convert-micro.onrender.com/${conversionType}?num=${inputValue}`);
    const responseData = await response.json();

    console.log('Conversion result:', responseData);

    const popup = document.getElementById('ConversionPopup');
    popup.innerHTML = `<span>This converts to approximately ${responseData.buffalos} grams of buffalo worms.</span>`;

    // Show the popup (optional: if you want to display it immediately)
    popup.classList.add('show');
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
    const { foodValueCombined, box, foodValue } = data;

    const showMealPlan = document.getElementById('mealplan');
    const showBoxSize = document.getElementById('box');
    const volunteerDetails = document.getElementById('volunteer');

    if (foodValue!== null) {
        showMealPlan.innerHTML = `
        <div class="meal-plan-container">
            <span>${foodValueCombined}</span>
            <div class="tooltip">
                <button id="popupTriggerConversion" class="popup" onclick="convertMealworms(${foodValue})">
                    <img src="/icons/tool.svg"></img>
                    <div id="ConversionPopup" class="popuptext">
                        <span>what goes here?</span>
                    </div>
                </button>
                <span class="tooltiptext">not enough mealworms? click for conversion to buffalo worms.</span>
            </div>
        </div>`;
    } else {
        showMealPlan.innerHTML = `<p>${foodValueCombined}</p>`;
    };
    showBoxSize.innerHTML = `<p>${box}</p>`;

    try {
        const volunteerResponse = await fetch('https://desolate-sands-39354-a2c7863a83bc.herokuapp.com/');
        const volunteerData = await volunteerResponse.json();
        const { name, email } = volunteerData;

        volunteerDetails.innerHTML = `
            <div class="meal-plan-container">
                <span>${name}</span>
                <span><a href="mailto:${email}?subject=new bat!&body=There has been a new bat assigned to you. Please check your schedule.">
                    <button id="btnOutlook" class="confirm">notify</button>
                </a></span>
            </div>`;
    } catch (error) {
        console.error('Error fetching volunteer data:', error);
        volunteerDetails.innerHTML = `<p>Error fetching volunteer data</p>`;
    }

    showform('recommendation');
}


function handleFormResponse(response) {
    // TO DO: implement later
    // if response pos: go to next page, deactivate tinker-guard
    
}

function showform(dostuff) {
    if (dostuff == 'page1') {
        document.getElementById('page1').style.display = 'block';
        document.getElementById('page4').style.display = 'none';
    } else if (dostuff == 'page4') {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page4').style.display = 'block';
        populateSummary();
    } else if (dostuff == 'recommendation') {
        document.getElementById('page1').style.display = 'none';
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
