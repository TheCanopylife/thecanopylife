const spaces = [
    { title: 'Lounge & Cafe', icon: '♨', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=92&fm=jpg', text: 'Meet. Eat. Talk. Unwind. A comfortable social space for food, conversations, casual meetings and simply hanging out.' },
    { title: 'Relax', icon: '▰', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=92&fm=jpg', text: 'Switch off for a while. Comfortable seating, floor lounging, entertainment and spaces designed for doing a little less.' },
    { title: 'Focus', icon: '▣', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=92&fm=jpg', text: 'Your quiet corner. Dedicated workspaces, books, reading corners and creative spaces for when you need time with your thoughts.' },
    { title: 'Pantry', icon: '◒', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=92&fm=jpg', text: 'Make yourself at home. A simple shared pantry for refreshments, seasonal bites and everyday convenience.' }
];

const grid = document.querySelector('#space-grid');
grid.innerHTML = spaces.map((space) => `<article class="space-card"><img src="${space.image}" alt="${space.title} at The Canopy" loading="lazy"><div class="space-card-content"><span class="space-icon">${space.icon}</span><h3>${space.title.toUpperCase()}</h3><p>${space.text}</p><a href="#visit">Coming soon →</a></div></article>`).join('');

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => navigation.classList.remove('open')));

document.querySelector('#updates-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email');
    const message = document.querySelector('.form-message');
    message.textContent = `Thanks. ${email.value} is on the list.`;
    email.value = '';
    // Replace this local response with a Firebase addDoc call when backend setup begins.
});