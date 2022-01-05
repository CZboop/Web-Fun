document.addEventListener('keydown', logKey)

var game_started = false;

function start_game(){
    document.getElementById('main_txt').innerHTML = "CHECK CORE TEMPERATURE?";
    var para = document.createElement('p');
    var yes_no = document.createTextNode("YES/NO");
    para.append(yes_no);
    para.setAttribute('id', 'yes_no');
    var lower_div = document.getElementById('lower_div') ;
    lower_div.appendChild(para);
    document.getElementById('title').remove();
    document.getElementById('subtitle').remove();
    document.getElementById('title_rule').remove();
}

function flash_func(){
    var para = document.getElementById('yes_no');
    if (para.style.visibility=='hidden'){
        para.style.visibility = 'visible';
    }
    else{
        para.style.visibility = 'hidden';
    }
}

var flasher_func = setInterval(flash_func, 1000);

function stop_flash(){
    clearInterval(flasher_func);
    document.getElementById('yes_no').style.visibility = 'hidden';
}

var venting = false;
var decalcifying = false;
var alertness = false;
var core_temp = true;

function vent_gas(){
    document.getElementById('main_txt').innerHTML = "VENT RADIOACTIVE GAS?";
    var flasher_func = setInterval(flash_func, 1000);
    venting = true;
    core_temp = false;
    logKey();
}

function sound_alertness(){
    document.getElementById('main_txt').innerHTML = "SOUND ALERTNESS HORN?";
    alertness = true;
    venting=false;
    logKey();
}

function decalcify(){
    document.getElementById('main_txt').innerHTML = "DECALCIFY CALCIUM DUCTS?";
    decalcifying = true;
    alertness = false;
    logKey();
}

function logKey(e){
    if (game_started==false){
        game_started = true;
        start_game();
    }
    if (e.code.slice(3,4)=='Y'){
        if (core_temp==true){
            document.getElementById('main_txt').innerHTML = "CORE TEMPERATURE NORMAL";
            setTimeout(vent_gas, 2000);
            stop_flash();
        }
        else if (venting==true){
            document.getElementById('main_txt').innerHTML = "GAS WAS VENTED";
            clearInterval(flasher_func);
            setTimeout(sound_alertness, 2000);
            stop_flash();
            
        }
        else if (alertness==true){
            document.getElementById('main_txt').innerHTML = "HORN WAS SOUNDED";
            clearInterval(flasher_func);
            setTimeout(decalcify, 2000);
            stop_flash();
        }
        else if (decalcifying==true){
            document.getElementById('main_txt').innerHTML = "DUCTS WERE DECALCIFIED";
            clearInterval(flasher_func);
            setTimeout(game_over, 2000);
            stop_flash();
        }
    }
    if (e.code.slice(3,4)=='N'){
        if (venting==true){
            document.getElementById('main_txt').innerHTML = "VENTING PREVENTS EXPLOSION";
            stop_flash();
        }
        else if (decalcifying==true){
            document.getElementById('main_txt').innerHTML = "DECALCIFYING PREVENTS EXPLOSION";
            stop_flash();
        }
        else if (alertness==true){
            document.getElementById('main_txt').innerHTML = "ALERTNESS PREVENTS EXPLOSION";
            stop_flash();
        }
    }
    document.getElementById('yes_no').style.visibility = 'hidden';
    clearInterval(flasher_func);
}

function game_over(){
    document.getElementById('main_txt').innerHTML = "SITUATION CRITICAL.";
    var extra_text = document.createElement('h3');
    var imminent = document.createTextNode('EXPLOSION IMMINENT.')
    extra_text.append(imminent);
    var main_div = document.getElementById('main_game_div');
    main_div.appendChild(extra_text);
    stop_flash();
}