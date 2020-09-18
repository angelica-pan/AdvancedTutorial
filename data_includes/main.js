// This is the AdvancedTutorial experiment.
// Type code below this line.

// Remove command prefix
PennController.ResetPrefix(null)

// Turn off debugger
// DebugOff()

newTrial("instructions",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Welcome!")
        .center()
        .print()
    ,
    newText("instructions-2", "<p>In this experiment, you will match a sentence with an image. You will hear and read a sentence, and see two images.</p>")
        .center()
        .print()
    ,
    newText("instructions-3", "Press the <b>F</b> key if the sentence matches the image on the left.")
        .center()
        .print()
    ,
    newText("instructions-4", "Press the <b>J</b> key if the sentence matches the image on the right.")
        .center()
        .print()
    ,
    newText("instructions-5", "<p>Press the Spacebar when you are ready to start the experiment.</p>")
        .center()
        .print()
    ,
    newKey("wait", " ")
        .wait()
)

newTrial("experimental-trial",
    newAudio("fish-audio", "2fishRoundTank.mp3")
        .play()
    ,
    newText("fish-description", "The fish swim in a tank which is perfectly round.")
        .center()
        .unfold(2600)
    ,
    newImage("fish-round", "2fishRoundTank.png")
        .size(200, 200)
    ,
    newImage("fish-square", "1fishSquareTank.png")
        .size(200, 200)
    ,
    newCanvas("side-by-side", 450,200)
        .add(  0, 0, getImage("fish-round"))
        .add(250, 0, getImage("fish-square"))
        .center()
        .print()
    ,
    newKey("keypress", "FJ")
        .wait()
        .log()
    ,
    getAudio("fish-audio")
        .wait("first")
)