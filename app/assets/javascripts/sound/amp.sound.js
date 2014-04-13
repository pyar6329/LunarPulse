/**
 * 振幅から音を再現するオブジェクト
 * @package sound/amp.Amplitude.Sound.js
 * @author Noguchi Hiroshi
 * @created 2014/04/11
 * @namespace Amplitude
 * @version 1.00
 */
Amplitude.Sound = function () {
        /**
         * 種類データ
         * @type {Amplitude.Items}
         */
        this.items = new Amplitude.Items();

        /**
         * timbreオブジェクト
         * @type {timbre}
         */
        this.timbre = timbre;
        /**
         * 振幅
         * @type {number}
         */
        this.amplitude = null;

        /**
         * 開始時刻
         * @type {date}
         */
        this.startSecond = null;

        /**
         * 終了時刻
         * @type {date}
         */
        this.endSecond = null;

        /**
         * タイプ
         * @type {Array}
         */
        this._types = [];

		this._base = T('audio', "/audio/test.mp3", false);
        this._enves = {
            env1: T("adsr", 10, 10, 1, 0, 100),
            env2: T("adsr", 0, 200, 0)
        };
};

Amplitude.Sound.prototype.init = function() {
	this._types = [];	
};
	
    /**
     * サウンドを再生する。
     * @param amplitude
     * @param start
     * @param end
     * @param itemName
     */
    Amplitude.Sound.prototype.play = function(amplitude, start, end, itemName) {
        var item = this.items.getItem(itemName);
        var melodies = T("+");
        var score = this._getScore(this.items.getPrelude(itemName));
        for (var typeName in item.type) {
            for (var categoryName in item.type[typeName]) {
                this._types.push(T(
                    typeName,
                    categoryName,
                    T('glide', 2, 680),
                    item.type[typeName][categoryName].volume
                ));
            }
        }
        _.each(this._types, function(v) {
            melodies.append(v);
        });
        var self = this;
        var vcf  = T("rlpf", T("+", 30000, this._enves.env1).kr(), melodies);
        var vca  = T("*", vcf, this._enves.env2);
        var efx1 = T("efx.dist", 0, 0, 0, vca).off();
        var efx2 = T("efx.chorus", efx1);
        var basePlayer = T("efx.delay" , efx2);
        var subPlayer = this._getSubPlayer(score, amplitude);
        basePlayer.onplay = function() {
            subPlayer.on().bang();
        };
        basePlayer.onpause = function() {
        	basePlayer.removeAll();
        };
        basePlayer.play();
        _.delay(basePlayer.onpause, this._getLoadTime(start, end));
    };

    Amplitude.Sound.prototype._getSubPlayer = function(score, amplitude) {
        var self = this;
        var subPlayer = T("interval", this.timbre.utils.bpm2msec(20, 30), function() {
            var note = score[subPlayer.count % score.length];
            for (var i = 0; i < self._types.length; i++) {
                self._types[i].freq.value = amplitude + self._getM64tof(note);
            }
            for (var k in self._enves) {
                self._enves[k].bang();
            }
            //self._base.load();
        });
        return subPlayer;
    };

    /**
     * m64データを取得する。
     * @param m64
     * @returns {number}
     * @private
     */
    Amplitude.Sound.prototype._getM64tof = function(m64) {
        return 20 * Math.pow(Math.pow(2, (1/(12*64))), m64 - (69*64));
    };

    /**
     * 再生時間を取得する。
     * @param start
     * @param end
     * @returns {number}
     * @private
     */
    Amplitude.Sound.prototype._getLoadTime = function(start, end) {
        return end - start;
    };

    /**
     * Scoreを取得する。
     * @returns {Array}
     * @private
     */
    Amplitude.Sound.prototype._getScore = function(prelude) {
        var result = [];
        var self = this;
        prelude.split(/\s+/).map(function(x) {
            result.push((self.timbre.utils.atom(x) - 12) * 64);
        });
        return result;
    };

    /**
     * 現在設定されている振幅を取得する。
     * @returns {null|*}
     */
    Amplitude.Sound.prototype.getAmplitude = function() {
        return this.amplitude;
    };

    /**
     * 振幅を設定する。
     * @param amplitude
     */
    Amplitude.Sound.prototype.setAmplitude = function(amplitude) {
        if (_.isNumber(amplitude)) this.amplitude = amplitude;
    };

    /**
     * 周波数の取得
     * @returns {number}
     */
    Amplitude.Sound.prototype.getRate = function() {
        return this.rate;
    };

    /**
     * 周波数のセット
     * @param hertz
     */
    Amplitude.Sound.prototype.setRate = function(rate) {
        if (_.isNumber(rate)) this.rate = rate;
    };

    /**
     * 開始時間の設定
     * @param sec
     */
    Amplitude.Sound.prototype.setStartSecond = function (sec) {
        this._setSecond('startSecond', sec);
    };

    /**
     * 終了時間の設定
     * @param sec
     */
    Amplitude.Sound.prototype.setEndSecond = function(sec) {
        this._setSecond('endSecond', sec);
    };

    /**
     * 時間の設定関連
     * @param paramName
     * @param sec
     * @returns {*}
     * @private
     */
    Amplitude.Sound.prototype._setSecond = function (paramName, sec) {
        return _.isNumber(sec) ? this[paramName] = sec : null;
    };