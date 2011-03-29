/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Test.Uize.String.Builder.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.String.Builder',required:'Uize.Data',builder:function(){function _a(){var _b=new Uize.String.Builder;_b.append('H');_b.append('e');_b.append('l');_b.append('l');_b.append('o');return _b;}return Uize.Test.declare({title:'Test for Uize.String.Builder Module',test:[Uize.Test.requiredModulesTest('Uize.String.Builder'),{title:'Test creating an instance with no constructor arguments (should initialize to empty string)',test:function(){var _b=new Uize.String.Builder;return _b.length===0&&_b.valueOf()==='';}},{title:'Test creating an instance with a non-empty string as initial value',test:function(){var _b=new Uize.String.Builder('hello');return _b.length===5&&_b.valueOf()=='hello';}},{title:'Test creating an instance with a number as initial value',test:function(){return(new Uize.String.Builder(1234567)).valueOf()==='1234567'}},{title:'Test creating an instance with a boolean as initial value',test:function(){return(new Uize.String.Builder(true)).valueOf()==='true'}},{
title:'Test that equals instance method works when strings are equal',test:function(){return(new Uize.String.Builder('hello')).equals('hello')}},{title:'Test that equals instance method works with no parameters (ie. testing for empty string)',test:function(){return(new Uize.String.Builder).equals()&& !(new Uize.String.Builder('hello')).equals();}},{title:'Test that equals instance method works when strings are not equal',test:function(){return!(new Uize.String.Builder('hello')).equals('goodbye')}},{title:'Test that getValue, valueOf, and toString instance methods all return the same result',test:function(){var _b=new Uize.String.Builder('hello');return(_b.getValue()=='hello'&&_b.valueOf()=='hello'&&_b.toString()=='hello');}},{title:'Test that coercion of instance to string works correctly',test:function(){return new Uize.String.Builder('hello')+''=='hello'}},{title:'Test that append instance method works correctly',test:function(){var _b=new Uize.String.Builder;_b.append('h');_b.append('e');_b.append('l');
_b.append('l');_b.append('o');return _b.length===5&&_b.valueOf()=='hello';}},{title:'Test that prepend instance method works correctly',test:function(){var _b=new Uize.String.Builder;_b.prepend('o');_b.prepend('l');_b.prepend('l');_b.prepend('e');_b.prepend('h');return _b.length===5&&_b.valueOf()=='hello';}},{title:'Test that append and prepend instance methods work correctly in combination',test:function(){var _b=new Uize.String.Builder;_b.append('l');_b.prepend('e');_b.append('l');_b.prepend('h');_b.append('o');return _b.length===5&&_b.valueOf()=='hello';}},{title:'Test that appending a number value works correctly',test:function(){var _b=new Uize.String.Builder(123);_b.append(4567);return _b.length===7&&_b.valueOf()=='1234567';}},{title:'Test that appending a boolean value works correctly',test:function(){var _b=new Uize.String.Builder(false);_b.append(true);return _b.length===9&&_b.valueOf()=='falsetrue';}},{title:'Test that prepending a number value works correctly',test:function(){
var _b=new Uize.String.Builder(4567);_b.prepend(123);return _b.length===7&&_b.valueOf()=='1234567';}},{title:'Test that prepending a boolean value works correctly',test:function(){var _b=new Uize.String.Builder(true);_b.prepend(false);return _b.length===9&&_b.valueOf()=='falsetrue';}},{title:'Test that clear instance method works correctly',test:function(){var _b=new Uize.String.Builder('hello');_b.clear();return _b.length===0&&_b.valueOf()==='';}},{title:'Test that setValue instance method with non-empty string works correctly',test:function(){var _b=new Uize.String.Builder('hello');_b.setValue('goodbye');return _b.length===7&&_b.valueOf()=='goodbye';}},{title:'Test that setValue instance method with no parameters works correctly',test:function(){var _b=new Uize.String.Builder('hello');_b.setValue();return _b.length===0&&_b.valueOf()==='';}},{title:'Test that setValue instance method with number value works correctly',test:function(){var _b=new Uize.String.Builder('hello');_b.setValue(1234567);
return _b.length===7&&_b.valueOf()==='1234567';}},{title:'Test that setValue instance method with boolean value works correctly',test:function(){var _b=new Uize.String.Builder('hello');_b.setValue(true);return _b.length===4&&_b.valueOf()==='true';}},{title:'Test that charAt instance method works correctly',test:function(){return _a().charAt(4)=='o'}},{title:'Test that charCodeAt instance method works correctly',test:function(){return _a().charCodeAt(4)==111}},{title:'Test that concat instance method works correctly',test:function(){return _a().concat(' there',' you')=='Hello there you'}},{title:'Test that indexOf instance method works correctly',test:function(){return _a().indexOf('l')==2}},{title:'Test that lastIndexOf instance method works correctly',test:function(){return _a().lastIndexOf('l')==3}},{title:'Test that match instance method works correctly',test:function(){return _a().match(/l+/)[0]=='ll'}},{title:'Test that replace instance method works correctly',
test:function(){return _a().replace(/l+/,'')=='Heo'}},{title:'Test that search instance method works correctly',test:function(){return _a().search(/l+/)==2}},{title:'Test that slice instance method works correctly',test:function(){return _a().slice(1,3)=='el'}},{title:'Test that split instance method works correctly',test:function(){return Uize.Data.identical(_a().split(''),['H','e','l','l','o'])}},{title:'Test that substr instance method works correctly',test:function(){return _a().substr(1,2)=='el'}},{title:'Test that substring instance method works correctly',test:function(){return _a().substring(1,2)=='e'}},{title:'Test that toLowerCase instance method works correctly',test:function(){return _a().toLowerCase()=='hello'}},{title:'Test the HTML related instance methods to make sure they work correctly',test:function(){return!!(_a().anchor('blah')=='Hello'.anchor('blah')&&_a().big()=='Hello'.big()&&_a().blink()=='Hello'.blink()&&_a().bold()=='Hello'.bold()&&_a().fixed()=='Hello'.fixed()&&
_a().fontcolor('FFFFFF')=='Hello'.fontcolor('FFFFFF')&&_a().fontsize('12px')=='Hello'.fontsize('12px')&&_a().italics()=='Hello'.italics()&&_a().link('uize.com')=='Hello'.link('uize.com')&&_a().small()=='Hello'.small()&&_a().strike()=='Hello'.strike()&&_a().sub()=='Hello'.sub()&&_a().sup()=='Hello'.sup());}}]});}});