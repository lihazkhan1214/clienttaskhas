var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Your Name',
        description: 'Web Developer',
        link1: 'Introduction',
        link2: 'My Portfolio',
        link3: 'Learn About Me',
        link4: 'Contact Me',
        link5: 'A Very Important List',
        link6: 'Quiz',
        link7: 'Hover Colors',
        avatar: "images/avatar.jpg"
    }
})

var intro = new Vue({
    el: '#top',
    data: {
        introTitle: "Hi! Welcome to my Vue.js page.",
        introText: "Everything on this page is loaded from Vue data.",
        buttonText: "See My Work"
    }
})

var portfolio = new Vue({
    el: '#portfolio',
    data: {
        portfolioTitle: "Photography Portfolio",
        image1: "images/pic02.jpg",
        imgText1: "Image One",
        image2: "images/pic03.jpg",
        imgText2: "Image Two",
        image3: "images/pic04.jpg",
        imgText3: "Image Three",
        image4: "images/pic05.jpg",
        imgText4: "Image Four",
        image5: "images/pic06.jpg",
        imgText5: "Image Five",
        image6: "images/pic07.jpg",
        imgText6: "Image Six",
        portfolioText: "I began this portfolio to document my travels. I'm excited to go to more places!"
    }
})

var about = new Vue({
    el: '#about',
    data: {
        aboutTitle: "About Me",
        aboutImage: "images/pic08.jpg",
        aboutText: "I am a student learning web development. In this class I am working with HTML, CSS, JavaScript, APIs and Vue.js."
    }
})

var list = new Vue({
    el: '#list',
    data: {
        listTitle: "My Favorite Restaurants",
        favorites: ['Chick-fil-A', 'Chipotle', 'Five Guys', 'Olive Garden', 'Panera Bread']
    }
})

var conditional = new Vue({
    el: '#conditional',
    data: {
        teacherName: "",
        framework: ""
    }
})

var getColor = new Vue({
    el: '#function',
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
    data: {
        contactTitle: "Contact",
        contactText: "Want to get in touch? Send me a message using the form below."
    }
})
