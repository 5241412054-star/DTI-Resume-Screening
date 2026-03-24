function analyze() {
  let jobDesc = document.getElementById("jobDesc").value.toLowerCase();
  let skills = ["python", "java", "sql", "ai", "ml"];
  let found = [];
  skills.forEach(skill => {
    if (jobDesc.includes(skill)) {
      found.push(skill);
    }
  });
  let missing = skills.filter(skill => !found.include(skill));
  document.getElementById("Result").innerHTML = 
    "Matched Skills: "+ found.join(", ") +
    "<br>Missing Skills: " + missing.join(", "):
}
