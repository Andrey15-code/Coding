const games = [
  { id: 1, name: 'Високосний калькулятор', category: 'numerical' },
  { id: 2, name: 'Вгадай число', category: 'numerical' },
  { id: 3, name: 'Камінь-Ножиці-Папір', category: 'game' },
  { id: 4, name: 'Калькулятор', category: 'numerical' },
  { id: 5, name: 'Калькулятор часу', category: 'numerical' },
  { id: 8, name: 'Найбільше число', category: 'numerical' },
  { id: 9, name: 'Наша команда', category: 'acquaintance' },
];

const categoryNames = {
  numerical: 'Числові',
  game: 'Ігрові',
  acquaintance: 'Ознайомчі',
};

const gameHeadings = {
  1: 'Перевір, в який рік ти народився',
  2: 'Вгадай число, яке загадав комп’ютер',
  3: 'Камінь - ножиці - папір',
};

const gameViews = {
  1: `
    <div class="flex w-full items-center justify-between gap-3">
      <div class="flex min-w-0 flex-[0_1_172px] overflow-hidden rounded-full bg-[#d9d9d9] shadow-[0_2px_1px_#aaa]">
        <input class="w-full min-w-0 border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black outline-none placeholder:text-[#999]" type="number" placeholder="Введіть рік народження" aria-label="Рік народження" />
        <button class="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border-0 bg-black text-white" type="button" data-action="check-leap-year" aria-label="Перевірити рік">
          <svg class="h-[17px] w-[17px] fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg>
        </button>
      </div>
      <output class="m-0 text-center text-[10px] text-[#039900]" data-result>Введіть рік народження</output>
    </div>
  `,
  2: `
    <div class="flex w-full items-center justify-between gap-3">
      <div class="flex min-w-0 flex-[0_1_172px] overflow-hidden rounded-full bg-[#d9d9d9] shadow-[0_2px_1px_#aaa]">
        <input class="w-full min-w-0 border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black outline-none placeholder:text-[#999]" type="number" placeholder="Введіть число" aria-label="Ваше число" />
        <button class="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border-0 bg-black text-white" type="button" data-action="guess-number" aria-label="Вгадати число">
          <svg class="h-[17px] w-[17px] fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg>
        </button>
      </div>
      <output class="m-0 text-center text-[10px] text-[#039900]" data-result>Вгадайте число від 1 до 10</output>
    </div>
  `,
  3: `
    <div class="flex w-[72%] items-center justify-between gap-3">
      <div class="flex gap-6" aria-label="Оберіть хід">
        <button class="grid h-[48px] w-[48px] place-items-center rounded-[15px] border-0 bg-black text-[24px] text-white" type="button" data-action="play-rps" data-choice="rock" aria-label="Камінь">✊</button>
        <button class="grid h-[48px] w-[48px] place-items-center rounded-[15px] border-0 bg-black text-[24px] text-white" type="button" data-action="play-rps" data-choice="scissors" aria-label="Ножиці">✂</button>
        <button class="grid h-[48px] w-[48px] place-items-center rounded-[15px] border-0 bg-black text-[24px] text-white" type="button" data-action="play-rps" data-choice="paper" aria-label="Папір">▤</button>
      </div>
      <output class="m-0 text-[12px] leading-[1.7]" data-score>Рахунок:<br />Комп’ютер - 0<br />Ви - 0</output>
    </div>
    <output class="mt-1 text-center text-[10px] text-[#039900]" data-result>Оберіть свій хід</output>
  `,
  4: `
    <div class="flex w-full items-center justify-center gap-[22px]">
      <input class="w-[140px] min-w-0 rounded-full border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black shadow-[0_2px_1px_#aaa] outline-none placeholder:text-[#999]" type="number" placeholder="Введіть число" aria-label="Перше число" />
      <div class="grid grid-cols-2 gap-[6px]" aria-label="Оберіть дію">
        <button class="grid h-[21px] w-[21px] place-items-center rounded-full border-0 bg-black text-[12px] text-white shadow-[0_2px_1px_#aaa]" type="button" data-action="select-operation" data-operation="+">+</button>
        <button class="grid h-[21px] w-[21px] place-items-center rounded-full border-0 bg-black text-[12px] text-white shadow-[0_2px_1px_#aaa]" type="button" data-action="select-operation" data-operation="*">*</button>
        <button class="grid h-[21px] w-[21px] place-items-center rounded-full border-0 bg-black text-[12px] text-white shadow-[0_2px_1px_#aaa]" type="button" data-action="select-operation" data-operation="-">-</button>
        <button class="grid h-[21px] w-[21px] place-items-center rounded-full border-0 bg-black text-[12px] text-white shadow-[0_2px_1px_#aaa]" type="button" data-action="select-operation" data-operation="/">/</button>
      </div>
      <input class="w-[140px] min-w-0 rounded-full border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black shadow-[0_2px_1px_#aaa] outline-none placeholder:text-[#999]" type="number" placeholder="Введіть число" aria-label="Друге число" />
      <button class="grid h-[24px] w-[24px] shrink-0 place-items-center rounded-full border-0 bg-black text-[12px] text-white" type="button" data-action="calculate" aria-label="Обчислити">=</button>
      <output class="min-w-[80px] rounded-full bg-[#d9d9d9] px-3 py-2 text-center text-[10px] text-[#999]" data-result>Результат</output>
    </div>
  `,
  5: `
    <div class="flex w-full items-center justify-between gap-3">
      <div class="flex min-w-0 flex-[0_1_172px] overflow-hidden rounded-full bg-[#d9d9d9] shadow-[0_2px_1px_#aaa]">
        <input class="w-full min-w-0 border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black outline-none placeholder:text-[#999]" type="number" placeholder="Введіть кількість секунд" aria-label="Кількість секунд" />
        <button class="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border-0 bg-black text-white" type="button" data-action="convert-time" aria-label="Порахувати час">
          <svg class="h-[17px] w-[17px] fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg>
        </button>
      </div>
      <output class="m-0 text-center text-[10px] text-[#039900]" data-result>Результат</output>
    </div>
  `,
  8: `
    <div class="flex w-full items-center justify-center gap-3">
      <input class="w-[140px] min-w-0 rounded-full border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black shadow-[0_2px_1px_#aaa] outline-none placeholder:text-[#999]" type="number" placeholder="Перше число" aria-label="Перше число" />
      <input class="w-[140px] min-w-0 rounded-full border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black shadow-[0_2px_1px_#aaa] outline-none placeholder:text-[#999]" type="number" placeholder="Друге число" aria-label="Друге число" />
      <input class="w-[140px] min-w-0 rounded-full border-0 bg-[#d9d9d9] px-3 py-2 text-[10px] text-black shadow-[0_2px_1px_#aaa] outline-none placeholder:text-[#999]" type="number" placeholder="Третє число" aria-label="Третє число" />
      <button class="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border-0 bg-black text-[14px] text-white" type="button" data-action="find-largest" aria-label="Знайти найбільше число">?</button>
    </div>
    <output class="m-0 text-center text-[10px] text-[#039900]" data-result>Введіть три числа</output>
  `,
  9: `
    <p class="mb-[26px] text-center text-[24px] font-normal leading-[1.3]">Познайомся з нашою командою</p>
    <button class="rounded-full bg-black px-[18px] py-[8px] text-[10px] text-white" type="button" data-action="show-team">Показати команду</button>
    <output class="m-0 text-center text-[10px] text-[#039900]" data-result></output>
  `,
};

