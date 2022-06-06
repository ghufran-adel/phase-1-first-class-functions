function callback(){
  return '{spy}'
};
 function receivesAFunction(callback) {
    callback();
    return "plz work"
 };
  receivesAFunction();

  function runFiveMiles() {
    return 'Go for a five-mile run' ;
  }
  runFiveMiles()
  function returnsANamedFunction (){
    return  runFiveMiles();
   
  }
  returnsANamedFunction ();

  function returnsAnAnonymousFunction(){
    return (() =>"Stretch! Work that core!");
  };
  returnsAnAnonymousFunction();