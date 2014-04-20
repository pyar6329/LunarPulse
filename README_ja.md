#LunarPulse

[![Build Status](https://travis-ci.org/pyar6329/LunarPulse.svg)](https://travis-ci.org/pyar6329/LunarPulse)

###[http://lunarpulse.herokuapp.com/](http://lunarpulse.herokuapp.com/)

##コンセプト
###　　赤ちゃんはお母さんの心音を聴いて癒され眠ります。
###　　　　　　　あなたも月の鼓動を聴いて癒されてみませんか？

##これは何？
LunarPulseは音と光を用いて、あなたを癒してくれるWebアプリです。
音は月の鼓動のように、光はゆらぎのように、月震の時の流れに合わせて動作します。
Philips HueとLeap Motionがあれば、あなたをもっと癒してくれることでしょう。

##画面遷移
###トップページ
すべての始まりはここからです。
月震の開始時刻と終了時刻を指定することで、その間の月の鼓動と光を感じることが出来ます。

さあ、`Experience Lunar Pulse!`ボタンを押して、あなたを癒やす世界に入りましょう！
###月震マップ
月震マップは、月の鼓動を視覚的に体感することが出来ます。3つある鼓動のどれかをクリックすることで、月の鼓動が聞こえてくることでしょう。

###月震スタジオ
月震スタジオは、月の鼓動をもっと視覚的に、さらに聴覚的に体感することが出来ます。左右にある矢印にマウスオーバーして月面を回転させましょう。

マウスの代わりにLeapMotionを、光としてPhillips Hueを使うことで、もっとあなたを癒してくれることでしょう。

##その他
その他の説明はslideshareを参照

 [http://www.slideshare.net/pyar6329/what-is-lunarpulse](http://www.slideshare.net/pyar6329/what-is-lunarpulse)

##ローカルPC上にインストール
以下のコマンドを入力することで、ローカルPC上でLunarPulseを動かすことが出来ます。
```bash
$ git clone https://github.com/pyar6329/LunarPulse.git
$ bundle install --without production
$ bundle exec rake db:migrate
$ bundle exec rake db:seed
$ bundle exec rails s
```
LunarPulseにはhttp://localhost:3000 でアクセス出来ます。

##License
LunarPulseは[MIT ライセンス](http://www.opensource.org/licenses/MIT)です。