const gameState = {
  secretNumber: Math.floor(Math.random() * 10) + 1,
  rpsPlayerScore: 0,
  rpsComputerScore: 0,
};

function setResult(gameItem, message, state = '') {
  const result = gameItem.querySelector('[data-result]');
  if (!result) return;

  result.textContent = message;
  result.classList.remove('text-[#039900]', 'text-[#c62828]', 'text-[#999]');
  result.classList.add('text-[#039900]');

  if (state === 'error') {
    result.classList.remove('text-[#039900]', 'text-[#999]');
    result.classList.add('text-[#c62828]');
  }
}

function bindGameLogic() {
  const gamesList = document.getElementById('games-list');
  if (!gamesList) return;

  gamesList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const gameItem = button.closest('.game-item');
    if (!gameItem) return;

    const input = gameItem.querySelector('input');
    const value = input ? input.valueAsNumber : Number.NaN;

    switch (button.dataset.action) {
      case 'check-leap-year': {
        const year = value;
        if (!Number.isInteger(year) || year < 1) {
          setResult(gameItem, 'Введіть коректний рік', 'error');
          break;
        }

        const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
        setResult(
          gameItem,
          isLeapYear ? `${year} рік високосний` : `${year} рік не високосний`,
          'success'
        );
        break;
      }
      case 'guess-number': {
        if (!Number.isInteger(value) || value < 1 || value > 10) {
          setResult(gameItem, 'Введіть ціле число від 1 до 10', 'error');
          break;
        }

        if (value === gameState.secretNumber) {
          setResult(gameItem, 'Ви вгадали! Нове число вже загадано', 'success');
          gameState.secretNumber = Math.floor(Math.random() * 10) + 1;
        } else {
          setResult(
            gameItem,
            value < gameState.secretNumber ? 'Загадане число більше' : 'Загадане число менше'
          );
        }
        break;
      }
      case 'play-rps': {
        const choices = ['rock', 'scissors', 'paper'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const playerChoice = button.dataset.choice;
        const playerWins =
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'scissors' && computerChoice === 'paper') ||
          (playerChoice === 'paper' && computerChoice === 'rock');
        const labels = { rock: 'камінь', scissors: 'ножиці', paper: 'папір' };

        if (playerChoice !== computerChoice && playerWins) gameState.rpsPlayerScore += 1;
        if (playerChoice !== computerChoice && !playerWins) gameState.rpsComputerScore += 1;
        gameItem.querySelector('[data-score]').innerHTML =
          `Рахунок:<br />Комп’ютер - ${gameState.rpsComputerScore}<br />Ви - ${gameState.rpsPlayerScore}`;
        setResult(
          gameItem,
          playerChoice === computerChoice
            ? `Нічия! Комп’ютер обрав: ${labels[computerChoice]}`
            : `${playerWins ? 'Ви виграли' : 'Комп’ютер виграв'}! Він обрав: ${labels[computerChoice]}`,
          playerChoice === computerChoice ? '' : playerWins ? 'success' : 'error'
        );
        break;
      }
      case 'select-operation':
        gameItem.dataset.operation = button.dataset.operation;
        gameItem.querySelectorAll('[data-action="select-operation"]').forEach((operationButton) => {
          operationButton.classList.toggle('outline', operationButton === button);
          operationButton.classList.toggle('outline-[2px]', operationButton === button);
          operationButton.classList.toggle('outline-offset-2', operationButton === button);
          operationButton.classList.toggle('outline-[#039900]', operationButton === button);
        });
        break;
      case 'calculate': {
        const inputs = [...gameItem.querySelectorAll('input[type="number"]')];
        const [firstNumber, secondNumber] = inputs.map((field) => field.valueAsNumber);
        if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
          setResult(gameItem, 'Введіть обидва числа', 'error');
          break;
        }

        const operation = gameItem.dataset.operation ?? '+';
        if (operation === '/' && secondNumber === 0) {
          setResult(gameItem, 'На нуль ділити не можна', 'error');
          break;
        }

        const operations = {
          '+': () => firstNumber + secondNumber,
          '-': () => firstNumber - secondNumber,
          '*': () => firstNumber * secondNumber,
          '/': () => firstNumber / secondNumber,
        };
        const answer = operations[operation]();
        setResult(gameItem, String(Number(answer.toFixed(4))), 'success');
        break;
      }
      case 'convert-time': {
        if (!Number.isInteger(value) || value < 0) {
          setResult(gameItem, 'Введіть цілу кількість секунд', 'error');
          break;
        }

        const hours = Math.floor(value / 3600);
        const minutes = Math.floor((value % 3600) / 60);
        const seconds = value % 60;
        setResult(gameItem, `${hours} год ${minutes} хв ${seconds} с`, 'success');
        break;
      }
      case 'find-largest': {
        const values = [...gameItem.querySelectorAll('input[type="number"]')].map(
          (field) => field.valueAsNumber
        );
        if (values.some(Number.isNaN)) {
          setResult(gameItem, 'Заповніть усі три поля', 'error');
          break;
        }

        setResult(gameItem, `Найбільше число: ${Math.max(...values)}`, 'success');
        break;
      }
      case 'show-team':
        setResult(gameItem, 'Додайте інформацію про учасників команди');
        break;
    }
  });
}

