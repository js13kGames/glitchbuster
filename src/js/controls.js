function reevalControls(e){
    P.direction = 0;
    if(K[37]){
        P.direction = -1;
    }
    if(K[39]){
        P.direction = 1;
    }
}

onkeydown = function(e){
    if(!K[38] && e.keyCode == 38){
        P.jump(1);
    }

    if(!K[32] && e.keyCode == 32){
        P.throwGrenade();
    }

    K[e.keyCode] = true;
    reevalControls(e);
};

onkeyup = function(e){
    K[e.keyCode] = false;
    reevalControls(e);
};
