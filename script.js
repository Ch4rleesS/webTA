// Fungsi untuk memperbarui nilai dari sebuah URL ke elemen HTML dengan ID yang diberikan
function updateValue(elementId, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerText = data;
    })
    .catch((error) => console.error(`Error updating ${elementId}:`, error));
}

// Fungsi untuk memperbarui semua nilai
function updateAllValues() {
  const values = [
    {
      id: "valuesuhu",
      url: "https://script.google.com/macros/s/AKfycbzZ4oOES4tIRxeTD_1axw1sS0Gddgb1rQ-Bwau6aeof7F-nUMpXcXfeHF4KOti6jSAr/exec",
    },
    {
      id: "valuecahaya",
      url: "https://script.google.com/macros/s/AKfycbwOXuQxJw5vpoENEu5pOXschEyHGkzHjs51dkh1lp2UlQBLgWh0nwHSwyK9MB2lQUur2Q/exec",
    },
    {
      id: "valueph",
      url: "https://script.google.com/macros/s/AKfycbzUVSW27wN45dtq9v6KXvOhizc_P9raIa3EgRzKTQXcjbm_m_KJRwAn_coyIVagb9xwew/exec",
    },
    {
      id: "valuekelembapan",
      url: "https://script.google.com/macros/s/AKfycbwQTMH95csAEjnPKLp6dPg7WFBO5C8S7wNAr3NXHG0nHmbrMW6yeGF87uNSvo_ZnAv5/exec",
    },
    {
      id: "jenispohon",
      url: "https://script.google.com/macros/s/AKfycby5Me9AGX1NjSDAk-lC1wbOc6B-ZG6YERU4_LGYcVtyQAzXhmS1SkgJGeztGnB0BMzj/exec",
    },
  ];

  values.forEach((item) => {
    updateValue(item.id, item.url);
  });
}

function resetAllValues() {
  const ids = [
    "valuesuhu",
    "valuecahaya",
    "valueph",
    "valuekelembapan",
    "jenispohon",
  ];
  ids.forEach((id) => {
    document.getElementById(id).innerText = "";
  });
}

// Event listener untuk tombol submit
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mulai").addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah submit default jika tombol ada di dalam form
    updateAllValues();
  });

  document.getElementById("reset").addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah submit default jika tombol ada di dalam form
    resetAllValues();
  });
});
