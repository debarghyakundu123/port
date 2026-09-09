// --- COMBINED DOM CONTENT LOADED EVENT ---
document.addEventListener("DOMContentLoaded", function() {
    calculateTotalExperience();
});

// --- CALCULATE TOTAL EXPERIENCE DYNAMICALLY ---
function calculateTotalExperience() {
    const workExperiences = [
        { start: [2024, 6], end: [2024, 7] },   // Quantium: July 2024 - August 2024
        { start: [2025, 3], end: [2025, 6] },   // UpGrad: April 2025 - July 2025
        { start: [2025, 8], end: null }         // Policybazaar: September 2025 - Present
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

// --- SINGLE PAGE MODAL (Policybazaar & Quantium) ---
function openModal(filePath, title, desc) {
    const mediaContainer = document.getElementById('modalMediaContainer');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;

    mediaContainer.innerHTML = `<img id="modalImg" src="${filePath}" alt="${title}" style="max-width: 100%; height: auto; border-radius: 8px;">`;
    document.getElementById('certificateModal').classList.add('active');
}

// --- MULTI-PAGE MODAL (UpGrad - 3 Pages stacked) ---
function openMultiPageModal(title, desc, imageArray) {
    const mediaContainer = document.getElementById('modalMediaContainer');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;

    let imagesHtml = `<div style="display: flex; flex-direction: column; gap: 15px; max-height: 65vh; overflow-y: auto; width: 100%; padding-right: 5px;">`;
    imageArray.forEach((imgPath, index) => {
        imagesHtml += `<img src="${imgPath}" alt="Page ${index + 1}" style="width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">`;
    });
    imagesHtml += `</div>`;

    mediaContainer.innerHTML = imagesHtml;
    document.getElementById('certificateModal').classList.add('active');
}

function closeModal() {
    document.getElementById('certificateModal').classList.remove('active');
}

function copyEmail() {
    navigator.clipboard.writeText("debarghyakundu319@gmail.com");
    alert("Email copied to clipboard!");
}