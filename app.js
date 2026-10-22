const concepts = {
  atelier: { name: 'Ателье', subtitle: 'Личная практика массажа', number: '01' },
  motion: { name: 'Движение', subtitle: 'Массаж. Восстановление. Вы.', number: '02' },
  balance: { name: 'Баланс', subtitle: 'Врач-остеопат, массажист', number: '03' }
};

const requestedConcept = new URLSearchParams(location.search).get('concept');
const concept = Object.hasOwn(concepts, requestedConcept) ? requestedConcept : 'balance';
const current = concepts[concept];
document.body.dataset.theme = concept;
document.title = concept === 'balance' ? 'Остеопатия и массаж в Новосибирске — Юрьев Дмитрий Валерьевич' : `${current.name} — Дмитрий Юрьев | Концепция ${current.number}`;
document.querySelector(`[data-concept="${concept}"]`).setAttribute('aria-current', 'page');

const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;
const bookingButton = (label = 'Записаться на сеанс', className = '') => `<button class="button ${className}" data-booking>${label}${icon('arrow-up-right')}</button>`;

function header() {
  return `<header class="site-header wrap">
    <a class="brand" href="#" aria-label="Дмитрий Юрьев, в начало страницы">
      <span class="monogram">дю<span>.</span></span>
      <span class="brand-copy">Дмитрий Юрьев<small>${current.subtitle}</small></span>
    </a>
    <nav id="main-nav" class="main-nav" aria-label="Главная навигация">
      ${concept === 'balance' ? '<a role="link" aria-disabled="true">Дипломы</a><a href="#reviews">Отзывы</a><a href="#photos">Фото</a><a href="#subscriptions">Абонементы</a><a href="#certificates">Подарочные сертификаты</a><a href="#contacts">Контакты</a>' : '<a href="#about">Обо мне</a><a href="#services">Массаж</a><a href="#approach">Подход</a><a href="#questions">Вопросы</a>'}
    </nav>
    ${concept === 'balance' ? `<a class="header-booking" role="link" aria-disabled="true">Онлайн-запись ${icon('calendar-days')}</a>` : `<button class="header-booking" data-booking>Записаться ${icon('arrow-up-right')}</button>`}
    <button class="menu-button icon-button" aria-expanded="false" aria-controls="main-nav" aria-label="Открыть меню">${icon('menu')}</button>
  </header>`;
}

const heroes = {
  atelier: `<section class="hero hero-atelier" aria-labelledby="hero-title">
    <img class="hero-photo" src="assets/portrait.jpg" alt="Дмитрий Юрьев во время сеанса массажа" fetchpriority="high" width="1920" height="1280">
    <div class="hero-wash"></div>
    <div class="hero-content wrap">
      <div class="hero-copy">
        <div class="eyebrow"><span class="small-line"></span>Искусство внимательного прикосновения</div>
        <h1 id="hero-title">Дмитрий<br><em>Юрьев</em><span class="title-dot">.</span></h1>
        <p class="hero-description">Массаж, в котором<br>главное — <em>вы.</em></p>
        <p class="hero-secondary">Меньше напряжения.<br>Больше лёгкости и контакта с собой.</p>
        ${bookingButton()}
      </div>
      <div class="photo-caption"><span class="caption-rule"></span><span>Бережно к телу.<br>С вниманием к человеку.</span></div>
      <a class="hero-scroll" href="#about" aria-label="Перейти к знакомству">${icon('arrow-down')}</a>
    </div>
  </section>
  <div class="values-strip wrap"><span>Личная практика</span><span class="strip-star">✳</span><span>Индивидуальный подход</span><span class="strip-star">✳</span><span>Время только для вас</span></div>`,
  motion: `<section class="hero hero-motion" aria-labelledby="hero-title">
    <img class="hero-photo" src="assets/motion.jpg" alt="Работа Дмитрия Юрьева с мышцами спины" fetchpriority="high" width="1920" height="1280">
    <div class="hero-wash"></div>
    <div class="hero-content wrap">
      <div class="motion-topline"><span><span class="status-dot"></span>ЛИЧНАЯ ПРАКТИКА МАССАЖА</span><span>ТЕЛО В ЦЕНТРЕ ВНИМАНИЯ</span></div>
      <div class="hero-copy">
        <h1 id="hero-title">ДМИТРИЙ<br><span>ЮРЬЕВ</span><span class="motion-period">.</span></h1>
        <div class="motion-description"><span class="motion-line"></span><p>Снять напряжение.<br>Вернуться к своему ритму.</p></div>
        ${bookingButton('Время на восстановление')}
      </div>
      <div class="motion-side"><span>ВНИМАНИЕ К ДЕТАЛЯМ</span><strong>01—01</strong><span>ОДИН СЕАНС.<br>ОДИН ЧЕЛОВЕК.<br>ПОЛНОЕ ВНИМАНИЕ.</span></div>
      <div class="motion-bottom"><span>МАССАЖ / РАБОТА С ТЕЛОМ</span><a href="#services">НАЙТИ СВОЙ ФОРМАТ ${icon('arrow-down-right')}</a></div>
    </div>
  </section>
  <div class="motion-ticker"><span>МЕНЬШЕ НАПРЯЖЕНИЯ</span>${icon('asterisk')}<span>БОЛЬШЕ ДВИЖЕНИЯ</span>${icon('asterisk')}<span>ВАШ РИТМ</span>${icon('asterisk')}</div>`,
  balance: `<section class="hero hero-balance hero-practice" aria-labelledby="hero-title">
    <img class="hero-photo" src="assets/balance.jpg" alt="Светлый массажный кабинет и Дмитрий Юрьев за работой" fetchpriority="high" width="1920" height="1280">
    <div class="hero-wash"></div>
    <div class="hero-content wrap">
      <h1 id="hero-title">Остеопатия<br> и массаж<br><span>в Новосибирске</span></h1>
      <a class="hero-phone" href="tel:+79130002721">${icon('phone')}+7-913-000-27-21</a>
    </div>
  </section>
  <section class="credentials" aria-labelledby="doctor-name"><div class="wrap credentials-inner">
    <h2 id="doctor-name">Юрьев Дмитрий<br> Валерьевич</h2>
    <div><p class="credentials-qualification">Кандидат медицинских наук, врач-остеопат, массажист. <strong>25 лет практики.</strong></p><p class="credentials-membership">Член медицинской ассоциации остеопатов и лиги массажистов.</p></div>
  </div></section>`
};

