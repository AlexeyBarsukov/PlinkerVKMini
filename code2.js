gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.Game_32OverCode.eventsList0(runtimeScene);


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
