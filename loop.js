const pendingTimers= [];
const pendingosTasks=[];
const pendingOperations=[];

//new timers ,tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    //check one : Any pending setTimeout , setInterval , setImmediate?
    //check two: Any pending Os Tasks? (Like server listening to port)
    //check three: Any pending long running operations? (like fs module)

pendingTimers.length||pendingosTasks.length||pendingOperations.length;

}
//Entire body executes in one Tick
while (shouldContinue()) {
    // 1) Node looks at pending timers and sees if any functions are ready to be called. //setTimeOut setInterval
    //  2) Node looks at pending tasks / operations and sees if any functions are ready to be called
    // 3) Node actually pauses the execution temporarily that continues whenever some number of events occur
    //-a new pendingosTasks is done
    //- a new pendingOsOperation is done
    //- a timer is  about to complete

    // 4) Look at pendingTimers.
    // 5) Handle any 'close' events
    
}

//terminates