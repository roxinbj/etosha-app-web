<template>
  <div class="useful-info">
    <h3>Useful Information</h3>
    <div class="useful">
      <div class="useful-first">
        <img src="../assets/features/sightings.png" alt="" />
      </div>
      <div class="useful-second">
        <p>Your will find some more usefull information pages like:</p>
        <ul>
          <li>Gate Opening and Closing Hours</li>
          <li>Emergency Contact Numbers</li>
          <li>Camp Information</li>
          <li>Local Game Drive Insider Tips</li>
          <li>Etosha History</li> 
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.useful-info {
  margin-top: 150px;
  margin-bottom: 150px;
  h3 {
    margin-left: 5%;
    color: gray;
    margin-bottom: 5%;
  }
  .useful {
    display: flex;
    justify-content: space-around;
    // align-items: center;
  }
  .useful-first {
    img {
      max-height: 550px;
    }
  }
  .useful-second {
    max-width: 600px;
    p {
      font-size: 22px;
    }
    li {
      margin-left: 10%;
      font-size: 22px;
    }
  }
}

@media (max-width: 1366px) {
  .useful-info {
    margin-top: 150px;
    margin-bottom: 150px;
    h3 {
      margin-left: 10%;
      margin-bottom: 5%;
    }
    .useful {
      display: flex;
      justify-content: space-around;
      // align-items: center;
    }
    .useful-first {
      img {
        max-height: 400px;
      }
    }
    .useful-second {
      max-width: 400px;
      p {
        font-size: 20px;
      }
      li {
        margin-left: 10%;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 768px) {
  .useful-info {
    h3 {
      font-size: 35px;
    }
  }
  .useful {
    flex-direction: column;
    text-align: center;
  }
  .useful-second {
    p {
      text-align: start;
      margin-left: 5%;
    }
    li {
      text-align: start;
    }
  }
}
</style>
