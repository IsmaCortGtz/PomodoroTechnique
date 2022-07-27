// Settings
var workLimit = 25;
var breakLimit = 5;
var longBreakLimit = 30;
var longBreakFrequency = 4;

// HTML elements
var counterSecond = document.getElementsByClassName("counter-seconds")[0];
var counterMinutes = document.getElementsByClassName("counter-minutes")[0];
var playButton = document.getElementsByClassName("play-button")[0];
var alarmButton = document.getElementsByClassName("alarm-button")[0];
var list = document.getElementsByClassName("row-header")[0];
var optionButton = document.getElementsByClassName("header-option")[0];
var optionsElements = document.getElementsByClassName("options");
var optionsQuitButton = document.getElementsByClassName("options-quit")[0];

//Setting elements
var workLimitValue = document.getElementById("workLimite");
var breakLimitValue = document.getElementById("breakLimite");
var defaultAudioValue = document.getElementById("useCustomURL");
var customUrlValue = document.getElementById("customURL");
var audioVolumeValue = document.getElementById("alarmVolume");
var testAlarmButton = document.getElementsByClassName("options-alarmTest-button")[0];
var stopTestAlarmButton = document.getElementsByClassName("options-alarmTestStop-button")[0];
var useLongBreakValue = document.getElementById("useLongBreak");
var longBreakFrequencyValue = document.getElementById("longBreakFrecuency");
var longBreakLimitValue = document.getElementById("longBreakLimit");

// Global vars
var timer;
var second = 0;
var minutes = 0;
var working = true;

var currentWorkNumber = 0;
var endTimeDate;
var beginTimeDate;

var alarmWasPlaying = false;
var alarmAudio = new Audio(defaultAudioURL);
var alarmAudioTest = new Audio(defaultAudioURL);
alarmAudio.loop = true;
alarmAudioTest.loop  = true;

updateOptionsValues();

