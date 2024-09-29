// Görev ekleme fonksiyonu
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const todoList = document.getElementById('todoList');
  
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Sil</button>
      `;
      
      todoList.appendChild(li);
      taskInput.value = ''; // Girdi kutusunu sıfırla
    }
  }
  
  // Görev silme fonksiyonu
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  