//filter blogs
$(document).ready(function () {
    $('.filters').click(function () {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000');
            
        }
        else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    //add active to button
    $('.filters').click(function () {
        $(this).addClass('activefilters').siblings().removeClass('activefilters');
    })
});

//header bg edit
let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 10)
});

function openModal() {
    document.getElementById('blogModal').style.display = 'block';
    document.getElementById('date').value = new Date().toISOString().split('T')[0]; // Set current date
}

function closeModal() {
    document.getElementById('blogModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('blogModal')) {
        closeModal();
    }
}

// Handle form submission
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const imageUpload = document.getElementById('imageUpload').files[0]; // File input
    const category = document.getElementById('category').value;
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const creatorPhoto = document.getElementById('creatorPhoto').files[0]; // File input
    const creatorName = document.getElementById('creatorName').value;

    // Create new post box
    const postBox = document.createElement('div');
    postBox.classList.add('post-box', category.toLowerCase()); // Add class based on category

    // Create and append elements
    const postImage = document.createElement('img');
    postImage.classList.add('post-image');
    postImage.src = URL.createObjectURL(imageUpload);
    postBox.appendChild(postImage);

    const postCategory = document.createElement('h2');
    postCategory.classList.add('category');
    postCategory.textContent = category;
    postBox.appendChild(postCategory);

    const postTitle = document.createElement('a');
    postTitle.classList.add('post-title');
    postTitle.href = 'post.html';
    postTitle.textContent = title;
    postBox.appendChild(postTitle);

    const postDate = document.createElement('span');
    postDate.classList.add('post-date');
    postDate.textContent = new Date(date).toLocaleDateString();
    postBox.appendChild(postDate);

    const postDesc = document.createElement('p');
    postDesc.classList.add('post-descp');
    postDesc.textContent = description;
    postBox.appendChild(postDesc);

    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');

    const profilePic = document.createElement('img');
    profilePic.classList.add('profile-picture');
    profilePic.src = URL.createObjectURL(creatorPhoto);
    profileDiv.appendChild(profilePic);

    const profileName = document.createElement('span');
    profileName.classList.add('profile-name');
    profileName.textContent = creatorName;
    profileDiv.appendChild(profileName);

    postBox.appendChild(profileDiv);

    // Append new post box to the existing section
    document.querySelector('.posts.container').appendChild(postBox);

    // Close the modal
    closeModal();
});

