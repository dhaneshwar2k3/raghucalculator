const gradePoints = {
    'O': 10, 'S': 9, 'A': 8, 'B': 7, 'C': 6, 'D': 5, 'F': 0
  };
  
  function generateSubjectInputs() {
    const num = parseInt(document.getElementById('numSubjects').value);
    const form = document.getElementById('subjectsForm');
    form.innerHTML = '';
  
    for (let i = 0; i < num; i++) {
      form.innerHTML += `
        <div class="subject-entry">
          <label>Subject ${i + 1} Grade:</label>
          <select name="grade">
            <option value="O">O</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
          <label>Credits:</label>
          <input type="number" name="credit" min="1" required>
        </div>
      `;
    }
    form.innerHTML += `<button type="submit">Calculate SGPA</button>`;
  }
  
  function calculateSGPA() {
    const grades = document.getElementsByName('grade');
    const credits = document.getElementsByName('credit');
    let totalCredits = 0;
    let totalPoints = 0;
  
    for (let i = 0; i < grades.length; i++) {
      const grade = grades[i].value;
      const credit = parseFloat(credits[i].value);
      totalCredits += credit;
      totalPoints += gradePoints[grade] * credit;
    }
  
    const sgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('sgpaResult').innerHTML = `<h3>SGPA: ${sgpa}</h3>`;
  }
  
  function calculateCGPA() {
    const input = document.getElementById('sgpaList').value;
    const sgpas = input.split(',').map(s => parseFloat(s.trim()));
    if (sgpas.some(isNaN)) {
      document.getElementById('cgpaResult').innerText = 'Invalid SGPA list';
      return;
    }
    const sum = sgpas.reduce((a, b) => a + b, 0);
    const cgpa = (sum / sgpas.length).toFixed(2);
    const percentage = ((cgpa - 0.5) * 10).toFixed(1);
  
    document.getElementById('cgpaResult').innerHTML = `<h4>CGPA: ${cgpa}</h4><h4>Percentage: ${percentage}%</h4>`;
  }
  
