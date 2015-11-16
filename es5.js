'use strict';

module.exports = {
  'env': {
    'node': true,
  },
  'globals': {},
  'rules': {
    /**
     * Possible Errors
     * The following rules point out areas where you might have made mistakes.
     */
    'comma-dangle': [ 2, 'always-multiline' ], // disallow or enforce trailing commas (recommended)
    'no-cond-assign': 2, // disallow assignment in conditional expressions (recommended)
    'no-console': 1, // disallow use of console in the node environment (recommended)
    'no-constant-condition': 2, // disallow use of constant expressions in conditions (recommended)
    'no-control-regex': 2, // disallow control characters in regular expressions (recommended)
    'no-debugger': 2, // disallow use of debugger (recommended)
    'no-dupe-args': 2, // disallow duplicate arguments in functions (recommended)
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals (recommended)
    'no-duplicate-case': 2, // disallow a duplicate case label. (recommended)
    'no-empty-character-class': 2, // disallow the use of empty character classes in regular expressions (recommended)
    'no-empty': 2, // disallow empty statements (recommended)
    'no-ex-assign': 2, // disallow assigning to the exception in a catch block (recommended)
    'no-extra-boolean-cast': 2, // disallow double-negation boolean casts in a boolean context (recommended)
    'no-extra-parens': 0, // disallow unnecessary parentheses
    'no-extra-semi': 2, // disallow unnecessary semicolons (recommended) (fixable)
    'no-func-assign': 2, // disallow overwriting functions written as function declarations (recommended)
    'no-inner-declarations': [ 2, 'functions' ], // disallow function or variable declarations in nested blocks (recommended)
    'no-invalid-regexp': 2, // disallow invalid regular expression strings in the RegExp constructor (recommended)
    'no-irregular-whitespace': 2, // disallow irregular whitespace outside of strings and comments (recommended)
    'no-negated-in-lhs': 2, // disallow negation of the left operand of an in expression (recommended)
    'no-obj-calls': 2, // disallow the use of object properties of the global object (Math and JSON) as functions (recommended)
    'no-regex-spaces': 2, // disallow multiple spaces in a regular expression literal (recommended)
    'no-sparse-arrays': 2, // disallow sparse arrays (recommended)
    'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement (recommended)
    'use-isnan': 2, // disallow comparisons with the value NaN (recommended)
    'valid-jsdoc': 1, // Ensure JSDoc comments are valid
    'valid-typeof': 2, // Ensure that the results of typeof are compared against a valid string (recommended)
    'no-unexpected-multiline': 2, // Avoid code that looks like two expressions but is actually one

    /**
     * Best Practices
     * These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.
     */
    'accessor-pairs': 2, // Enforces getter/setter pairs in objects
    'block-scoped-var': 2, // treat var statements as if they were block scoped
    'complexity': [ 1, 10 ], // specify the maximum cyclomatic complexity allowed in a program
    'consistent-return': 2, // require return statements to either always or never specify values
    'curly': [ 2, 'all' ], // specify curly brace conventions for all control statements
    'default-case': 2, // require default case in switch statements
    'dot-notation': [ 1, { 'allowKeywords': true } ], // encourages use of dot notation whenever possible
    'dot-location': [ 2, 'property' ], // enforces consistent newlines before or after dots
    'eqeqeq': [ 1, 'allow-null' ], // require the use of === and !== (fixable)
    'guard-for-in': 2, // make sure for-in loops have an if statement
    'no-alert': 1, // disallow the use of alert, confirm, and prompt
    'no-caller': 2, // disallow use of arguments.caller or arguments.callee
    'no-div-regex': 2, // disallow division operators explicitly at beginning of regular expression
    'no-else-return': 2, // disallow else after a return in an if
    'no-empty-label': 2, // disallow use of labels for anything other than loops and switches
    'no-eq-null': 0, // disallow comparisons to null without a type-checking operator
    'no-eval': 2, // disallow use of eval()
    'no-extend-native': 2, // disallow adding to native types
    'no-extra-bind': 2, // disallow unnecessary function binding
    'no-fallthrough': 2, // disallow fallthrough of case statements (recommended)
    'no-floating-decimal': 2, // disallow the use of leading or trailing decimal points in numeric literals
    'no-implicit-coercion': 2, // disallow the type conversions with shorter notations
    'no-implied-eval': 2, // disallow use of eval()-like methods
    'no-invalid-this': 0, // disallow this keywords outside of classes or class-like objects
    'no-iterator': 2, // disallow usage of __iterator__ property
    'no-labels': 2, // disallow use of labeled statements
    'no-lone-blocks': 2, // disallow unnecessary nested blocks
    'no-loop-func': 0, // disallow creation of functions within loops
    'no-multi-spaces': 2, // disallow use of multiple spaces (fixable)
    'no-multi-str': 2, // disallow use of multiline strings
    'no-native-reassign': 2, // disallow reassignments of native objects
    'no-new-func': 2, // disallow use of new operator for Function object
    'no-new-wrappers': 2, // disallows creating new instances of String,Number, and Boolean
    'no-new': 2, // disallow use of the new operator when not part of an assignment or comparison
    'no-octal-escape': 2, // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
    'no-octal': 2, // disallow use of octal literals (recommended)
    'no-param-reassign': 0, // disallow reassignment of function parameters
    'no-process-env': 0, // disallow use of process.env
    'no-proto': 2, // disallow usage of __proto__ property
    'no-redeclare': 2, // disallow declaring the same variable more than once (recommended)
    'no-return-assign': [ 2, 'except-parens' ], // disallow use of assignment in return statement
    'no-script-url': 2, // disallow use of javascript: urls.
    'no-self-compare': 2, // disallow comparisons where both sides are exactly the same
    'no-sequences': 2, // disallow use of the comma operator
    'no-throw-literal': 2, // restrict what can be thrown as an exception
    'no-unused-expressions': 1, // disallow usage of expressions in statement position
    'no-useless-call': 2, // disallow unnecessary .call() and .apply()
    'no-useless-concat': 2, // disallow unnecessary concatenation of literals or template literals
    'no-void': 2, // disallow use of the void operator
    'no-warning-comments': [ 1, {
      'terms': [
        'todo',
        'fixme',
        'xxx',
      ],
      'location': 'start',
    } ], // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
    'no-with': 2, // disallow use of the with statement
    'radix': 2, // require use of the second argument for parseInt()
    'vars-on-top': 0, // require declaration of all vars at the top of their containing scope
    'wrap-iife': [ 2, 'any' ], // require immediate function invocation to be wrapped in parentheses
    'yoda': [ 2, 'never' ], // require or disallow Yoda conditions

    /**
     * Strict Mode
     * These rules relate to using strict mode.
     */
    'strict': [ 2, 'global' ], // controls location of Use Strict Directives

    /**
     * Variables
     * These rules have to do with variable declarations.
     */
    'init-declarations': 0, // enforce or disallow variable initializations at definition
    'no-catch-shadow': 2, // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-delete-var': 2, // disallow deletion of variables (recommended)
    'no-label-var': 2, // disallow labels that share a name with a variable
    'no-shadow-restricted-names': 2, // disallow shadowing of names such as arguments
    'no-shadow': 2, // disallow declaration of variables already declared in the outer scope
    'no-undef-init': 0, // disallow use of undefined when initializing variables
    'no-undef': 2, // disallow use of undeclared variables unless mentioned in a /*global */ block (recommended)
    'no-undefined': 2, // disallow use of undefined variable
    'no-unused-vars': [ 2, {
      'vars': 'local',
      'args': 'after-used'
    } ], // disallow declaration of variables that are not used in the code (recommended)
    'no-use-before-define': [ 2, 'nofunc' ], // disallow use of variables before they are defined

    /**
     * Node.js and CommonJS
     * These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
     */
    'callback-return': 2, // enforce return after a callback
    'global-require': 2, // disallow require() outside of the top-level module scope
    'handle-callback-err': 2, // enforce error handling in callbacks
    'no-mixed-requires': [ 2, {
      'grouping': true
    } ], // disallow mixing regular variable and require declarations
    'no-new-require': 2, // disallow use of new operator with the require function
    'no-path-concat': 2, // disallow string concatenation with __dirname and __filename
    'no-process-exit': 2, // disallow process.exit()
    'no-restricted-modules': 0, // restrict usage of specified node modules
    'no-sync': 0, // disallow use of synchronous methods

    /**
     * Stylistic Issues
     * These rules are purely matters of style and are quite subjective.
     */
    'array-bracket-spacing': [ 1, 'always' ], // enforce spacing inside array brackets (fixable)
    'block-spacing': 1, // disallow or enforce spaces inside of single line blocks (fixable)
    'brace-style': [ 1, '1tbs', {
      'allowSingleLine': true
    } ], // enforce one true brace style
    'camelcase': 1, // require camel case names
    'comma-spacing': 1, // enforce spacing before and after comma
    'comma-style': 1, // enforce one true comma style
    'computed-property-spacing': [ 1, 'never' ], // require or disallow padding inside computed properties (fixable)
    'consistent-this': [ 0, 'that' ], // enforce consistent naming when capturing the current execution context
    'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines (fixable)
    'func-names': 0, // require function expressions to have a name
    'func-style': [ 1, 'declaration' ], // enforce use of function declarations or expressions
    'id-length': [ 0, {
      'min': 3,
      'max': 20,
      'properties': 'never',
      'exceptions': [
        'i',
        'j',
        '$',
        'cb',
      ],
    } ], // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-match': 0, // require identifiers to match the provided regular expression
    'indent': [ 1, 2, { 'SwitchCase': 1 } ], // specify tab or space width for your code (fixable)
    'jsx-quotes': [ 1, 'prefer-double' ], // specify whether double or single quotes should be used in JSX attributes
    'key-spacing': [ 1, {
      'beforeColon': false,
      'afterColon': true
    } ], // enforce spacing between keys and values in object literal properties
    'lines-around-comment': 0, // enforce empty lines around comments
    'linebreak-style': [ 1, 'unix' ], // disallow mixed 'LF' and 'CRLF' as linebreaks
    'max-nested-callbacks': [ 0, 2 ], // specify the maximum depth callbacks can be nested
    'new-cap': 1, // require a capital letter for constructors
    'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    'newline-after-var': 1, // require or disallow an empty newline after variable declarations
    'no-array-constructor': 1, // disallow use of the Array constructor
    'no-continue': 1, // disallow use of the continue statement
    'no-inline-comments': 0, // disallow comments inline after code
    'no-lonely-if': 1, // disallow if as the only statement in an else block
    'no-mixed-spaces-and-tabs': [ 1, false ], // disallow mixed spaces and tabs for indentation (recommended)
    'no-multiple-empty-lines': [ 1, { 'max': 3 } ], // disallow multiple empty lines
    'no-nested-ternary': 1, // disallow nested ternary expressions
    'no-negated-condition': 1, // disallow negated conditions
    'no-new-object': 1, // disallow the use of the Object constructor
    'no-restricted-syntax': 0, // disallow use of certain syntax in code
    'no-spaced-func': 1, // disallow space between function identifier and application (fixable)
    'no-ternary': 0, // disallow the use of ternary operators
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines (fixable)
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 1, // disallow the use of ternary operators when a simpler alternative exists
    'object-curly-spacing': [ 1, 'always' ], // require or disallow padding inside curly braces (fixable)
    'one-var': [ 0, {
      'uninitialized': 'always',
      'initialized': 'never'
    } ], // require or disallow one variable declaration per function
    'operator-assignment': [ 0, 'always' ], // require assignment operator shorthand where possible or prohibit it entirely
    'operator-linebreak': [ 1, 'before' ], // enforce operators to be placed before or after line breaks
    'padded-blocks': 0, // enforce padding within blocks
    'quote-props': [ 1, 'consistent' ], // require quotes around object literal property names
    'quotes': [ 1, 'single' ], // specify whether backticks, double or single quotes should be used (fixable)
    'require-jsdoc': 0, // Require JSDoc comment
    'semi-spacing': [ 1, {
      'before': false,
      'after': true
    } ], // enforce spacing before and after semicolons
    'semi': 1, // require or disallow use of semicolons instead of ASI (fixable)
    'sort-vars': 0, // sort variables within the same declaration block
    'space-after-keywords': [ 1, 'always' ], // require a space after certain keywords (fixable)
    'space-before-keywords': [ 1, 'always' ], // require a space before certain keywords (fixable)
    'space-before-blocks': [ 1, 'always' ], // require or disallow a space before blocks (fixable)
    'space-before-function-paren': [ 1, 'never' ], // require or disallow a space before function opening parenthesis (fixable)
    'space-in-parens': [ 1, 'never' ], // require or disallow spaces inside parentheses
    'space-infix-ops': 1, // require spaces around operators (fixable)
    'space-return-throw-case': 1, // require a space after return, throw, and case (fixable)
    'space-unary-ops': [ 1, {
      'words': true,
      'nonwords': false
    } ], // require or disallow spaces before/after unary operators (fixable)
    'spaced-comment': 1, // require or disallow a space immediately following the // or /* in a comment
    'wrap-regex': 1, // require regex literals to be wrapped in parentheses
  }
}
