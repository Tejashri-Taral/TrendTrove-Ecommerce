document.addEventListener('DOMContentLoaded', function () {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        item.addEventListener('click', function () {
            const featureName = this.querySelector('h3').innerText;
            alert(`You clicked on the "${featureName}" feature!`);
        });
    });
});
