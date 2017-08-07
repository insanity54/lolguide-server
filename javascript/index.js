module['exports'] = function lolSummoner(hook) {
  hook.res.json(hook.params); 
  http.get('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+hook.params.name, function(res) {
    hook.debug(hook.params.name + " is the summoner name requested" + res.body);
    hook.res.end(res.body);
    
  }).on('error', function(e) {
    hook.debug(e);
    hook.res.end(e);
  });
};


/**
module['exports'] = function isTheWebSiteDown (hook) {
  http.get(hook.params.url, function(res){
    hook.debug(hook.params.url + " is up and running.")
    hook.res.end('false');
  }).on('error', function (){
    hook.debug(hook.params.url + " is DOWN!")
    hook.res.end('true');
  });
};
*/
