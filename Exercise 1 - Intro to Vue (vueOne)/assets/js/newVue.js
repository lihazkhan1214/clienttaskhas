var header = new Vue({
    el: '#header',
    data:{
        yourName: 'Name',
        description: 'Web Developer',
        link1: 'Introduction',
        link2: 'My Portfolio',
        link3: 'Learn About Me',
        link4: 'Contact Me',
        link5: 'A Very Important List',
        link6: 'Fill in the Blank',
        link7: 'Change the Color',
        avatar: "images/me.jpg",
    }
})

var intro = new Vue({
    el: '#top',
    data:{
        introTitle: "Hi! Welcome to my page.",
        introText: "This whole page gets its content from Vue.",
        introButton: "See My Portfolio"
    }
})

var portfolio = new Vue({
    el: '#portfolio',
    data:{
        portfolioTitle: "Photography Portfolio",
        image1: "images/one.jpg",
        imgText1: "Image One",
        image2: "images/two.jpg",
        imgText2: "Image Two",
        image3: "images/three.jpg",
        imgText3: "Image Three",
        image4: "images/four.jpg",
        imgText4: "Image Four",
        image5: "images/five.jpg",
        imgText5: "Image Five",
        image6: "images/six.jpg",
        imgText6: "Image Six",
        portfolioText: "I began this portfolio to document my travels. I'm excited to go to more places!"
    }
})

var about = new Vue({
    el: '#about',
    data:{
        aboutTitle: "About Me",
        aboutImage: "images/pic08.jpg",
        aboutText: "I am a student at the University of Georgia. In this class I am learning HTML, CSS, JavaScript, APIs and Vue.js."
    }
})

var list = new Vue({
    el: '#list',
    data:{
        listTitle: "My Favorite Restaurants",
        favorites: ['Chick-fil-A', 'Chipotle', 'Five Guys', 'Olive Garden', 'Panera Bread']
    }
})

var conditional = new Vue({
    el: '#conditional',
    data:{
        teacherName: "",
        cityName: ""
    }
})

var getColor = new Vue ({
    el:'#function',
    data: {
      bgColor: '',
      colors: ['red', 'green', 'blue', 'purple', 'gold']
    },
    methods: {
      changeColor(color) {
        this.bgColor = color;
      }
    }
    })

var contact = new Vue({
    el: '#contact',
    data:{
        contactTitle: "Contact",
        contactText: "Want to get in touch? Send me a message using the form below."
    }
})
