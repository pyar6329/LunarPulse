#LunarPulse

日本語版は[README_ja.md](https://github.com/pyar6329/LunarPulse/blob/master/README_ja.md)を参照してください。

[![Build Status](https://travis-ci.org/pyar6329/LunarPulse.svg)](https://travis-ci.org/pyar6329/LunarPulse)

###[http://lunarpulse.herokuapp.com/](http://lunarpulse.herokuapp.com/)

##Concepts
###Mother's heartbeat heals a baby and leads to sleep.
###Would are you healed by listening the beat of the moon heart?

##What is this?
LunarPulse is a Web Application healing you by using sounds and lights.
Along time flow of Moonquakes, it sounds like the moon heart and lights like fluctuation.
If you have Phillips Hue and Leap Motion, they heal you more.

##Screen transition
###Top page
All begins here.
Input start and end time of Moonquakes, and you are able to feel the moon heart.

Let's push `Experience Lunar Pulse!` button to start LunarPulse.

###Moon maps
Moon maps appeal to the your eye to the beat of the moon heart.
You are able to go to Moon studio if click on a beat of the moon heart.

###Moon studio
Moon studio is more understandable than moon maps.
Mouseover left or right allows, you are able to spin the moon surface.
You are healed more and more if you are able to use LeapMotion as mouseover and Phillips Hue as lights.

##Others
For other description, please see slideshare.

 [http://www.slideshare.net/pyar6329/what-is-lunarpulse](http://www.slideshare.net/pyar6329/what-is-lunarpulse)


##Installation on local PC
Input below commands if you want to run LunarPulse on your local PC.
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
