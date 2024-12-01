document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const directory = document.getElementById('directory').value;
    const extensions = document.getElementById('extensions').value;
    const nameContains = document.getElementById('nameContains').value;
  
    try {
      const response = await fetch(`/api/files?directory=${directory}&extensions=${extensions}&nameContains=${nameContains}`);
      const files = await response.json();
  
      displayResults(files);
    } catch (error) {
      console.error('Error fetching files:', error);
      alert('Erro ao buscar arquivos.');
    }
  });
  
  function displayResults(files) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (files.length === 0) {
      resultsDiv.textContent = 'Nenhum arquivo encontrado.';
      return;
    }
  
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    thead.innerHTML = `
      <tr>
        <th>Nome</th>
        <th>Caminho</th>
        <th>Tamanho (bytes)</th>
        <th>Extensão</th>
      </tr>
    `;
  
    files.forEach((file) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${file.name}</td>
        <td>${file.path}</td>
        <td>${file.size}</td>
        <td>${file.extension}</td>
      `;
      tbody.appendChild(row);
    });
  
    table.appendChild(thead);
    table.appendChild(tbody);
    resultsDiv.appendChild(table);
  }  