/*
	UIZE JAVASCRIPT FRAMEWORK 2011-04-01

	http://www.uize.com/reference/Uize.Test.Uize.Templates.Collection.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Templates.Collection',builder:function(){return Uize.Test.declare({title:'Test for Uize.Templates.Collection JavaScript Template',test:[Uize.Test.requiredModulesTest('Uize.Templates.Collection'),{title:'Test that calling the process static method produces a non-empty string',test:function(){return this.expectNonEmptyString(Uize.Templates.Collection.process({idPrefix:'page_widget'}));}}]});}});