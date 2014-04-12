
/**
 * 各地震の種類の設定ファイル
 * @constructor
 */
/**
 * 地震の種類によって音を変更するオブジェクト
 * @package sound/amp.item.js
 * @author Noguchi Hiroshi
 * @created 2014/04/11
 * @namespace Amplitude
 * @version 1.00
 */
Amplitude.Items = function() {
    /**
     * アイテム
     * @type {object}
     */
    this.items = {
        'apollo14': {
            type: {
                "osc": {
                    'tri': {
                        volume: 0,
                        waveform: 1,
                        freq: 8,
                        fine: 0
                    },
                    'fami': {
                        volume: 0.001,
                        waveform: 3,
                        freq: 1,
                        fine: 0
                    }
                }
            },
            prelude: "C4"
        },
        'apollo15': {
            type: {
                "osc": {
                    'tri': {
                        volume: 2,
                        waveform: 1,
                        freq: 8,
                        fine: 0
                    },
                    'pulse': {
                        volume: 0.45,
                        waveform: 3,
                        freq: 1,
                        fine: 0
                    }
                }
            },
            prelude: "B5 C8 C9 C3"
        },
        'apollo16': {
            type: {
                "osc": {
                    'tri': {
                        volume: 0.3,
                        waveform: 1,
                        freq: 8,
                        fine: 0
                    },
                    'pulse': {
                        volume: 0.45,
                        waveform: 3,
                        freq: 1,
                        fine: 0
                    }
                }
            },
            prelude: "B5 C8 C9 C3"
        }
    };
};

/**
 * 全てのアイテムを取得する。
 * @returns {object} items
 */
Amplitude.Items.prototype.getAll = function() {
    return this.items;
};


/**
 * アイテムの一部を取得する
 * @param itemName
 * @returns {object}
 */
Amplitude.Items.prototype.getItem = function(itemName) {
    if (!_.isString(itemName)) return false;

    return itemName in this.items ?
        this.items[itemName] : null;
};

/**
 * プレリュードの値を取得する。
 * @param preludeName
 * @returns {*}
 */
Amplitude.Items.prototype.getPrelude = function(itemName) {
    if (!_.isString(itemName)) return false;
    return itemName in this.items ?
        this.items[itemName].prelude.trim() : null;
};