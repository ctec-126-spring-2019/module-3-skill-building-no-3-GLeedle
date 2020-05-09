// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = `<p>I don't know what's going on the TV news has got me confused<br>
                    So Bobby King is paying his dues for bald faced avarice<br>
                    Was it the CIA or the same or the other side, somebody's lying<br>
                    They write in black and white but it comes out gray to me, I can't believe it</p>`
    return output
}

function chorus1() {
    let output = `<p>I don't know, no I don't, but I care<br>
                    I don't know, no I don't, but I care<br>
                    I don't know, no I don't, but I care<br>
                    I don't know, no I don't, but I care<br>
                    I don't know, no I don't, but I care<br>
                    I don't know, no I don't, but I care<br>
                    I don't know, no I don't, but I care<br>
                    I don't know, no I don't...</p>`
    return output
}

function verse2() {
    let output = `<p>Through all the subterfuge and intrigue we've lost our way trying to keep it<br>
                    And though we ask the old God for change the status quo will remain<br>
                    They turned us inside out with half truths confusing you, seems so good to me</p>`
    return output
}

function verse3() {
    let output = `<p>It's hard to tell the good from the bad when they're both wearing camouflage green jeans<br>
                    And when the danger lurks for the teens in bed some more, it's nothing new<br>
                    Well if there's any doubt who I am just call me John, Johnny Q Public<br>
                    Now that the Walter Cronkites are gone I'm so unsure I can't believe it</p>`
    return output
}

function main() {
    let finalOutput = '' // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    finalOutput = `${verse1()} ${chorus1()} ${verse2()} ${chorus1()} ${verse3()} ${chorus1()}`

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}