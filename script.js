var gators = [
  {name: "Elvis Vessley",
    hobbies: "surfing, dancing",
    weight: 865,
    likesIceCream: true,
    imgSource: "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/10c413dcc4d444acbd6810f483028933"
  },{name: "Little Britches",
    hobbies: "shaking, eating fruit",
    weight: 361,
    likesIceCream: true,
    imgSource: "http://nebula.wsimg.com/5df260927e75521ad0f18fae842e522e?AccessKeyId=00569247111AAAE64481&disposition=0&alloworigin=1"
  },{name: "Wanda Snapson",
    hobbies: "having parties",
    weight: 712,
    likesIceCream: false,
    imgSource: "http://www.vaguebuttrue.com/images/1449775760-alligatorclimbsfenceWEBSITE.jpg"
  }
]

Vue.component('headline', {
  props: ['title'],
  template: '<h1><img src="alligator-logo.png" alt="Alligator Logo">{{title}}</h1>'
})



document.addEventListener("DOMContentLoaded", function(){

  let profileListings = new Vue({
    el: '#profileListings',
    data: {
      profiles: gators
    }
  })

  let headerApp = new Vue({
    el:'#headerApp'
    // data: {
    //   <h1><img src="alligator-logo.png" alt="Alligator Logo">
    //     My Favorite Alligators
    //   </h1>

  })


})





// var app
// document.addEventListener("DOMContentLoaded", function(){
//   app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello World!'
//     }
//   })
// })