function about() {
  return `<section id="about" class="about-section section-space wrap">
    <div class="section-label"><span class="section-index">01 / ЗНАКОМСТВО</span><span class="eyebrow">За каждым прикосновением — человек</span></div>
    <div class="about-grid">
      <figure class="about-image"><img src="assets/about.jpg" alt="Дмитрий Юрьев работает с шейно-плечевой зоной" loading="lazy" width="1100" height="733"><figcaption>Дмитрий Юрьев <span>Массажист / личная практика</span></figcaption></figure>
      <div class="about-copy"><h2>${concept === 'motion' ? 'НЕ ПРОСТО ТЕХНИКА.<br><em>ВНИМАНИЕ К ВАМ.</em>' : 'Сначала — человек.<br><em>Потом — техника.</em>'}</h2><p>Тело у каждого рассказывает свою историю. Рабочий день за компьютером, активная тренировка или просто накопившаяся усталость.</p><p>Для меня массаж начинается с разговора: как вы себя чувствуете, что вас беспокоит и чего вы ждёте от сеанса. Так мы находим подходящий именно вам ритм и интенсивность.</p><a class="text-link" href="#approach">Мой подход ${icon('arrow-up-right')}</a><span class="signature">Дмитрий Юрьев</span></div>
    </div>
  </section>`;
}

function services() {
  const formats = [
    { name: 'Массаж спины', text: 'Внимание к спине, шее и плечам. Когда хочется отпустить накопившееся напряжение.', image: 'back.jpg', tag: 'СВОБОДА ДВИЖЕНИЯ' },
    { name: 'Общий массаж', text: 'Последовательная работа с телом. Время переключиться с повседневных дел на себя.', image: 'body.jpg', tag: 'ВНИМАНИЕ К ТЕЛУ' },
    { name: 'Массаж лица', text: 'Бережная работа с лицом и шейной зоной. Спокойный ритм и мягкое прикосновение.', image: 'face.jpg', tag: 'ЛЁГКОСТЬ И СПОКОЙСТВИЕ' }
  ];
  return `<section id="services" class="services-section section-space"><div class="wrap">
    <div class="section-heading"><div><span class="section-index">02 / ФОРМАТЫ МАССАЖА</span><h2>${concept === 'motion' ? 'ЧТО НУЖНО<br><em>ВАШЕМУ ТЕЛУ?</em>' : 'Ваше тело.<br><em>Ваш формат заботы.</em>'}</h2></div><p>Не нужно выбирать технику заранее.<br>Обсудим ваши ощущения<br>и подберём подходящий сеанс.</p></div>
    <div class="services-grid">${formats.map((format, index) => `<article class="service"><div class="service-image"><img src="assets/${format.image}" alt="${format.name}: фрагмент сеанса" loading="lazy" width="1100" height="733"><span class="service-number">0${index + 1}</span><button data-booking class="service-arrow icon-button" aria-label="Узнать о записи: ${format.name}" title="Узнать о записи">${icon('arrow-up-right')}</button></div><span class="service-tag">${format.tag}</span><h3>${format.name}</h3><p>${format.text}</p></article>`).join('')}</div>
  </div></section>`;
}

