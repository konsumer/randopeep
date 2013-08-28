'use strict';

module.exports = function(randopeep){
    // synchronous AJAX for loading data files in light-mode
    /* global ActiveXObject */
    function getFile(url) {
        if (typeof(window) === 'undefined'){ return require(url); }
        var AJAX = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        if (AJAX) {
            AJAX.open('GET', url, false);
            AJAX.send(null);
            return JSON.parse(AJAX.responseText);
        } else {
            return false;
        }
    }


    randopeep.int = function(max){
        max = max || 10;
        return Math.floor(Math.random() * max);
    };

    randopeep.randomEl =  function (array) {
        return array[randopeep.int(array.length)];
    };


    /**
     * Get an element of a built-in dictionary of words
     * @param String [multiple]  all the dictionary names you want to load, in order
     * @return String            random array items, joined by " "
     */
    randopeep.get = function(){
        var out = [];
        for (var a in arguments){
            if (typeof(randopeep.data[arguments[a]]) === 'undefined'){
                // sync AJAX or dynamic require
                randopeep.data[arguments[a]] = getFile(randopeep.dataLocation + arguments[a]+'.json');
            }
            out.push(randopeep.randomEl(randopeep.data[arguments[a]]));
        }
        return out.join(' ');
    };

    randopeep.getCount = function(n, list){
        var out = [];
        n = n || 1;
        
        for (var a=0;a<n;a++){
            out.push(randopeep.get(list));
        }
        return out;
    };

    /**
     * Utility to turn "ssssSomeText" into "Sssssometext"
     * @param  String  str input
     * @return String      title-cased text
     */
    randopeep.titleCase = function(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    // parses string for a symbol and replace it with a random number from 1-10
    randopeep.replaceSymbolWithNumber = function (string, symbol) {
        symbol = symbol || '#';
        var str = '';
        for (var i = 0; i < string.length; i++) {
            if (string[i] === symbol) {
                str += randopeep.int(10);
            } else {
                str += string[i];
            }
        }
        return str;
    };

    randopeep.format = function(){
        var args = Array.prototype.slice.apply(arguments);
        return args.shift().replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] !== 'undefined' ? args[number] : match;
        });
    };

};