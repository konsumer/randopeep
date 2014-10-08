'use strict';

module.exports = function(randopeep){
  return function(star, mode){
    star = star || randopeep.get('clickbait/star');
    mode = mode || randopeep.randomEl(['star1', 'star2', 'star3', 'star4']);
    
    if (mode == 'star1'){
      return randopeep.format('Is {0} {1} {2}?',
        star,
        randopeep.get('clickbait/verb'),
        randopeep.get('clickbait/noun')
      );
    }

    if (mode == 'star2'){
      return randopeep.format('Is {0} {1} {2} {3}?',
        star,
        randopeep.get('clickbait/verb'),
        randopeep.get('clickbait/noun'),
        randopeep.get('clickbait/modifier')
      );
    }

    if (mode == 'star3'){
      return randopeep.format('{0} {1} {2}, you won\'t guess what happened next!',
        star,
        randopeep.get('clickbait/verb'),
        randopeep.get('clickbait/noun')
      );
    }

    if (mode == 'star4'){
      return randopeep.format('{0} {1} {2} and you won\'t believe what happened next!',
        star,
        randopeep.get('clickbait/verb'),
        randopeep.get('clickbait/noun')
      );
    }
  };
};