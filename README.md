# Pikto Academy Week 4

## DOM Manipulation and jQuery

# Outline

### 1. DOM in a nutshell
### 2. Selectors
### 3. Querying DOM using vanilla JS
### 4. Manipulating DOM with JS
### 5. Querying DOM using jQuery
### 6. Manipulating DOM with jQuery

---

# 1. DOM in a nutshell

- DOM stands for Document Object Model (DOM)
- It's a tree like structure.. which is why people call it DOM Nodes.
- The DOM is a fully object-oriented representation of the web page, and it can be modified with a scripting language such as JavaScript.
- Although the DOM is often accessed using JavaScript, it is not a part of the JavaScript language. It can also be accessed by other languages.

### References

- [Introduction to the DOM][1]

---

# 2. Selectors in a nutshell

- Selectors for tags would look like the tag it's selecting (e.g. 'div', 'body', 'button')
- Selectors for elements with specific IDs will start with `#`. (e.g. '#foo')
- Selectors for elements with specific classes will start with `.` (e.g. '.bar')
- Selectors for elements with specific attributes will look like `[type='button']`

The above are the basics of what you can use to `select` or `find` element(s) in the DOM tree.

What other things can you find?

| Selector | Selects |
| `A E` | Any E element that is a `descendant` of an A element (that is: a child, or a child of a child, etc.) |
| `A > E` | Any E element that is a `child` (i.e. direct descendant) of an A element |
| `E:first-child` | Any E element that is the `first child` of its parent |
| `B + E | Any E element that is the next `sibling` of a B element (that is: the next child of the same parent) |

### References

- [CSS Selectors][2]

---

# 3. Querying DOM using vanilla JS

What is [vanilla JS][3]?

There's many ways of [querying DOM elements on the browser][4] using Javascript..

  1. [document.getElementById][5]
  2. [document/node.querySelector][6]
  3. [document/node.querySelectorAll][7]
  4. [document.getElementsByName][8]
  5. [document/node.getElementsByClassName][9]
  6. [document/node.getElementsByTagName][10]
  7. ~~[document/node.getElementsByTagNameNS][11]~~

Things to note.

- 1 and 2 returns a single Node Element
- 3 to 7 returns a NodeList (Array-like)
- 1,2 and 3 is enough to do all you need to do most of the time.
- No.7... I have 0 experience with that.

Demo: http://www.webpackbin.com/EJqSBuPEZ

---

# 4. Manipulating DOM with JS

What do we *want* to change? What *can* we change?

Almost *everything*. DOM Properties, HTML Attributes, you name it!

Wait, what's that? Property vs Attribute? Read more about it [here][12]

You want to add a class? Sure `node.classList.add( 'foo' )`
You want to remove a class? No problem. `node.classList.remove( 'foo' )`
You want to toggle a class? Okay. `node.classList.toggle( 'foo' )`
You want to check if a class exist? Hmm.. `node.classList.contains( 'foo' )`
You want the whole list of class in string? well.. `node.className`
You want it in an array? `node.classList` ( It's array-like )

Wait, what's the element's ID? `node.id`

It's an input field? What's the value? `node.value`

How do I get data from that `data-foo="bar"` thingy? Ah.. `node.dataset.foo`

How bout that random attribute `animal="dog"`? No worries `node.getAttribute( 'animal' )`

Can I change the styling directly without using a class? Sure `node.style.width = '100px'`

---

# 5. Querying DOM using jQuery

---

# 6. Manipulating DOM with jQuery

---

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
[2]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors
[3]: http://vanilla-js.com/
[4]: http://javascript.info/tutorial/searching-elements-dom
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
[6]: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
[7]: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
[8]: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
[9]: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
[10]: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
[11]: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagNameNS
[12]: http://lucybain.com/blog/2014/attribute-vs-property/
