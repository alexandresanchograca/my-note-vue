<template>
  <div id="shared-notes">
    <div class="note">
      <ul>
        <li><i class="fa-solid fa-user"></i> teste@maisdasdasdasdasdaad.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
        <li><i class="fa-solid fa-user"></i> teste@mail.pt</li>
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
  padding: 16px 10px;
  margin: 5px;
  background: var(--secondary);
  border-radius: 8px;
}
.note {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.8rem;
  height: 140px;
  overflow: hidden;
}

.note-title {
  overflow: hidden;
}

h3 {
  text-wrap: wrap;
  font-weight: bold;
}

ul {
  align-self: flex-start;
  list-style-type: none;
  padding: 0;
  line-height: 1.6rem;

  @media (max-width: 600px) {
    display: none;
  }
}

li {
  text-wrap: nowrap;
}

.fa-user {
  font-size: 0.85rem;
  color: #252222;
}

button {
  margin: 20px;
  width: 160px;
  height: 75%;
  background-color: #474040;
  flex-shrink: 0;
}
</style>
