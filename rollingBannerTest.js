document.addEventListener('DOMContentLoaded', function() {
  const stocks = [
      { name: 'Stock A', num: '100.00', rate: '+1.00%', status: 'up' },
      { name: 'Stock B', num: '200.00', rate: '-2.00%', status: 'down' },
      { name: 'Stock C', num: '150.00', rate: '+0.50%', status: 'up' },
      { name: 'Stock D', num: '250.00', rate: '-1.50%', status: 'down' },
      { name: 'Stock E', num: '300.00', rate: '+2.00%', status: 'up' },
      { name: 'Stock F', num: '400.00', rate: '-0.75%', status: 'down' }
  ];

  const roller = document.getElementById('roller');

  function createStockList() {
      const ul = document.createElement('ul');
      stocks.forEach(stock => {
          const li = document.createElement('li');
          li.className = 'stock';
          li.innerHTML = `
              <a href="#">
                  <strong class="name">${stock.name}</strong>
                  <span class="status ${stock.status}">
                      <span class="num">${stock.num}</span>
                      <span class="rate"><em>${stock.rate}</em></span>
                  </span>
              </a>
          `;
          ul.appendChild(li);
      });
      return ul;
  }

  roller.appendChild(createStockList());
  roller.appendChild(createStockList()); // 두 번째 리스트를 추가하여 무한 롤링 구현

  // 마우스를 올리면 애니메이션을 멈추고, 마우스를 떼면 다시 시작
  roller.addEventListener('mouseover', function() {
      roller.classList.add('paused');
  });

  roller.addEventListener('mouseout', function() {
      roller.classList.remove('paused');
  });
});