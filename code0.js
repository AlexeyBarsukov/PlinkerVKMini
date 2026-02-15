gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDMusicButtonObjects1= [];
gdjs.MenuCode.GDMusicButtonObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartObjects1[k] = gdjs.MenuCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDMusicButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMusicButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMusicButtonObjects1[i].getVariableBoolean(gdjs.MenuCode.GDMusicButtonObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMusicButtonObjects1[k] = gdjs.MenuCode.GDMusicButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMusicButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.MenuCode.GDMusicButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMusicButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMusicButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMusicButtonObjects1[k] = gdjs.MenuCode.GDMusicButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMusicButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects1[i].returnVariable(gdjs.MenuCode.GDMusicButtonObjects1[i].getVariables().getFromIndex(0)).toggle();
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.MenuCode.GDMusicButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMusicButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMusicButtonObjects1[i].getVariableBoolean(gdjs.MenuCode.GDMusicButtonObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMusicButtonObjects1[k] = gdjs.MenuCode.GDMusicButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMusicButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
