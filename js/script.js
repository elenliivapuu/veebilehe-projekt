const btnSwitch = document.getElementById('theme-toggle')
const pageContent = document.getElementById('body')


btnSwitch.addEventListener('click', (e) => {
    e.preventDefault();

    // if (pageContent.classList.contains('light-theme')) {
    //     pageContent.classList.replace('light-theme', 'dark-theme');
    // } else if (pageContent.classList.contains('dark-theme')) {
    //     pageContent.classList.replace('dark-theme', 'light-theme');
    // }  
    pageContent.classList.toggle('light-theme');
})