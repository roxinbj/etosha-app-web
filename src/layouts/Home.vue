<template>
  <Navbar />
  
  <div class="front-page">
    <div class="contents">
      <div class="first">
        <h1>Etosha App</h1>
        <h6>Your digital Etosha guide</h6>
        
        <div class="store">
          <a href="https://apps.apple.com/us/app/etosha-app/id1582052099">
            <img src="../assets/appleStore.png" alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.etosha">
            <img src="../assets/googleStore.png" alt="" />
          </a>
        </div>
      </div>
      <div class="third">
        <img src="../assets/phone.png" alt="" />
      </div>
    </div>

    <!-- <div class="fourth"> -->
    <!-- q-card class="my-card fourth">
      <q-card-section>
        <p>Every app purchase supports a local animal welfare program!</p>
      </q-card-section>
    </q-card-->
    <!-- </div> -->
  </div>

  <!-- mammal guide -->
  <div class="mammal-guide">
    <div class="mammal-first">
      <img src="../assets/mammalGuide.png" alt="" />
    </div>
    <div class="mammal-second">
      <h3>Mammal Guide</h3>
      <p>
        <strong> Etosha specific information </strong>on all mammals found in
        the Etosha. Comprehensive scientific information has been summarized for you, 
        so that you are not owerwelmed by loads of information. It is presented in a 
        user-friendly format and supported by illustrating images.
      </p>
    </div>
  </div>

  <!-- etosha map -->
  <div class="mammal-guide">
    <div class="mammal-second">
      <h3>Etosha Map</h3>
      <p>
        Detailed <strong> offline map </strong> of the complete Etosha National
        Park. Scrollable and zoomable for easier navigation. 
      </p>
    </div>
    <div class="mammal-first">
      <img src="../assets/etoshaMap.png" alt="" />
    </div>
  </div>

  <!-- insider tips -->
  <div class="mammal-guide">
    <div class="mammal-first">
      <img src="../assets/insiderTips.png" alt="" />
    </div>
    <div class="mammal-second">
      <h3>Insider Tips</h3>
      <p>Additional features like todays <strong> gate opening- and closing hours 
      </strong> or  <strong> game drive tips </strong> of experienced local Etosha experts. 
      Furthermore, you find detailed infos about each Etosha Camp together with their contact details.</p>
    </div>
  </div>
  <OurMission />
  <Footer />
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import Footer from "src/components/Footer.vue";
import OurMission from "../subComponent/OurMission.vue";
import { useRouter } from "vue-router";
import { useMeta } from "quasar";

let metaData = {
  // sets document title
  title: "Etosha | Home",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title) => `${title}`,
  // meta tags
  meta: {
    description: { name: "theme-color", content: "#cb945e" },
  },
};

export default {
  components: { Navbar, Footer, OurMission },
  setup() {
    useMeta(metaData);
    const router = useRouter();
    const preRelease = () => {
      router.push({ name: "Prerelease" });
    };

    const contactUs = () => {
      router.push({ name: "ContactUs" });
    };
    return { preRelease, contactUs };
  },
};
</script>

<style lang="scss" scoped>

