'use strict';

var formats = {
  star1: 'Is {0} {1} {2}?',
  star2: 'Is {0} {1} {2} {3}?',
  star3: '{0} {1} {2}, you won\'t guess what happened next!',
  star4: '{0} {1} {2} and you won\'t believe what happened next!'
};

module.exports = function(randopeep){
  return function(star, mode, withInfo){
    star = star || randopeep.get('clickbait/star');
    mode = mode || randopeep.randomEl(Object.keys(formats));

    var noun = randopeep.get('clickbait/noun'),
      verb = randopeep.get('clickbait/verb'),
      modifier = randopeep.get('clickbait/modifier');

    var out = randopeep.format(
      formats[mode],
      star,
      verb,
      noun,
      modifier
    );

    return withInfo ? {headline:out, star:star, verb:verb, noun:noun, modifier:modifier} : out;
  };
};