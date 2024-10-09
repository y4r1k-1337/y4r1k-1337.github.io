/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.getElementById('button');

/* Определяем, включена ли тёмная тема */
isDark = false;

/* Массив элементов с изменяемыми свойствами */
const dynamic_theme = 
[
	{
		"id":"body",
		"dark":"body-dark"
	},
	{
		"id":"_header",
		"dark":"header-dark"
	},
	{
		"id":"header_title",
		"dark":"header__title-dark"
	},
	{
		"id":"header_subtitle",
		"dark":"header__subtitle-dark"
	},
	{
		"id":"links_container",
		"dark":"links__container-dark"
	},
	{
		"id":"tg_title",
		"dark":"links__title-dark"
	},
	{
		"id":"tg_link",
		"dark":"linsk__link-dark"
	},
	{
		"id":"mail_title",
		"dark":"links__title-dark"
	},
	{
		"id":"mail_link",
		"dark":"linsk__link-dark"
	},
	{
		"id":"git_title",
		"dark":"links__title-dark"
	},
	{
		"id":"git_link",
		"dark":"linsk__link-dark"
	},
	{
		"id":"button",
		"dark":"button-link-dark"
	}
];

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
    if (!isDark) {
        dynamic_theme.forEach(element => {
            document.getElementById(element.id).classList.add(element.dark);
			button.innerHTML = "Светлая тема";
        });
        isDark = true;
    } else {
        dynamic_theme.forEach(element => {
            document.getElementById(element.id).classList.remove(element.dark);
			button.innerHTML = "Тёмная тема";
        });
        isDark = false;
    }
});