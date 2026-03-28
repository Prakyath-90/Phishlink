// =====================
// SIDEBAR TOGGLE
// =====================
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("closed");
}

// =====================
// SECTION SWITCH + ACTIVE HIGHLIGHT
// =====================
function showSection(id, event) {

    // Hide all sections
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    // Show selected section
    document.getElementById(id).classList.add("active");

    // Sidebar active highlight
    let items = document.querySelectorAll(".sidebar li");
    items.forEach(item => item.classList.remove("active"));

    if (event) {
        event.currentTarget.classList.add("active");
    }
}

// =====================
// HISTORY STORAGE
// =====================
let historyData = [];

// =====================
// URL SCANNER
// =====================
function scanURL() {
    let input = document.getElementById("urlInput").value.trim();
    let resultBox = document.getElementById("urlResult");

    if (input === "") {
        resultBox.style.display = "none";
        return;
    }

    resultBox.style.display = "flex";

    let percent = generateThreat(input);
    animateCircle("urlCircle", percent);
    setText("urlText", percent);

    // Save history
    historyData.push("URL: " + input);
    updateHistory();
}

// =====================
// EMAIL SCANNER
// =====================
function scanEmail() {
    let input = document.getElementById("emailInput").value.trim();
    let resultBox = document.getElementById("emailResult");

    if (input === "") {
        resultBox.style.display = "none";
        return;
    }

    resultBox.style.display = "flex";

    let percent = generateThreat(input);
    animateCircle("emailCircle", percent);
    setText("emailText", percent);

    // Save history
    historyData.push("Email: " + input);
    updateHistory();
}

// =====================
// UPDATE HISTORY SECTION
// =====================
function updateHistory() {
    let list = document.getElementById("historyList");

    list.innerHTML = "";

    historyData.forEach(item => {
        let p = document.createElement("p");
        p.innerText = item;
        list.appendChild(p);
    });
}

// =====================
// THREAT LOGIC
// =====================
function generateThreat(text) {
    text = text.toLowerCase();

    if (text.includes("free") || text.includes("win") || text.includes("urgent")) {
        return 85;
    }
    else if (text.includes("login") || text.includes("verify") || text.includes("bank")) {
        return 55;
    }
    else {
        return 20;
    }
}

// =====================
// CIRCLE ANIMATION
// =====================
function animateCircle(id, percent) {
    let circle = document.getElementById(id);
    let current = 0;

    let interval = setInterval(() => {
        if (current >= percent) {
            clearInterval(interval);
        } else {
            current++;
            circle.innerText = current + "%";
        }
    }, 15);

    // Color change
    if (percent > 70) {
        circle.style.borderColor = "red";
    } else if (percent > 40) {
        circle.style.borderColor = "yellow";
    } else {
        circle.style.borderColor = "lime";
    }
}

// =====================
// TEXT RESULT
// =====================
function setText(id, percent) {
    let text = document.getElementById(id);

    if (percent > 70) {
        text.innerText = "High Risk - Not Safe ❌";
        text.style.color = "red";
    } else if (percent > 40) {
        text.innerText = "Medium Risk ⚠️";
        text.style.color = "yellow";
    } else {
        text.innerText = "Low Risk - Safe ✅";
        text.style.color = "lime";
    }
}

// =====================
// MODAL (READ MORE)
// =====================
function openModal(person) {
    let modal = document.getElementById("modal");
    let title = document.getElementById("modalTitle");
    let text = document.getElementById("modalText");

    modal.style.display = "flex";

    if (person === "prakyath") {
        title.innerText = "S. Prakyath Balachandra";
        text.innerText = `I am S. Prakyath Balachandra, a B.Tech student in Computer Science and Engineering (Cyber Security) at Geethanjali College of Engineering and Technology, Hyderabad (Roll No: 24R11A6290). I am interested in cybersecurity, programming, and web development. I have developed a Phishing Detection Website as part of my PBL project. I have a strong foundation in C programming and Data Structures and am currently learning Python, HTML, and SQL. I also work as a Designer in the Media House and continuously improve my technical and problem-solving skills.`;
    }

    else if (person === "pranav") {
        title.innerText = "R. Pranav Teja";
        text.innerText = `I am R. Pranav Teja, a B.Tech student in Computer Science and Engineering (Cyber Security) at Geethanjali College of Engineering and Technology, Hyderabad (Roll No: 24R11A6284). I am a video editor at the Media House, a Blender artist, and have strong knowledge in cybersecurity and web development. I am passionate about creative design and technical development, and I contribute to both visual and technical aspects of projects.`;
    }

    else if (person === "mahesh") {
        title.innerText = "S. Mahesh";
        text.innerText = `I am S. Mahesh, a B.Tech student in Computer Science and Engineering (Cyber Security) at Geethanjali College of Engineering and Technology, Hyderabad (Roll No: 24R11A6292). I am the coordinator of Street Cause at our college and am currently learning full stack development while improving my problem-solving skills. I am passionate about both social service and technical growth, and I actively contribute to team projects and activities.`;
    }
}

// CLOSE MODAL
function closeModal() {
    document.getElementById("modal").style.display = "none";
}