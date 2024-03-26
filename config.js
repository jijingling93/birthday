//Badu, Aotian October 10, 2019 https://github.com/AJLoveChina/birthday
var config = {
     // The length of the sentence can be arbitrary. You can write ten sentences or twenty sentences.
     // Try not to exceed 15 words per sentence, otherwise the display effect may not be very good
     texts: [
         "Give it to me", //Here, the last comma at the end of each sentence must be in English!! It's very important!!
         "My beloved little cutie", // Same as above...
         "Today is your birthday",
         "This is what we do together",
         "It's my third birthday",
         "last year's birthday",
         "I still remember eating at Wang Po Chuan Chuan",
         "I want to eat well this year",
         "I want to feed my cute pigs well",
         "Then take it away",
         "YAMI~~",
     ],
     /**
      * imgs can be left blank, but if it is filled in, it must follow the following format
      * "Corresponding to the text above, it must be exactly the same": "Picture address, you can put the picture in the imgs folder"
      * For example
      * "Lovely little cutie": "./imgs/xiaokeai.jpg"
      *
      * If you don’t want pictures, just write two slash comments at the beginning of each line. For example, the picture of "Today is your birthday" below will not be displayed:)
      * Tip: It is best to use a square or close to a square for the picture, which will look better
      */
     imgs: {
         "Lovely little cutie": "./imgs/xiaokeai.png",
         // "Today is your birthday": "./imgs/birthday.jpg",
     },
     //Button text description, the following is the default button text, in English, you can change it to the text you like
     desc: {
         turn_on: "start",
         play: "music",
         banner_coming: "color",
         balloons_flying: "There seems to be something missing",
         cake_fadein: "Cake?",
         light_candle: "Candle?",
         wish_message: "Happy birthday",
         story: "A MESSAGE FOR YOU",
     }
};
