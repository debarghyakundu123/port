// --- CALCULATE TOTAL EXPERIENCE DYNAMICALLY ---
function calculateTotalExperience() {
    const workExperiences = [
        { start: [2024, 7], end: [2024, 8] },   // Quantium: Aug 2024 - Sep 2024
        { start: [2025, 4], end: [2025, 7] },   // UpGrad: April 2025 - July 2025
        { start: [2025, 8], end: null }         // Policybazaar: Sep 2025 - Present
    ];

    let totalMonths = 0;
    const now = new Date();

    workExperiences.forEach(exp => {
        const startDate = new Date(exp.start[0], exp.start[1], 1);
        let endDate;

        if (exp.end === null) {
            endDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else {
            endDate = new Date(exp.end[0], exp.end[1], 1);
        }

        let diff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
        if (diff > 0) totalMonths += diff;
    });

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    const formattedExp = `${years}.${remainingMonths}`;

    const expElement = document.getElementById("total-experience");
    if (expElement) {
        expElement.innerText = `${formattedExp}+ Yrs`;
    }
}

// Run automatically when the page loads
document.addEventListener("DOMContentLoaded", calculateTotalExperience);


// --- MODAL & INTERACTION FUNCTIONS ---
function openModal(filePath, title, desc) {
    const mediaContainer = document.getElementById('modalMediaContainer');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;

    // Check if the file is a PDF
    if (filePath.toLowerCase().endsWith('.pdf')) {
        mediaContainer.innerHTML = `<iframe src="${filePath}" style="width: 100%; height: 450px; border: none; border-radius: 8px;" title="${title}"></iframe>`;
    } else {
        mediaContainer.innerHTML = `<img id="modalImg" src="${filePath}" alt="${title}" style="max-width: 100%; height: auto; border-radius: 8px;">`;
    }

    document.getElementById('certificateModal').classList.add('active');
}

function closeModal() {
    document.getElementById('certificateModal').classList.remove('active');
}

function copyEmail() {
    navigator.clipboard.writeText("debarghyakundu319@gmail.com");
    alert("Email copied to clipboard!");
}