        
    //questions object container
    var questions = [
    {
        question : "Who was the first President of the United States?",
        answers : {
            a : "George H Orwell",
            b : "George W Washington",
            c : "George H Washington",
            d : "George Washingmachine"
        },
        correctAnswer : "b"
    },
    {
        question : "What does NEWS stand for?",
        answers : {
            a : "NORTH EAST WEST SOUTH",
            b : "NOTHING ENTERTAINING WORLD STUFF",
            c : "nothing!",
            d : "NOTABLE EVENTS WEATHER SPORTS"
        },
        correctAnswer : "c"
    },
    {
        question : "Peter Parker is best known as _____",
        answers : {
            a : "Heman",
            b : "Spiderman",
            c : "Aquaman",
            d : "Batman"
        },
        correctAnswer : "d"
    },
    {
        question : "The Venus Flytrap is _____",
        answers : {
            a : "a herbivore",
            b : "a carnivore",
            c : "folklore",
            d : "an omnivore"
        },
        correctAnswer : "b"
    }


]
    //onclick remove start button

    $("#start").on("click", function() {
        $("#start").remove();

    //create countdown timer
    var clock = $("<div id='clock'>Time Remaining: </div>");
    var time = 10;
    $(clock).html(time);
    clock.appendTo("#quiz");
    

    var counter = setInterval(function() {
        time--;
        $(clock).html(time);
        if (time <= 0){
            $("#quiz").remove();
            $("<div>game over</div>").appendTo('body'); 
            clearTimeout(counter);
        }
    }, 1000);
        
        
    
    //create the html for the questions

    for( var i = 0; i < questions.length; i++) {
        //create new div with id of question location
        var questionDiv = $("<div id='q"+i+"'></div>");
        var answersDiv = $("<div class='answers' id='a"+i+"'></div>");
        //append the question to the newdiv then apend it to quiz
        questionDiv.append(questions[i].question);
        //create a radio button for each answer and push it to the quiz
        var answers = [];
        for(letter in questions[i].answers){
            answers.push('<label>'+'<input type="radio" name="q'+i+'" value="'+letter+'">'+ questions[i].answers[letter]+'</label>');
        };
        answers.join('');
        answersDiv.append(answers);
        //console.log(newDiv);
        questionDiv.appendTo("#quiz");
        answersDiv.appendTo("#quiz");

    };

    

    //create a button done that clears the page and shows the results on click
    $("<button id='done'>Done</button>").appendTo("#quiz");
    
    $("#done").on("click", function() {

        // get the answers selected
    var corrAns = 0;
    var incorrAns = 0;
    var unnAns = 0;
    var ansCount = $(".answers");

    for( var i =0; i<questions.length;i++) {
        //console.log(ansCount);
        userAnswer = $('input[name=q'+i+']:checked').val();    
        //console.log(userAnswer);
        //check to see if useranswer is the correct answer 
        if (userAnswer === questions[i].correctAnswer){
            corrAns++;
        }
        else {incorrAns++;}
        
        console.log(corrAns);
        console.log( incorrAns );
        console.log( unnAns);

    };


    unnAns = questions.length - (corrAns + incorrAns);

        //remove 
        $("#quiz").remove();
        
        //create and append html for results page

        var done = $("<div id='completed'>All done!</div>");
        var corAns = $("<div>Correct Answers: </div>");
        var incorAns = $("<div>Incorrect Answers: </div>");
        var unAns = $("<div>Unanswered: </div>");
        corAns.append(corrAns);
        incorAns.append(incorrAns);
        unAns.append(unnAns);
        done.append(corAns);
        done.append(incorAns);
        done.append(unAns);

        done.appendTo("body");

    });


    })

    




    
    