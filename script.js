async function loadData() {
    try{
        const response = await fetch('data.json');
        const data = await response.json();

        data.forEach(item => {
            const element = document.getElementById(item.category);
            
            if(element){
              element.textContent= `${item.score} /`;
  
              const imgElement = document.querySelector(`.textContainer.${item.category} img`);
  
              if (element) {
                  element.textContent = `${item.score} / `;
                  // Atualiza o ícone da categoria correspondente
                  const imgElement = document.querySelector(`.textContainer.${item.category} img`);
                  if (imgElement) {
                    imgElement.src = item.icon;
                  }}}
          });

    } catch(error){
        console.error("Erro ao carregar dados do JSON:", error);
    }
}
document.addEventListener('DOMContentLoaded', loadData);