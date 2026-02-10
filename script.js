

    document.getElementById("result").innerText =
        "Thank you! This herbal face wash is perfect for you 🌿";

/* FEEDBACK STORAGE */
function submitFeedback(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value || "Anonymous",
        skin: document.getElementById("skinType").value,
        rating: document.getElementById("rating").value,
        review: document.getElementById("review").value
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(data);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("Thank you for your feedback 💚");
    event.target.reset();
    displayReviews();
}

function displayReviews() {
    const container = document.getElementById("reviews");
    if (!container) return;

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    container.innerHTML = "";

    reviews.forEach(r => {
        const div = document.createElement("div");
        div.className = "review-card";
        div.innerHTML = `<strong>${r.name}</strong><br>${r.rating}<br>${r.review}`;
        container.appendChild(div);
    });
}

displayReviews();
