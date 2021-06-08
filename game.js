let randomWord = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },
]

fillBlanks = function () {
    var gameOver = false;

    $('.clickable').click(function () {
        var correctGuess = false;
        let id = $(this).attr("id");
        var life = parseInt($("#life").text());

        for (var i = 0; randomWord.word.length; i++) {
            if (randomWord.word.charAt(i).toLowerCase() === id) {
                if (life > 0 && ($('.fill_blanks').eq(i).html() == "_" || $('.fill_blanks').eq(i).html == id)) {
                    $('.fill_blanks').eq(i).html(id);
                    correctGuess = true;

                    if ($('#blanks').text() === randomWord.word.toLowerCase()) {
                        $('#result').text('You Win!!');
                        correctGuess = true;
                        gameOver = true
                    }
                }
            }
        }
    });
}
























// $(document).ready(function () {
//     displayStory();
// });

// function displayStory() {
//     var randomNumber = parseInt(Math.random() * stories.length);
//     const Story = stories[randomNumber];

//     $('#story_title').html(Story.title);
//     $('#story_text').html(Story.story);
//     $('#input_fields').empty();

//     for (let i = 0; i < Story.inputs; i++) {
//         let input_html = `<input type= "text" class= "input_field" id= "input_${i}" placeholder= "input ${i + 1}"/>`;
//         $('#input_fields').append(input_html);
//     }

//     $('#bank_words').empty();

//     for(let i= 0; i < Story.words.length; i ++) {
//         let html = `<button class= "bank_word_button">${Story.words[i]}</button>`;
//         $('#bank_words').append(html);
//     }
// }

// $(function() {
//     $('.input_field').keyup(function() {
//         let id = $(this).attr('id');
//         let inputNumber = id.split('_')[1];

//         $('.rep_input').eq(inputNumber).html($(this).val());
//     });

//     $('#next_story').click(function() {
//         displayStory();
//     });
// });


// </div>
// <!-- Story Section -->
// <div class="col-sm-12 offset-md-1 col-md-7 offset-lg-1 col-lg-7" id="story_section">
//     <div class="row">
//         <!-- Story Text -->
//         <div class="col-sm-8 col-md-8 col-lg-8">
//             <p id="story_text"></p>
//         </div>
//         <!-- Images -->
//         <div class="col-sm-4 col-md-4 col-lg-4 text-center">
//             <div class="row">
//                 <div class="col-sm-12 col-md-12 col-lg-12">
//                     <img src="./assets/Group-2.png" width="100px" />
//                 </div>
//                 <div class="col-sm-12 col-md-12 col-lg-12 mt-5">
//                     <img src="./assets/Frame-2.png" height="100px" />
//                 </div>
//                 <div class="col-sm-12 col-md-12 col-lg-12 mt-5">
//                     <img src="./assets/Group-1.png" width="100px" />
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>