function approach() {
  return `<section id="approach" class="approach-section section-space wrap">
    <div class="section-heading"><div><span class="section-index">03 / МОЙ ПОДХОД</span><h2>Без спешки.<br><em>В диалоге с вами.</em></h2></div><p>Хороший сеанс — не набор движений.<br>Это внимание, обратная связь<br>и уважение к вашим ощущениям.</p></div>
    <div class="steps-grid"><article><span>01</span><h3>Сначала знакомимся</h3><p>Обсуждаем самочувствие, пожелания и возможные ограничения до начала сеанса.</p></article><article><span>02</span><h3>Находим ваш ритм</h3><p>Выбираем комфортную интенсивность. Вы можете попросить изменить её в любой момент.</p></article><article><span>03</span><h3>Оставляем время себе</h3><p>После сеанса не торопимся. Обсуждаем ощущения и дальнейший уход за собой.</p></article></div>
  </section>`;
}

function questions() {
  return `<section id="questions" class="questions-section section-space"><div class="wrap questions-grid"><div><span class="section-index">04 / ПЕРЕД ВСТРЕЧЕЙ</span><h2>Можно<br><em>спросить.</em></h2></div><div class="question-list">
    <details><summary>Как выбрать подходящий массаж? ${icon('plus')}</summary><p>Начнём с вашего запроса. Расскажите, где чувствуете напряжение и чего ожидаете от сеанса. Формат и интенсивность обсудим вместе до начала работы.</p></details>
    <details><summary>Нужно ли готовиться к первому сеансу? ${icon('plus')}</summary><p>Специальная подготовка обычно не требуется. Выберите удобную одежду и заранее сообщите о состоянии здоровья, травмах и рекомендациях вашего врача.</p></details>
    <details><summary>Массаж обязательно должен быть болезненным? ${icon('plus')}</summary><p>Боль не является целью сеанса. Важно сообщать о своих ощущениях: интенсивность можно уменьшить, изменить технику или остановить сеанс.</p></details>
    <details><summary>Есть ли противопоказания? ${icon('plus')}</summary><p>Да. При температуре, острых состояниях, повреждениях кожи и некоторых заболеваниях массаж может быть противопоказан. При сомнениях сначала проконсультируйтесь с лечащим врачом.</p></details>
  </div></div></section>`;
}

function footer() {
  return `<section id="contact" class="contact-section"><div class="wrap"><span class="eyebrow">Маленькая пауза. Большое внимание к себе.</span><h2>${concept === 'motion' ? 'ВЕРНИТЕСЬ<br><em>К СВОЕМУ РИТМУ.</em>' : 'Позвольте себе<br><em>выдохнуть.</em>'}</h2>${bookingButton('Обсудить первый сеанс')}<span class="contact-caption">Личная практика. По предварительной записи.</span></div></section>
    <footer class="site-footer wrap"><a class="footer-name" href="#">Дмитрий Юрьев<span>Личная практика массажа</span></a><p>Есть противопоказания.<br>При необходимости проконсультируйтесь с врачом.</p><a href="#" class="back-top" aria-label="В начало страницы">Наверх ${icon('arrow-up')}</a></footer>`;
}

