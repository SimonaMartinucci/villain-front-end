<script>
export default {
  name: 'VillainCard',
  props: {
    villain: {
      type: Object,
      required: true,
    },
  },
  methods:{
    ratingAvg(){
      return this.villain.ratings.reduce((sum, rating)=>sum + rating.value, 0) / this.villain.ratings.length
    }
  }
};
</script>

<template>
<router-link v-if="villain" class="villain-card" :to="{ name: 'VillainDetail', params: { slug: villain.slug } }">
  <img :src="'http://localhost:8000' + villain.image" alt="Villain Image" class="villain-img" />
  <div class="over"></div>
  <h3 class="villain-name">{{ villain.name }}</h3>
  <div class="villain-info">
    
    <p v-for="service in villain.services" class="villain-service">{{ service.name }}</p>
    <div class="villain-reviews" v-if="villain.ratings && villain.ratings.length">
      <span v-for="star in 5" :key="star" class="star">
        <i :class="{
            'fa-solid fa-star': star <= Math.floor(ratingAvg()),
            'fa-solid fa-star-half-stroke': star === Math.ceil(ratingAvg()) && ratingAvg() % 1 !== 0, 
            'fa-regular fa-star': star > ratingAvg()
          }"
        ></i>
      </span>
    </div>
    <div class="villain-reviews" v-else>
      <span v-for="star in 5" :key="star" class="star">
        <i class='fa-regular fa-star'></i>
      </span>
    </div>
  </div>
  <div class="under">
    <router-link   :to="{ name: 'VillainDetail', params: { slug: villain.slug } }"><button class="btn btn-primary">Contact Now</button></router-link>
  </div>
</router-link>

</template>

<style scoped lang="scss">
@use '../assets/style/generals/variables' as *;
@import '../assets/style/main.scss';


  .villain-name {
    padding: 10px 0;
  }

  .villain-img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5; 
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgb(53, 0, 95, 0.2);
  }


  // .villain-name {
  //   width: 100%;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   color: $light;
  //   font-size: 1.5rem;
  //   opacity: 0;
  //   transition: opacity 2s ease;
  //   z-index: 2;
  //   text-align: center
  // }

  .villain-info {
    text-align: center;
    margin-bottom: 15px;
    position: relative;
    z-index: 2;
    font-weight: 900;
    
    .villain-service {
      font-size: 1rem;
      color: $dark;
      padding-bottom: 0.2rem;
      transition: color 0.5s ease;
    }

    .villain-reviews {
      font-size: 1.2rem;
      padding-top: 0.5rem;
      .fa-star {
      color: $primary;
      font-size: 1rem;
      padding: 0 0.1rem
    }
    }

  }

  .btn {
    width: 100%;
  }
  .villain-card {
  background-color: $light;
  padding: 20px;
  border: 2px solid $primary;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease;

  img{
    object-position: top; 
  }
  &.highlight {
    &:hover {
      .over {
        background-color: rgb(250, 204, 0, 0.4);
      }
      .villain-name,.villain-service{
        color: $primary;
      }
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    .over{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(53, 0, 95, 0.6);
      transition: filter 0.5s ease;
      z-index: 1;

    }
    .villain-name {
      opacity: 1;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $light;
      font-size: 1.5rem;
      // opacity: 0;
      transition: opacity 0.5s ease;
      z-index: 2;
      text-align: center;
    }
    .villain-service {
      color: white;
    }
  }
}

</style>
