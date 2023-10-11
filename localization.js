function changeLanguage(lang) {
    // Hide all content sections first
    const allContent = document.querySelectorAll('.content');
    for (let content of allContent) {
        content.style.display = 'none';
    }

    // Display the selected content
    const selectedContent = document.querySelectorAll(`.content[data-lang="${lang}"]`);
    for (let content of selectedContent) {
        content.style.display = 'block';
    }
}
