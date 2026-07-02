function generateReport() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let english = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let science = Number(document.getElementById("science").value);
    let computer = Number(document.getElementById("computer").value);
    let hindi = Number(document.getElementById("hindi").value);

    // Validation
    if (
        name === "" || roll === "" ||
        document.getElementById("english").value === "" ||
        document.getElementById("math").value === "" ||
        document.getElementById("science").value === "" ||
        document.getElementById("computer").value === "" ||
        document.getElementById("hindi").value === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    let total = english + math + science + computer + hindi;
    let percentage = total / 5;

    let grade = "";
    let result = "";

    if (percentage >= 90) {
        grade = "A+";
        result = "PASS";
    } else if (percentage >= 80) {
        grade = "A";
        result = "PASS";
    } else if (percentage >= 70) {
        grade = "B";
        result = "PASS";
    } else if (percentage >= 60) {
        grade = "C";
        result = "PASS";
    } else if (percentage >= 40) {
        grade = "D";
        result = "PASS";
    } else {
        grade = "F";
        result = "FAIL";
    }

    let resultBox = document.getElementById("result");
    resultBox.style.display = "block";

    resultBox.innerHTML = `
        <h2>📋 Report Card</h2>
        <hr><br>

        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Roll Number:</strong> ${roll}</p>

        <br>

        <p><strong>English:</strong> ${english}</p>
        <p><strong>Math:</strong> ${math}</p>
        <p><strong>Science:</strong> ${science}</p>
        <p><strong>Computer:</strong> ${computer}</p>
        <p><strong>Hindi:</strong> ${hindi}</p>

        <br>

        <p><strong>Total Marks:</strong> ${total} / 500</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>

        <p><strong>Result:</strong>
        <span class="${result === "PASS" ? "pass" : "fail"}">
        ${result}
        </span>
        </p>
        <h3 style="color :brown;">Thank you!</h3>
    `;
}

// Reset Function
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("english").value = "";
    document.getElementById("math").value = "";
    document.getElementById("science").value = "";
    document.getElementById("computer").value = "";
    document.getElementById("hindi").value = "";

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.display = "none";
}