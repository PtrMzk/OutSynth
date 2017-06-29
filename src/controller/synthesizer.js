/**
 * Created by Piotr Mikolajczyk on 5/13/2017.
 */
import Wad from "web-audio-daw";

function Synthesizer (signalType){
    Synthesizer.setSignalType = function setSignalType(newSignalType)
    {
        signalType = newSignalType;
    };

   this.prototype = new Wad({
        source : signalType,
        env : {
            attack : .01,
            decay : .005,
            sustain : .2,
            hold : .15,
            release : .3
        },
        filter : {
            type : 'lowpass',
            frequency : 1200,
            q : 8.5,
            env : {
                attack : .2,
                frequency : 600
            }
        }
    });

    this.playNote = function playNote (pitch, label) {
        this.prototype.play({
            length: 100,
            volume: 0.8,
            wait: 0,     // Time in seconds between calling play() and actually triggering the note.
            loop: false, // This overrides the value for loop on the constructor, if it was set.
            pitch: pitch,  // A4 is 440 hertz.
            label: label,   // A label that identifies this note.
            env: {hold: 9001},
            panning: [1, -1, 10],
            filter: {frequency: 900},
            delay: {delayTime: .8}
        })
    };

    this.stop = function stop()
    {
        this.prototype.stop();
    }

}
export default Synthesizer;