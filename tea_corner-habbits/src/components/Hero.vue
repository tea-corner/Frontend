<template>
  <div class="hero">
    <img src="/images/image 3.png" alt="photo" class="sectionMenuPhoto" />

    <div class="heroInformation">
      <h4 class="sectionHeroName">{{user.userNickname}}</h4>

      <div class="resourceHealth">
        <img src="/svg/health.svg" alt="healthIcon" class="healthIcon" />
        <progress :value="user.hp" max="50" class="progressHealth"></progress>
        <h6 class="dataHealth">{{user.hp}}/50</h6>
      </div>

      <div class="resourceExperience">
        <img
          src="/svg/experience.svg"
          alt="experienceIcon"
          class="experienceIcon"
        />
        <progress :value="user.exp" max="50" class="progressExperience"></progress>
        <h6 class="dataExperience">{{user.exp}}/50</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
};
</script>

<style scoped>
.hero {
  display: flex;
  margin-left: 12px;
  margin-top: 34px;

  font-family: "Blender Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}

.heroInformation {
  display: flex;
  flex-direction: column;
  margin-left: 14px;
}

.resourceHealth {
  align-items: center;
  display: flex;
  margin-bottom: 7px;
}

.resourceExperience {
  align-items: center;
  display: flex;
  margin-top: 0;
}

.healthIcon {
  margin-right: 5px;
}

.experienceIcon {
  margin-right: 5px;
}

.progressExperience {
  margin-right: 4px;
  margin-top: auto;
  -webkit-appearance: none;
}

.progressHealth {
  margin-right: 4px;
  margin-top: auto;
  -webkit-appearance: none;
}

.sectionMenuPhoto {
  width: 178px;
  height: 110px;
}

.dataHealth {
  margin: 0;
}

.dataExperience {
  margin: 0;
}

.sectionHeroName {
  margin-bottom: 7px;
  margin-top: 0;
}

.progressHealth::-webkit-progress-bar {
  background-color: white;
  height: 8px;
}

.progressHealth::-webkit-progress-value {
  background-color: red;
}

.progressExperience::-webkit-progress-bar {
  background-color: white;
  height: 8px;
}

.progressExperience::-webkit-progress-value {
  background-color: #FCEE0A;
}

</style>