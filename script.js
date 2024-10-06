document.addEventListener('DOMContentLoaded', function () {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        item.addEventListener('click', function () {
            const featureName = this.querySelector('h3').innerText;
            alert(`You clicked on the "${featureName}" feature!`);
        });
    });
});
AOS.init();
        let headerVisible = false;
        document.getElementById("menu").addEventListener("click", function () {

            if (headerVisible === false) {
                document.getElementById("header").style.height = "280px";
                headerVisible = true;
            }
            else {
                document.getElementById("header").style.height = "50px";
                headerVisible = false;
            }

        })