function practiceContent() {
  return `<section class="practice-section section-space wrap" aria-labelledby="practice-title">
    <div class="section-heading"><div><span class="section-index">ПРИЁМ СПЕЦИАЛИСТА</span><h2 id="practice-title">Остеопатия<br>и медицинский массаж</h2></div><p>Методы работы подбираются индивидуально<br>с учётом состояния здоровья,<br>показаний и противопоказаний.</p></div>
    <div class="practice-copy"><h3>Порядок приёма</h3><p>Консультация включает осмотр, остеопатическое тестирование и оценку результатов МРТ при их наличии.</p><p>В зависимости от ситуации применяются остеопатическая коррекция, медицинский массаж, мягкие мануальные и висцеральные техники. План работы обсуждается до начала приёма.</p></div>
  </section>
  <div class="trust-strip"><div class="wrap trust-grid">
    <section id="reviews" class="trust-item" aria-labelledby="reviews-title"><h2 id="reviews-title">Отзывы</h2><a class="text-link" href="https://prodoctorov.ru/novosibirsk/vrach/202379-yurev/" target="_blank" rel="noopener noreferrer">Отзывы на ПроДокторов ${icon('arrow-up-right')}</a></section>
    <section id="prices" class="trust-item" aria-labelledby="prices-title"><h2 id="prices-title">Стоимость услуг</h2><a class="text-link" role="link" aria-disabled="true">Посмотреть стоимость ${icon('arrow-up-right')}</a></section>
  </div></div>
  <section id="photos" class="photos-section section-space"><div class="wrap"><div class="section-heading"><div><span class="section-index">КАБИНЕТ И РАБОТА СПЕЦИАЛИСТА</span><h2>Фото</h2></div></div><div class="practice-gallery">
    <a href="assets/balance.jpg" target="_blank" rel="noopener" aria-label="Открыть фото: остеопатический приём"><img src="assets/balance.jpg" alt="Дмитрий Юрьев во время приёма в кабинете" loading="lazy" width="1920" height="1280"></a>
    <a href="assets/back.jpg" target="_blank" rel="noopener" aria-label="Открыть фото: массаж спины"><img src="assets/back.jpg" alt="Проведение массажа спины" loading="lazy" width="1100" height="733"></a>
    <a href="assets/about.jpg" target="_blank" rel="noopener" aria-label="Открыть фото: работа с шейной зоной"><img src="assets/about.jpg" alt="Работа с шейной зоной" loading="lazy" width="1100" height="733"></a>
  </div></div></section>
  <section id="subscriptions" class="section-space wrap information-row"><div><span class="section-index">ПОСЕЩЕНИЕ СПЕЦИАЛИСТА</span><h2>Абонементы</h2></div><div class="information-copy"><p>Условия приобретения, количество приёмов, стоимость и срок действия абонемента можно уточнить по телефону.</p><a class="text-link" href="tel:+79130002721">Уточнить условия ${icon('phone')}</a></div></section>
  <section id="certificates" class="certificate-section section-space"><div class="wrap information-row"><div><span class="section-index">ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</span><h2>Подарочные<br>сертификаты</h2></div><div class="information-copy"><p>Номинал, срок действия и порядок оформления подарочного сертификата уточняйте по телефону. Перед использованием необходимо учитывать противопоказания к процедурам.</p><a class="text-link" href="tel:+79130002721">Уточнить условия ${icon('phone')}</a></div></div></section>
  <section id="contacts" class="practice-contacts section-space"><div class="wrap information-row"><div><span class="section-index">ЗАПИСЬ НА ПРИЁМ</span><h2>Контакты</h2><a class="contact-phone" href="tel:+79130002721">+7-913-000-27-21</a><nav class="messenger-links" aria-label="Написать в мессенджере">
    <a href="https://max.ru/u/f9LHodD0cOIzEonDq6VWiD3lzLXOnBO1e0lJwWPNoPPOwvXJeKhLbxDGxgk" target="_blank" rel="noopener noreferrer">${icon('message-circle')}MAX</a>
    <a href="https://t.me/+79130002721" target="_blank" rel="noopener noreferrer">${icon('send')}Telegram</a>
    <a href="https://wa.me/79130002721" target="_blank" rel="noopener noreferrer">${icon('message-circle')}WhatsApp</a>
  </nav></div><div class="information-copy"><h3>Новосибирск, ул. Нижегородская, 18</h3><p>Метро «Октябрьская».<br>Массажный центр Mass Medica.</p><p>Приём по предварительной записи.</p><a class="text-link" href="https://yandex.ru/maps/?text=Новосибирск%2C%20Нижегородская%2018%20Mass%20Medica" target="_blank" rel="noopener">Открыть адрес на карте ${icon('arrow-up-right')}</a></div></div></section>
  <footer class="site-footer wrap"><a class="footer-name" href="#">Юрьев Дмитрий Валерьевич<span>Остеопатия и массаж в Новосибирске</span></a><p>Имеются противопоказания. Необходима консультация специалиста.<br>Информация на сайте не является офертой.<br><a class="offer-link" role="link" aria-disabled="true">Договор публичной оферты</a></p></footer>`;
}

document.getElementById('site').innerHTML = `${header()}<main id="main">${heroes[concept]}${concept === 'balance' ? practiceContent() : `${about()}${services()}${approach()}${questions()}${footer()}`}</main>${concept === 'balance' ? `<button class="scroll-top icon-button" aria-label="Наверх" title="Наверх" hidden>${icon('arrow-up')}</button>` : ''}`;
if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

const scrollTopButton = document.querySelector('.scroll-top');
if (scrollTopButton) {
  const updateScrollTop = () => { scrollTopButton.hidden = window.scrollY <= 400; };
  window.addEventListener('scroll', updateScrollTop, { passive: true });
  window.addEventListener('pageshow', updateScrollTop);
  updateScrollTop();
  scrollTopButton.addEventListener('click', () => {
    document.querySelector('.brand').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
}

const dialog = document.getElementById('booking-dialog');
document.querySelectorAll('[data-booking]').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelectorAll('.dialog-close, .dialog-done').forEach((button) => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Открыть меню' : 'Закрыть меню');
  mainNav.classList.toggle('is-open', !isExpanded);
});
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
  mainNav.classList.remove('is-open');
}
mainNav.querySelectorAll('a[href]').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});