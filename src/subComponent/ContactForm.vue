<template>
  <div class="contact-form">
    <form name="ask-question" method="post" data-netlify="true" data-netlify-recaptcha="true" data-netlify-honeypot="bot-field" enctype="application/x-www-form-urlencoded" accept-charset="UTF-8">
    <p style="display: none;" class="hidden"> 
    <label> Dont fill it in <input name="form-name" value="ask-question" type="hidden" /></label>
    </p>
    <h4>We would love to hear from you</h4>
    <p>
      Whether you have questions, suggestions, or just want to say hi, drop us a
      line.
    </p>
      <q-input v-model="name" outlined type="text" placeholder="Name" name="name" required/>
      <q-input v-model="email" outlined type="email" label="Email" name="email" required/>
    <div class="text">
      <q-input
        v-model="message"
        filled
        type="textarea"
        name="message"
        placeholder="Write your message here..."
        required
      />
      <button>Submit</button>
    </div>
    <div data-netlify-recaptcha="true"></div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref(null);
    const email = ref(null);
    const message = ref(null);

    return { name, email, message };
  },
  /*data: () => ({
    form: {
      name: '',
      email: '',
      message: ''
    }
  }),
  methods: {
    encode(data){
      return Object.keys(data)
      .map(key => '${encodeURIComponent(key)}=${encodeURIComponent(data[key])}')
      .join('&')
    },
    hanldeSubmit(){
      fetch('/', {
        method: 'post',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'ask-question',
          ...this.form
        })
      })
      .then(() => console.log('successfully send'))
      .catch(e => console.error(e))
    }
  }
  */
  name: 'ContactForm',
};
</script>

<style lang="scss" scoped>


.contact-form {
  max-width: 600px;
  margin: 50px auto;
  h4 {
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    margin-top: 10px;
  }
}

//form {
//  display: flex;
//  .q-input {
//    margin-left: 10px;
//    width: 50%;
//  }
//}
//form {
//		margin: 0 0 2rem 0;
//	}
//
//		form > :last-child {
//			margin-bottom: 0;
//		}
//
//		form > .fields {
//			display: -moz-flex;
//			display: -webkit-flex;
//			display: -ms-flex;
//			display: flex;
//			-moz-flex-wrap: wrap;
//			-webkit-flex-wrap: wrap;
//			-ms-flex-wrap: wrap;
//			flex-wrap: wrap;
//			margin: -2rem 0 2rem -2rem;
//			width: calc(100% + 4rem);
//		}
//
//			form > .fields > .field {
//				-moz-flex-grow: 0;
//				-webkit-flex-grow: 0;
//				-ms-flex-grow: 0;
//				flex-grow: 0;
//				-moz-flex-shrink: 0;
//				-webkit-flex-shrink: 0;
//				-ms-flex-shrink: 0;
//				flex-shrink: 0;
//				padding: 2rem 0 0 2rem;
//				width: calc(100% - 2rem);
//			}
//
//				form > .fields > .field > :last-child {
//					margin-bottom: 0;
//				}
//
//				form > .fields > .field.half {
//					width: calc(50% - 1rem);
//				}
//
//				form > .fields > .field.third {
//					width: calc(100%/3 - 0.66667rem);
//				}
//
//				form > .fields > .field.quarter {
//					width: calc(25% - 0.5rem);
//				}
.text {
  margin-top: 20px;
  width: 100%;
}

button {
  border-radius: 3px;
  width: 100%;
  height: 50px;
  outline: none;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #cb945e;
  transition: all cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;
  margin-top: 20px;
  font-size: 20px;
}
button:hover {
  background-color: #e9b37c;
  color: white;
  box-shadow: 0.1px 0px 20px 0.01px #e9b37c;
  transform: scale(1.02);
}
button:focus {
  background-color: #ffd8b1;
}

@media (max-width: 768px) {
  //.contact-form {
  //  max-width: 340px;
  //}
}
</style>
