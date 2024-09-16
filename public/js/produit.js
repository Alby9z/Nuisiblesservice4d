document.addEventListener("DOMContentLoaded", function() {
    let summaries = document.querySelectorAll("summary");
    summaries.forEach((summary) => {
        let details = summary.parentElement;
        details.removeAttribute("open");
        summary.addEventListener("click", function(e) {
            e.preventDefault(); 
            if (!details.hasAttribute("open")) {
                details.setAttribute("open", "true");  
            } else {
                details.removeAttribute("open"); 
            }
        });
    });
});

