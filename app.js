let score = {
        wins : 0,
        loses : 0 ,
        ties : 0 
    } ;
function play(user)
{
    let computer = Math.random() ; 
    let compChoice = '' ;
    if(computer >= 0 && computer < 1/3)
    {
        compChoice = 'Rock';
    }
    else if(computer >= 1/3 && computer < 2/3)
    {
        compChoice = 'Paper';
    }
    else
    {
        compChoice = 'Scissors';
    }
    let result = '' ;
    if(compChoice === user)
    {
        result = 'Tie' ;
    }
    else if((compChoice === 'Paper' && user === 'Scissors') || (compChoice === 'Rock' && user === 'Paper') || (compChoice === 'Scissors' && user === 'Stone'))
    {
        result = 'You Lost' ;
    }
    else
    {
        result = 'You Win' ;
    }
    /*SCORE COUNTER*/ 
    if(result === 'You Win')
    {
        score.wins++ ; 
    }
    else if(result === 'You Lost')
    {
        score.loses++ ;
    }
    else
    {
        score.ties++ ; 
    }

    // to display all things on the webpage itself rather than prompting
    document.querySelector('.user').innerHTML = `&nbspYou <img src="${user}-emoji.png"> <img src="${compChoice}-emoji.png">Computer` ;
    document.querySelector('.res').innerHTML = `${result}.` ;
    updatescore() ;
    // alert(`You Picked ${user}.\nComputer chose ${compChoice}.\n${result}\nWins : ${score.wins} , Losses : ${score.loses} , Ties : ${score.ties}`) ;
}

function reset()
{
    score.wins = 0 ;
    score.loses = 0 ; 
    score.ties = 0 ;
    
    // DOM 
    updatescore() ;
    document.querySelector('.user').innerHTML = 'Select Your Move !' ;
    document.querySelector('.res').innerHTML = '' ;
}


// DOM 
function updatescore()
{
    document.querySelector('.scoredisplay')
        .innerHTML = `Wins : ${score.wins} , Losses : ${score.loses} , Ties : ${score.ties}` ;
}   

let isautoplay = false ; 
let intervalId ; 
function autoplay()
{
    if(!isautoplay)
    {
        intervalId = setInterval(function (){
            let randomMove = Math.random() ;
            let randomChoice = '' ;
            if(randomMove >= 0 && randomMove < 1/3)
            {
                randomChoice = 'Rock';
            }
            else if(randomMove >= 1/3 && randomMove < 2/3)
            {
                randomChoice = 'Paper';
            }
            else
            {
                randomChoice = 'Scissors';
            }
            document.querySelector('.autobut').innerHTML = 'Stop AutoPlay' ;
            play(randomChoice) ;
        }, 1500) ;
        isautoplay = true ;
    }
    else
    {
        clearInterval(intervalId) ;
        isautoplay = false ;
        document.querySelector('.autobut').innerHTML = 'AutoPlay' ;
    }
}