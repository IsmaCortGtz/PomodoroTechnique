// Modules


function playTime(){
    beginTimeDate = new Date;
    timer = setInterval( () => {
        plusTimer();
        refreshCounter();
        checkIfEnd();
    }, 1000);
}


function endTime(typeOfBlock){
    playAlarm();
    second = 0;
    minutes = 0;
    refreshCounter();
    endTimeDate = new Date;

    let endTimeText = intToString(endTimeDate.getHours()) + ":" + intToString(endTimeDate.getMinutes());
    let beginTimeText = intToString(beginTimeDate.getHours()) + ":" + intToString(beginTimeDate.getMinutes());
    working ? currentWorkNumber++ : undefined;
    working = !working;

    list.insertAdjacentHTML("afterend", `<div class="list-row">
    <div class="list-cell">${beginTimeText}</div>
    <div class="list-cell">${endTimeText}</div>
    <div class="list-cell cell-type">${typeOfBlock}</div>
</div>`);
}


function playAlarm(){
    clearInterval(timer);
    alarmAudio.play();
    playButton.classList.add("blocked");
    alarmButton.classList.remove("blocked");
}



function stopAlarm(){
    playTime();
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    playButton.classList.remove("blocked");
    alarmButton.classList.add("blocked");
}


function plusTimer(){
    if (second === 59){
        second = 0;
        minutes++;
    }else{
        second++;
    }
}


function refreshCounter(){
    counterSecond.innerHTML = intToString(second);
    counterMinutes.innerHTML = intToString(minutes);
}


function checkIfEnd(){
    if (working){
        if (minutes === workLimit){
            endTime("Work block");
        }
    }else{
        if (useLongBreakValue.checked){
            if (longBreakFrequency !== currentWorkNumber){
                if (minutes === breakLimit){
                    endTime("Breake block");
                }
            }else{
                if (minutes === longBreakLimit){
                    endTime("Long break block")
                    currentWorkNumber = 0;
                }
            }
        }else{
            if (minutes === breakLimit){
                endTime("Breake block");
            }
        }
    }
}


function intToString(number){
    if (number < 10){
        return ("0" + number.toString());
    }else if (number >= 10){
        return number;
    }
}


function updateOptionsValues(){
    workLimit = parseInt(workLimitValue.value);
    breakLimit = parseInt(breakLimitValue.value);
    longBreakLimit = parseInt(longBreakLimitValue.value);
    longBreakFrequency = parseInt(longBreakFrequencyValue.value);

    if (defaultAudioValue.checked){
        alarmAudio.src = defaultAudioURL;
    }else{
        alarmAudio.src = customUrlValue.value;
    }
    alarmAudio.volume = parseInt(audioVolumeValue.value) / 100;
}