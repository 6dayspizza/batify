function showform(dostuff) {
    if (dostuff == "page1") {
      document.getElementById("page1").style.display = "block";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "none";
    } else if (dostuff == "page2") {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "block";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "none";
    } else if (dostuff == "page3") {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
        document.getElementById("page4").style.display = "none";
    } else if (dostuff == "page4") {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "block";
    } else if (dostuff == "recommendation") {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "none";
        document.getElementById("recommendation").style.display = "block";
      }
  }

function nextPage(page) {
    showform(page);
  }
  
function toggleAnswer(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === "none") {
      answer.style.display = "block";
  } else {
      answer.style.display = "none";
  }
}

document.getElementById('toggleDarkMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
 });

function displaySummary() {
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
  document.getElementById('summary-weight').innerText = weight + " g";
  document.getElementById('summary-condition').innerText = condition;
  document.getElementById('summary-behavior').innerText = behavior;
  document.getElementById('summary-skeleton').innerText = skeleton;
  document.getElementById('summary-injuries').innerText = injuries;

  // Show the summary section
  document.getElementById('summary').style.display = 'block';
}

// Add event listener to the FINISH button
document.getElementById('gotosummary').addEventListener('click', displaySummary);

var speciesCount = {
  'Hypsugo savii': 0,
  'Pipistrellus pipistrellus': 0,
  'Pipistrellus kuhlii': 0,
  'Nyctalus noctula': 0,
  'Myotis bechsteinii': 0,
  'Myotis myotis': 0
};

function updateSpeciesCount(species) {
  speciesCount[species]++;
}

 document.getElementById('species').addEventListener('change', function() {
  var selectedSpecies = this.value;
  updateSpeciesCount(selectedSpecies);
}); 

function displaySpeciesCounts() {
  for (var species in speciesCount) {
      console.log(species + ': ' + speciesCount[species]);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Get the ABOUT link and submenu
  var aboutLink = document.getElementById('about-link');
  var aboutSubmenu = document.getElementById('about-submenu');

  // Add click event listener to the ABOUT link
  aboutLink.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Toggle the visibility of the submenu
      aboutSubmenu.classList.toggle('show');
  });
});