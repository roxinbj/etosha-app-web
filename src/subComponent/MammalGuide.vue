<template>
  <!-- mammal guide -->
  <div class="mammal">
    <h3>Mammal Guide</h3>
    <div class="mammal-guide">
      <div class="mammal-first">
        <img src="../assets/features/mammal1.png" alt="" />
        <img src="../assets/features/mammal2.png" alt="" />
      </div>
      <div class="mammal-second">
        <p>
          Each mammal is portrayed with numerous, well spotted images. 
          Some quick facts are shown below and if you are interested in more information, 
          a button leads you to more detailed information. <br>
          Information is clusterd in six categories which makes the navigation user friendly.
          You can find texts about its appearance, its social behavior, its diet and many more.<br>
          Even <strong> Etosha specific information </strong> is included, eg. stating what makes the Etosha lion so unique.
          You also find pages illustrating the difference between two often mistaken animals, like Cheetah and Leopard.
          Here are some of the information you will find:
        </p>
        <ul>
          <li>Fun Facts</li>
          <li>Etosha Related Facts</li>
          <li>Conservation Status</li>
          <li>Diet</li>
          <li>Gender Difference</li>
          <li>Footprint</li>
          <li>Social Behavior</li>
          <li>Appearance</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mammal {
  margin-top: 100px;
  h3 {
    margin-left: 6%;
    color: gray;
    margin-bottom: 5%;
  }
}
.mammal-guide {
  display: flex;
  justify-content: space-around;
}
.mammal-first {
  img {
    height: 550px;
  }
}
.mammal-second {
  max-width: 550px;
  p {
    font-size: 22px;
  }
  li {
    font-size: 25px;
    margin-left: 5%;
  }
}

@media (max-width: 1366px) {
  .mammal {
    margin-top: 100px;
    h3 {
      margin-left: 10%;
      margin-bottom: 5%;
    }
  }
  .mammal-guide {
    display: flex;
    justify-content: space-around;
  }
  .mammal-first {
    img {
      height: 400px;
    }
  }
  .mammal-second {
    max-width: 450px;
    p {
      font-size: 20px;
    }
    li {
      font-size: 18px;
      margin-left: 10%;
    }
  }
}

@media (max-width: 768px) {
  .mammal {
    margin-top: 50px;

    h3 {
      font-size: 35px;
      // text-align: center;
    }
  }
  .mammal-guide {
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    text-align: center;
  }
  .mammal-first {
    img {
      height: 400px;
    }
  }
  .mammal-second {
    max-width: 450px;
    p {
      font-size: 20px;
      margin-left: 10%;
      text-align: start;
    }
    li {
      margin-left: 15%;
      text-align: start;
      font-size: 18px;
    }
  }
}
</style>
