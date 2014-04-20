#LunarPulse

日本語版は[README_ja.md](https://github.com/pyar6329/LunarPulse/blob/mk_copylight/README_ja.md)を参照してください。

[![Build Status](https://travis-ci.org/pyar6329/LunarPulse.svg)](https://travis-ci.org/pyar6329/LunarPulse)

###[http://lunarpulse.herokuapp.com/](http://lunarpulse.herokuapp.com/)

##Concepts
###Baby is healed by listening to the beat of the mother heart, and sleep.
###Would are you healed by listening the beat of the moon heart?

##What's is this?
LunarPulse is Web Application healing you by using sounds and lights.
Sounds hears as if sounds is the beat of the moon heart,
Lights looks as if lights is shaken,
LunarPulse is ran along time of moonquake.
You are healed more if you have Phillips Hue and Leap Motion.

##Screen transition
###Top page
All the beginning is here.
Input start time and end time of Moonquake, and You are able to feel lights and the beat of the moon heart.

Let's push `Experience Lunar Pulse!` button so start LunarPulse.

###Moon maps
Moon maps appeal to the your eye to the beat of the moon heart.
You are able to go to Moon studio if click on a beat of the moon heart.

###Moon studio
Moon studio is more understandable than moon maps.
Mouseover left allow and right allow, besides spin the surface of the moon.
You are healed more and more if you are able to use LeapMotion instead of mouseover, and Phillips Hue as lights.

##Others
Regarding other description, see slideshare.

 [http://www.slideshare.net/pyar6329/what-is-lunarpulse](http://www.slideshare.net/pyar6329/what-is-lunarpulse)


##Installation on local PC
Input below commands if you want to run LunarPulse on local PC.
```bash
$ git clone https://github.com/pyar6329/LunarPulse.git
$ bundle install --without production
$ bundle exec rake db:migrate
$ bundle exec rake db:seed
$ bundle exec rails s
```
LunarPulse is running at http://localhost:3000

##License
LunarPulse is released under the [MIT License](http://www.opensource.org/licenses/MIT).
