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