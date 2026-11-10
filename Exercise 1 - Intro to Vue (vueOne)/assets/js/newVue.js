var header = new Vue({
    el: '#header',
    data:{
        yourName: "Deranta' Avaloy",
        description: 'Graduate Student at University of Georgia',
        link1: 'Introduction',
        link2: 'My Portfolio',
        link3: 'Learn About Me',
        link4: 'Contact Me',
        link5: 'A Very Important List',
        link6: 'Fill in the Blank',
        link7: 'Change the Color',
        avatar: "images/deranta.jpg",
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
        portfolioTitle: "Nature & Water Portfolio",
        image1: "images/water1.jpg",
        imgText1: "Sunset Shoreline",
        image2: "images/water2.jpg",
        imgText2: "Ocean Waves",
        image3: "images/water3.jpg",
        imgText3: "Forest Waterfall",
        image4: "images/water4.jpg",
        imgText4: "Still Lake Morning",
        image5: "images/water5.jpg",
        imgText5: "Mountain Lake",
        image6: "images/water6.jpg",
        imgText6: "Flowing Stream",
        portfolioText: "Water has a way of telling its own story. This collection celebrates nature through oceans, lakes, rivers, and waterfalls."
    }
})

var about = new Vue({
    el: '#about',
    data:{
        aboutTitle: "About Me",
        aboutImage: "images/pic08.jpg",
        aboutText: "My name is Deranta’ Avaloy, and I’m an entrepreneur, filmmaker, and creative media professional based in Atlanta, Georgia. My background includes animation, video game development, filmmaking, and emerging technologies. I recently earned my bachelor’s degree in Film and Media from Georgia State University and am currently pursuing graduate studies in Emerging Media at the University of Georgia. My passion is combining storytelling, technology, and business to create innovative entertainment experiences while continuing to grow both personally and professionally."
    }
})

var list = new Vue({
    el: '#list',
    data:{
        listTitle: "My Top 6 Favorite Movies",
        favorites: ['The Crow', 'Friday', 'Transformers: The Movie (1986)', 'Uptown Saturday Night', 'Chocolate City', 'Dogma']
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
