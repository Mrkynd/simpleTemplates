var hbs = require('handlebars')

var data = {
  trueBool: true,
  cool: 'Gangstas Paradise',
  colors: ['red', 'green', 'blue'],
  obj: {
    prop: 'now I know how to access nested object properties'
  },
  obj2: {
    prop2: ['one', 'two', 'three', 'and to the', 'four']
  },
  obj3: {
    prop3: ['snoop','doggy', 'dog', 'is', 'at', 'the', 'door']
  }
}

//Conditional usage

var conditionalTemplate =
'<p>' +
  '{{#if trueBool}}' +
    'truths are only half truthss :)' +
  '{{else}}' +
    'False my friend' +
  '{{/if}}' +
'</p>'

var createConditionalResult = hbs.compile(conditionalTemplate)
var conditionalResult = createConditionalResult(data)

console.log(conditionalResult)

//iteration using each

var iteratorTemplate =
'<p>' +
  '{{#each colors}}' +
    '<span>{{this}}</span>' +
  '{{/each}}' +
'</p>'

var createIteratorResult = hbs.compile(iteratorTemplate)
var iteratorResult = createIteratorResult(data)

console.log(iteratorResult)

//nested objects

var nestedTemplate = '<p>{{obj.prop}}</p>'
var nestedTemplateResult = hbs.compile(nestedTemplate)
var nestedResult = nestedTemplateResult(data)

console.log(nestedResult)

//nested objects iteratorResult

var nestObjIterator =
'<p>' +
  '{{#each obj2.prop2}}' +
    '<li>{{this}}</li>' +
  '{{/each}}' +
'</p>'

var createNestObjIterator = hbs.compile(nestObjIterator)
var nestObjIteratorResult = createNestObjIterator(data)

console.log(nestObjIteratorResult)

//nest obj iter accessing second Array

var noia =
'<div>' +
  '{{#each obj3.prop3}}' +
    '<p>{{this}}</p>' +
  '{{/each}}' +
'</div>'

var createNoia = hbs.compile(noia)
var noiaResult = createNoia(data)

console.log(noiaResult)
