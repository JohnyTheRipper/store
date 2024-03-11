// JavaScript for responsive menu
const toggleMenu = document.querySelector('.toggle-menu');
const navigation = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', () => {
    navigation.classList.toggle('show');
});