function renderGames() {
  const gamesList = document.getElementById('games-list');
  if (!gamesList) return;

  const gameSections = games.map((game) => {
    const section = document.createElement('article');
    section.className = 'game-item w-full py-[26px]';
    section.dataset.gameId = String(game.id);

    const title = document.createElement('h2');
    title.className = 'mb-[26px] text-center text-[14px] font-normal leading-[1.3]';
    title.textContent = gameHeadings[game.id] ?? game.name;

    const category = document.createElement('span');
    category.className = 'sr-only';
    category.textContent = categoryNames[game.category] ?? 'Інші';

    const content = document.createElement('div');
    content.className = 'flex flex-col items-center gap-5';
    content.innerHTML = gameViews[game.id] ?? '';

    const divider = document.createElement('hr');
    divider.className =
      'mx-auto mt-[26px] w-[calc(100%-40px)] max-w-[430px] border-[1px] border-black';

    section.append(title, category, content, divider);
    return section;
  });

  gamesList.replaceChildren(...gameSections);
}

document.addEventListener('DOMContentLoaded', () => {
  renderGames();
  bindGameLogic();

  const btn = document.getElementById('myButton');
  const menu = document.getElementById('myMenu');

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      menu.classList.toggle('invisible');
      menu.classList.toggle('opacity-0');
      menu.classList.toggle('-translate-y-full');
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.add('invisible', 'opacity-0', '-translate-y-full');
      }
    });
  }
});
