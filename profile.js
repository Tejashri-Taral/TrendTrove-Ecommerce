// Toggle between view and edit mode
function editProfile() {
    document.getElementById("edit-profile").style.display = "none";
    document.getElementById("save-profile").style.display = "inline";

    // Show input fields and hide span texts
    document.querySelectorAll("span").forEach(span => span.style.display = "none");
    document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']").forEach(input => {
        input.style.display = "inline";
        input.value = document.getElementById(`user-${input.id.split('-')[1]}`).textContent;
    });
}

// Save profile changes
function saveProfile() {
    document.getElementById("edit-profile").style.display = "inline";
    document.getElementById("save-profile").style.display = "none";

    // Hide input fields and update span texts
    document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']").forEach(input => {
        input.style.display = "none";
        const field = `user-${input.id.split('-')[1]}`;
        document.getElementById(field).textContent = input.value;
    });
    document.querySelectorAll("span").forEach(span => span.style.display = "inline");
}

// Update profile picture
function updateProfilePic() {
    const fileInput = document.getElementById('upload-pic');
    const profilePic = document.getElementById('profile-pic');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Show file input when clicking "Change Photo" text
document.querySelector('.profile-pic::after').addEventListener('click', () => {
    document.getElementById('upload-pic').click();
});
