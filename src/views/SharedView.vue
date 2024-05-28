<template>
  <div id="shared-notes">
    <div class="note">
      <ul>
        <li><i class="fa-solid fa-user"></i> teste@maisdasdasdasdasdaad.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
        <li><i class="fa-solid fa-user"></i> ...</li>
      </ul>
      <div class="note-title">
        <h3>My simple note titlessss dasdasdasd asdasdasda</h3>
      </div>
      <button>View</button>
    </div>
    <div class="note">
      <ul>
        <li><i class="fa-solid fa-user"></i> teste@maisdasdasdasdasdaad.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
        <li><i class="fa-solid fa-user"></i> ...</li>
      </ul>
      <div class="note-title">
        <h3>My simple note titlessss dasdasdasd asdasdasda</h3>
      </div>
      <button>View</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#shared-notes {
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 20px;
}
.note {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 10px;
  gap: 2.8rem;
  height: 140px;
  overflow: hidden;
  background: var(--secondary);
}

.note-title {
  overflow: hidden;
}

h3 {
  text-wrap: wrap;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
  line-height: 1.6rem;

  @media (max-width: 600px) {
    display: none;
  }
}

li {
  font-size: 0.85rem;
  text-wrap: nowrap;
}

.fa-user {
  color: #252222;
}

button {
  margin: 20px;
  width: 160px;
  height: 80%;
  background-color: #474040;
  flex-shrink: 0;
}
</style>
