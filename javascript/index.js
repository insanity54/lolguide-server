module['exports'] = function myService (hook) {
  hook.res.json(hook.params); 
};