.front-page {
  height: 80vh;
  background-image: url("../assets/frontBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.contents {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.third {
  img {
    height: 600px;
    margin-top: 20%;
  }
}
.store {
  display: flex;
  margin: 20px 0px;
  img {
    width: 220px;
    cursor: pointer;
  }
  .gimg {
    margin-left: 20px;
  }
}
.first {
  h1 {
    color: white;
    font-weight: 700;
    font-size: 100px;
  }
  h6 {
    color: white;
    font-weight: 300px;
    font-size: 25px;
  }
}

.fourth {
  width: 650px;
  background: #cb945e;
  border: 2px solid white;
  border-radius: 10px;
  margin: auto;
  p {
    text-align: center;
    color: white;
    font-size: 25px;
    font-weight: 300;
  }
}

// mammal-guide
.mammal-guide {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .mammal-first {
    img {
      max-width: 650px;
      margin-left: 100px;
      margin-right: 100px;
    }
  }
  .mammal-second {
    p {
      color: gray;
      font-size: 22px;
      margin-top: 5px;
      margin-left: 100px;
      margin-right: 100px;
    }
    h3 {
      color: gray;
      margin-left: 100px;
      margin-right: 100px;
    }
  }
}
// etosha-map
.etosha-map {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .etosha-first {
    img {
      max-width: 650px;
    }
  }
  .etosha-second {
    p {
      color: gray;
      font-size: 22px;
      margin-top: 5px;
    }
  }
}

// insider-tips
.insider-tips {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .insider-first {
    img {
      max-width: 650px;
    }
  }
  .insider-second {
    p {
      color: gray;
      font-size: 22px;
      margin-top: 5px;
    }
  }
}

strong {
  font-weight: bold;
  color: black;
}

@media (max-width: 1366px) {
  .front-page {
    height: 120vh;
    background-image: url("../assets/frontBg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .contents {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .third {
    img {
      height: 500px;
      margin-top: 20%;
    }
  }
  .store {
    display: flex;
    margin: 20px 0px;
    img {
      width: 210px;
      cursor: pointer;
    }
    .gimg {
      margin-left: 20px;
    }
  }
  .first {
    h1 {
      color: white;
      font-weight: 700;
    }
    h6 {
      color: white;
      font-weight: 500px;
    }
  }

  .fourth {
    width: 500px;
    background: #cb945e;
    border: 2px solid white;
    border-radius: 10px;
    margin: auto;
    p {
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: 300;
    }
  }

  // mammal-guide
  .mammal-guide {
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .mammal-first {
      img {
        max-width: 550px;
      }
    }
    .mammal-second {
      p {
        color: gray;
        font-size: 16px;
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 10px;
      }
      h3 {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
  // etosha-map
  .etosha-map {
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .etosha-first {
      img {
        max-width: 550px;
      }
    }
    .etosha-second {
      p {
        color: gray;
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }

  // insider-tips
  .insider-tips {
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .insider-first {
      img {
        max-width: 550px;
      }
    }
    .insider-second {
      p {
        color: gray;
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }

  strong {
    font-weight: bold;
    color: black;
  }
}

@media (max-width: 768px) {
  .front-page {
    height: 120vh;
  }
  .contents {
    flex-direction: column;
    text-align: center;
  }
  .store {
    flex-direction: column;
    align-items: center;
    .gimg {
      margin-left: 0;
    }
    img {
      margin: 10px 0;
    }
  }
  .third {
    img {
      height: 350px;
      margin-top: 5%;
    }
  }
  .first {
    h1 {
      color: white;
      font-size: 70px;
      font-weight: 700;
    }
    h6 {
      color: white;
      font-weight: 500px;
    }
  }
  .fourth {
    width: 300px;
    p {
      text-align: center;
      color: white;
      font-size: 17px;
    }
  }

  // mammal-guide
  .mammal-guide {
    flex-direction: column-reverse;
    .mammal-first {
      img {
        max-width: 300px;
      }
    }
    .mammal-second {
      padding: 20px;
      margin-left: 3%;
      p {
        margin-left: 10px;
        margin-right: 10px;
      }
      h3 {
        font-size: 30px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
  // etosha-map
  .etosha-map {
    margin-top: 50px;
    flex-direction: column;
    .etosha-first {
      img {
        max-width: 300px;
      }
    }
    .etosha-second {
      padding: 20px;
      margin-left: 3%;
      h3 {
        font-size: 30px;
      }
    }
  }

  // insider-tips
  .insider-tips {
    margin-top: 50px;
    flex-direction: column-reverse;
    .insider-first {
      img {
        max-width: 300px;
      }
    }
    .insider-second {
      padding: 20px;
      margin-left: 3%;
      h3 {
        font-size: 30px;
      }
    }
  }
}
</style>
