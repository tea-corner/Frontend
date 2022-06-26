<template>
  <div class="v-popup">
    <div class="v-popup_header">
      <h4>Создать привычку</h4>
      <form action="">
        <div class="opisanie_">
          <label for="" class="opisanie_">Название*</label>
          <input
            type="Введите название"
            placeholder="Введите название"
            class="nazvanie"
          />
        </div>
        <div class="opisanie___">
          <label for="Описание" class="opisanie___">Описание</label>
          <input
            type="text"
            name="Введите описание"
            placeholder="Введите описание"
            id=""
            class="nazvanie"
          />
        </div>

        <div class="opisanie_">
          <label for="" class="opisanie_">Тип привычки*</label>
          <input
            type="Введите название"
            placeholder="Выберете тип"
            class="nazvanie"
          />
        </div>
        <div class="opisanie_">
          <label for="" class="opisanie_"> Время выполнения</label>
          <input
            type="Введите название"
            placeholder="Укажите к-во дней"
            class="nazvanie"
          />
        </div>
        <div class="opisanie_">
          <label for="" class="opisanie_">Сложность от 1 до 5</label>
          <input
            type="Введите название"
            placeholder="Сложность"
            class="nazvanie"
          />
        </div>
        <div>
        <button @click="closePopupInfo " class="AYE">закрыть</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",

  data() {
    return {};
  },
  methods: {
    closePopupInfo() {
      this.$emit("closePopupInfo");
    },
  },
};
</script>

<style scoped>
.AYE {
  color: blue;
  display: flex;
  margin: auto;
  margin-top: 20px;
  width: 150px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
.opisanie_ {
  display: flex;
  margin: 0;
  margin-top: 14px;
  margin-left: 30px;
  flex-direction: column;
}
.opisanie___ {
  display: flex;
  margin-top: 20px;
  margin: 0;
  margin-left: 30px;
  flex-direction: column;
}

.opisanie {
  margin: auto;
  width: auto;
  height: 31px;
  top: 40px;
  width: 350px;
  display: flex;
  flex-direction: column;
}
.headerBlueColor {
  height: 238px;
  margin-bottom: auto;
  width: 543px;
  background-color: #00b8c4;
}

.nazvanie {
  width: 350px;
  height: 31px;

  display: flex;
  margin-top: 15px;

  align-items: center;
  justify-content: center;
  margin: auto;
}
.v-popup {
  top: 0;

  margin-top: 0;
  height: 600px;
  width: 490px;
  border: 5px solid rgb(79, 131, 180);
  display: flex;
  margin: auto;
  flex-direction: column;
  background-color: #00d8e5;
}
.v-popup_header {
  display: flex;

  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.v-popup_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-popup_content {
  display: flex;

  justify-content: space-around;
  flex-direction: column;
}

.submit_btn {
  padding: 8px;
  color: white;
  background: red;
}

.close_modal {
  padding: 8px;
  color: white;

  background: blueviolet;
}
</style>ue