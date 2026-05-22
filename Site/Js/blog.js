const container = document.querySelector(".blog-container");

if (container) {
	displayPosts(posts);
}


//Filter Posts
function displayPosts(filteredPosts) {
    container.innerHTML = "";

    filteredPosts.forEach((post, index) => {
        const postHTML = `
            <div class="blog-card">
                <img src="${post.image}" alt="Blog image">
                <h3>${post.title}</h3>
                <p class="date">${post.date}</p>
                <p class="tags">#${post.tags.join(" #")}</p>
                <p>${post.content.substring(0, 80)}...</p>
                <button onclick="openPost(${index})">Read More</button>
            </div>
        `;
        container.innerHTML += postHTML;
    });
}

function filterPosts(tag) {
    if (tag === "all") {
        displayPosts(posts);
    } else {
        const filtered = posts.filter(post => post.tags.includes(tag));
        displayPosts(filtered);
    }
}

function openPost(index) {
    localStorage.setItem("selectedPost", index);
    window.location.href = "post.html";
}

// Search Bar

function searchPosts() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const filtered = posts.filter(post => {
        return (
            post.title.toLowerCase().includes(searchValue) ||
            post.content.toLowerCase().includes(searchValue) ||
            post.tags.join(" ").toLowerCase().includes(searchValue)
        );
    });

    displayPosts(filtered);
}
	
if (commentsList) {
	loadComments();
}
 
// Load all posts by default
displayPosts(posts);
