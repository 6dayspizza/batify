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
    } else if (dostuff == "summary") {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "none";
        document.getElementById("summary").style.display = "block";
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
  document.getElementById('summary-weight').innerText = weight;
  document.getElementById('summary-condition').innerText = condition;
  document.getElementById('summary-behavior').innerText = behavior;
  document.getElementById('summary-skeleton').innerText = skeleton;
  document.getElementById('summary-injuries').innerText = injuries;

  // Show the summary section
  document.getElementById('summary').style.display = 'block';
}

// Add event listener to the FINISH button
document.getElementById('finish-button').addEventListener('click', displaySummary);