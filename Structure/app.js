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

    alert(`You Picked ${user}.\nComputer chose ${compChoice}.\n${result}\nWins : ${score.wins} , Losses : ${score.loses} , Ties : ${score.ties}`) ;
}

function reset()
{
    score.wins = 0 ;
    score.loses = 0 ; 
    score.ties = 0 ; 
}