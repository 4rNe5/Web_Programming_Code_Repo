document.addEventListener("DOMContentLoaded", function() {
  const inputField = document.getElementById("input");
  const autoList = document.getElementById("auto-list");

  let data = [
    "South Korea", "United States of America", "Japan", "China", "France", "Germany", "Brazil", "Italy", "Spain", "Russia", "India", "Australia", "Canada", "Mexico", "United Kingdom",
    "Inception", "The Matrix", "Parasite", "Avengers: Endgame", "Interstellar", "The Dark Knight", "Fight Club", "Pulp Fiction", "Forrest Gump", "The Lord of the Rings: The Return of the King", "Star Wars: The Empire Strikes Back", "Inglourious Basterds", "The Shawshank Redemption", "La La Land", "Whiplash",
    "To Kill a Mockingbird", "1984", "The Great Gatsby", "One Hundred Years of Solitude", "Pride and Prejudice", "War and Peace", "The Catcher in the Rye", "The Hobbit", "Moby Dick", "The Brothers Karamazov", "Don Quixote", "Crime and Punishment", "Madame Bovary", "Wuthering Heights", "The Odyssey",
    "JavaScript", "Python", "Java", "Ruby", "C#", "C++", "PHP", "Swift", "Go", "Kotlin", "Rust", "TypeScript", "Scala", "Perl", "Elixir",
    "Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei", "Aristotle", "Nikola Tesla", "Charles Darwin", "Stephen Hawking", "Ada Lovelace", "Thomas Edison", "Alexander Graham Bell", "Marie Antoinette", "Cleopatra", "Winston Churchill"];

  // 사용자 입력에 대한 이벤트 리스너 설정
  inputField.addEventListener("input", function() {
    const userInput = inputField.value.toLowerCase();
    let filteredData = data.filter(item => item.toLowerCase().includes(userInput));
    filteredData = filteredData.sort();

    // 기존의 자동완성 목록을 초기화
    autoList.innerHTML = "";

    // 필터링된 데이터로 자동완성 목록 생성
    filteredData.forEach(item => {
      const autoItem = document.createElement("div");
      autoItem.innerHTML = item.replace(new RegExp(userInput, 'gi'), match => `<strong>${match}</strong>`);
      autoList.appendChild(autoItem);

      // 각 항목에 대한 클릭 이벤트 리스너 설정
      autoItem.addEventListener("click", function() {
        inputField.value = item;
        closeAllLists();
      });

      // 마우스 오버 및 아웃 이벤트 리스너 설정
      autoItem.addEventListener("mouseover", function() {
        removeActive(autoList.children);
        addActive(autoItem);
      });

      autoItem.addEventListener("mouseout", function() {
        removeActive(autoList.children);
      });
    });
  });

  // 키보드 이벤트 처리를 위한 리스너 설정
  inputField.addEventListener("keydown", function(e) {
    const autoItems = autoList.children;
    let activeIndex = Array.from(autoItems).findIndex(item => item.classList.contains("auto-elem-active"));

    if (e.key === "ArrowDown") {
      console.log("ArrowDown")
      e.preventDefault();
      if (activeIndex === -1 || activeIndex === autoItems.length - 1) {
        activeIndex = 0;
      } else {
        activeIndex++;
      }
    } else if (e.key === "ArrowUp") {
      console.log("ArrowUp")
      e.preventDefault();
      if (activeIndex === -1 || activeIndex === 0) {
        activeIndex = autoItems.length - 1;
      } else {
        activeIndex--;
      }
    } else if (e.key === "Enter" && activeIndex !== -1) {
      console.log("Enter")
      inputField.value = autoItems[activeIndex].textContent;
      closeAllLists();
    }

    removeActive(autoItems);
    if (activeIndex !== -1) {
      addActive(autoItems[activeIndex]);
    }
  });

  // 외부 클릭 시 자동완성 목록 닫기
  document.addEventListener("click", function(e) {
    if (e.target !== inputField && e.target !== autoList) {
      closeAllLists();
    }
  });
});

// 활성화된 항목에 스타일 적용
function addActive(item) {
  item.classList.add("auto-elem-active");
}

// 모든 항목의 활성화된 스타일 제거
function removeActive(items) {
  // HTMLCollection을 배열로 변환하여 forEach 사용
  Array.from(items).forEach(item => {
    item.classList.remove("auto-elem-active");
  });
}


// 자동완성 목록을 닫고 모든 항목 제거
function closeAllLists() {
  const autoList = document.getElementById("auto-list");
  autoList.innerHTML = "";
}
