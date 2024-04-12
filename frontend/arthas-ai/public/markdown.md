
## Think Python

How to Think Like a Computer Scientist Version 2.0.17
Think Python How to Think Like a Computer Scientist Version 2.0.17
Allen Downey Green Tea Press Needham, Massachusetts Copyright © 2012 Allen Downey. Green Tea Press
9 Washburn Ave Needham MA 02492 Permission is granted to copy, distribute, and/or modify this document under the terms of the Creative Commons Attribution-NonCommercial 3.0 Unported License, which is available at http:
//creativecommons.org/licenses/by-nc/3.0/.

The original form of this book is LATEX source code. Compiling this LATEX source has the effect of generating a device-independent representation of a textbook, which can be converted to other formats and printed.

The LATEX source for this book is available from http://www.thinkpython.com

## Preface The Strange History Of This Book

In January 1999 I was preparing to teach an introductory programming class in Java. I had taught it three times and I was getting frustrated. The failure rate in the class was too high and, even for students who succeeded, the overall level of achievement was too low. One of the problems I saw was the books. They were too big, with too much unnecessary detail about Java, and not enough high-level guidance about how to program. And they all suffered from the trap door effect: they would start out easy, proceed gradually, and then somewhere around Chapter 5 the bottom would fall out. The students would get too much new material, too fast, and I would spend the rest of the semester picking up the pieces. Two weeks before the first day of classes, I decided to write my own book. My goals were:

- Keep it short. It is better for students to read 10 pages than not read 50 pages. - Be careful with vocabulary. I tried to minimize the jargon and define each term at
first use.
- Build gradually. To avoid trap doors, I took the most difficult topics and split them
into a series of small steps.
- Focus on programming, not the programming language. I included the minimum
useful subset of Java and left out the rest.
I needed a title, so on a whim I chose *How to Think Like a Computer Scientist*.

My first version was rough, but it worked. Students did the reading, and they understood enough that I could spend class time on the hard topics, the interesting topics and (most important) letting the students practice. I released the book under the GNU Free Documentation License, which allows users to copy, modify, and distribute the book. What happened next is the cool part. Jeff Elkner, a high school teacher in Virginia, adopted my book and translated it into Python. He sent me a copy of his translation, and I had the unusual experience of learning Python by reading my own book. As Green Tea Press, I published the first Python version in 2001. In 2003 I started teaching at Olin College and I got to teach Python for the first time. The contrast with Java was striking. Students struggled less, learned more, worked on more interesting projects, and generally had a lot more fun.

Over the last nine years I continued to develop the book, correcting errors, improving some of the examples and adding material, especially exercises.

The result is this book, now with the less grandiose title *Think Python*. Some of the changes are:

- I added a section about debugging at the end of each chapter. These sections present
general techniques for finding and avoiding bugs, and warnings about Python pitfalls.
- I added more exercises, ranging from short tests of understanding to a few substantial
projects. And I wrote solutions for most of them.
- I added a series of case studies—longer examples with exercises, solutions, and
discussion. Some are based on Swampy, a suite of Python programs I wrote for use in my classes. Swampy, code examples, and some solutions are available from http://thinkpython.com.
- I expanded the discussion of program development plans and basic design patterns. - I added appendices about debugging, analysis of algorithms, and UML diagrams
with Lumpy.
I hope you enjoy working with this book, and that it helps you learn to program and think, at least a little bit, like a computer scientist. Allen B. Downey Needham MA Allen Downey is a Professor of Computer Science at the Franklin W. Olin College of Engineering.

## Acknowledgments

Many thanks to Jeff Elkner, who translated my Java book into Python, which got this project started and introduced me to what has turned out to be my favorite language.

Thanks also to Chris Meyers, who contributed several sections to How to Think Like a Computer Scientist.

Thanks to the Free Software Foundation for developing the GNU Free Documentation License, which helped make my collaboration with Jeff and Chris possible, and Creative Commons for the license I am using now.

Thanks to the editors at Lulu who worked on *How to Think Like a Computer Scientist*.

Thanks to all the students who worked with earlier versions of this book and all the contributors (listed below) who sent in corrections and suggestions.

## Contributor List

More than 100 sharp-eyed and thoughtful readers have sent in suggestions and corrections over the past few years. Their contributions, and enthusiasm for this project, have been a huge help. If you have a suggestion or correction, please send email to feedback@thinkpython.com. If I make a change based on your feedback, I will add you to the contributor list (unless you ask to be omitted). If you include at least part of the sentence the error appears in, that makes it easy for me to search. Page and section numbers are fine, too, but not quite as easy to work with. Thanks!

- Lloyd Hugh Allen sent in a correction to Section 8.4.
- Yvon Boulianne sent in a correction of a semantic error in Chapter 5. - Fred Bremmer submitted a correction in Section 2.1. - Jonah Cohen wrote the Perl scripts to convert the LaTeX source for this book into beautiful
HTML.
- Michael Conlon sent in a grammar correction in Chapter 2 and an improvement in style in
Chapter 1, and he initiated discussion on the technical aspects of interpreters.
- Benoit Girard sent in a correction to a humorous mistake in Section 5.6. - Courtney Gleason and Katherine Smith wrote horsebet.py, which was used as a case study
in an earlier version of the book. Their program can now be found on the website.
- Lee Harr submitted more corrections than we have room to list here, and indeed he should be
listed as one of the principal editors of the text.
- James Kaylin is a student using the text. He has submitted numerous corrections. - David Kershaw fixed the broken catTwice function in Section 3.10.
- Eddie Lam has sent in numerous corrections to Chapters 1, 2, and 3. He also fixed the Makefile
so that it creates an index the first time it is run and helped us set up a versioning scheme.
- Man-Yong Lee sent in a correction to the example code in Section 2.4.
- David Mayo pointed out that the word "unconsciously" in Chapter 1 needed to be changed to
"subconsciously".
- Chris McAloon sent in several corrections to Sections 3.9 and 3.10. - Matthew J. Moelter has been a long-time contributor who sent in numerous corrections and
suggestions to the book.
- Simon Dicon Montford reported a missing function definition and several typos in Chapter 3.
He also found errors in the increment function in Chapter 13.
- John Ouzts corrected the definition of "return value" in Chapter 3. - Kevin Parks sent in valuable comments and suggestions as to how to improve the distribution
of the book.
- David Pool sent in a typo in the glossary of Chapter 1, as well as kind words of encouragement. - Michael Schmitt sent in a correction to the chapter on files and exceptions.
- Robin Shaw pointed out an error in Section 13.1, where the printTime function was used in an
example without being defined.
- Paul Sleigh found an error in Chapter 7 and a bug in Jonah Cohen's Perl script that generates
HTML from LaTeX.
- Craig T. Snydal is testing the text in a course at Drew University. He has contributed several
valuable suggestions and corrections.
- Ian Thomas and his students are using the text in a programming course. They are the first ones
to test the chapters in the latter half of the book, and they have made numerous corrections and suggestions.
- Keith Verheyden sent in a correction in Chapter 3. - Peter Winstanley let us know about a longstanding error in our Latin in Chapter 3.
- Chris Wrobel made corrections to the code in the chapter on file I/O and exceptions. - Moshe Zadka has made invaluable contributions to this project. In addition to writing the first
draft of the chapter on Dictionaries, he provided continual guidance in the early stages of the book.
- Christoph Zwerschke sent several corrections and pedagogic suggestions, and explained the
difference between *gleich* and *selbe*.
- James Mayer sent us a whole slew of spelling and typographical errors, including two in the
contributor list.
- Hayden McAfee caught a potentially confusing inconsistency between two examples. - Angel Arnal is part of an international team of translators working on the Spanish version of
the text. He has also found several errors in the English version.
- Tauhidul Hoque and Lex Berezhny created the illustrations in Chapter 1 and improved many
of the other illustrations.
- Dr. Michele Alzetta caught an error in Chapter 8 and sent some interesting pedagogic comments and suggestions about Fibonacci and Old Maid.
- Andy Mitchell caught a typo in Chapter 1 and a broken example in Chapter 2.
- Kalin Harvey suggested a clarification in Chapter 7 and caught some typos. - Christopher P. Smith caught several typos and helped us update the book for Python 2.2. - David Hutchins caught a typo in the Foreword. - Gregor Lingl is teaching Python at a high school in Vienna, Austria. He is working on a German translation of the book, and he caught a couple of bad errors in Chapter 5.
- Julie Peters caught a typo in the Preface. - Florin Oprina sent in an improvement in makeTime, a correction in printTime, and a nice typo.
- D. J. Webre suggested a clarification in Chapter 3. - Ken found a fistful of errors in Chapters 8, 9 and 11. - Ivo Wever caught a typo in Chapter 5 and suggested a clarification in Chapter 3. - Curtis Yanko suggested a clarification in Chapter 2.
- Ben Logan sent in a number of typos and problems with translating the book into HTML. - Jason Armstrong saw the missing word in Chapter 2. - Louis Cordier noticed a spot in Chapter 16 where the code didn't match the text.
- Brian Cain suggested several clarifications in Chapters 2 and 3. - Rob Black sent in a passel of corrections, including some changes for Python 2.2. - Jean-Philippe Rey at Ecole Centrale Paris sent a number of patches, including some updates
for Python 2.2 and other thoughtful improvements.
- Jason Mader at George Washington University made a number of useful suggestions and corrections.
- Jan Gundtofte-Bruun reminded us that "a error" is an error. - Abel David and Alexis Dinno reminded us that the plural of "matrix" is "matrices", not "matrixes". This error was in the book for years, but two readers with the same initials reported it on the same day. Weird.
- Charles Thayer encouraged us to get rid of the semi-colons we had put at the ends of some
statements and to clean up our use of "argument" and "parameter".
- Roger Sperberg pointed out a twisted piece of logic in Chapter 3. - Sam Bull pointed out a confusing paragraph in Chapter 2. - Andrew Cheung pointed out two instances of "use before def." - C. Corey Capel spotted the missing word in the Third Theorem of Debugging and a typo in
Chapter 4.
- Alessandra helped clear up some Turtle confusion. - Wim Champagne found a brain-o in a dictionary example. - Douglas Wright pointed out a problem with floor division in arc.
- Jared Spindor found some jetsam at the end of a sentence.
- Lin Peiheng sent a number of very helpful suggestions. - Ray Hagtvedt sent in two errors and a not-quite-error. - Torsten Hübsch pointed out an inconsistency in Swampy. - Inga Petuhhov corrected an example in Chapter 14. - Arne Babenhauserheide sent several helpful corrections. - Mark E. Casida is is good at spotting repeated words. - Scott Tyler filled in a that was missing. And then sent in a heap of corrections. - Gordon Shephard sent in several corrections, all in separate emails. - Andrew Turner spotted an error in Chapter 8. - Adam Hobart fixed a problem with floor division in arc.
- Daryl Hammond and Sarah Zimmerman pointed out that I served up math.pi too early. And
Zim spotted a typo.
- George Sass found a bug in a Debugging section.
- Brian Bingham suggested Exercise 11.10. - Leah Engelbert-Fenton pointed out that I used tuple as a variable name, contrary to my own
advice. And then found a bunch of typos and a "use before def."
- Joe Funke spotted a typo. - Chao-chao Chen found an inconsistency in the Fibonacci example. - Jeff Paine knows the difference between space and spam.
- Lubos Pintes sent in a typo. - Gregg Lind and Abigail Heithoff suggested Exercise 14.4. - Max Hailperin has sent in a number of corrections and suggestions. Max is one of the authors
of the extraordinary *Concrete Abstractions*, which you might want to read when you are done
with this book.
- Chotipat Pornavalai found an error in an error message. - Stanislaw Antol sent a list of very helpful suggestions. - Eric Pashman sent a number of corrections for Chapters 4–11. - Miguel Azevedo found some typos. - Jianhua Liu sent in a long list of corrections. - Nick King found a missing word. - Martin Zuther sent a long list of suggestions. - Adam Zimmerman found an inconsistency in my instance of an "instance" and several other
errors.
- Ratnakar Tiwari suggested a footnote explaining degenerate triangles.
- Anurag Goel suggested another solution for is_abecedarian and sent some additional corrections. And he knows how to spell Jane Austen.
- Kelli Kratzer spotted one of the typos. - Mark Griffiths pointed out a confusing example in Chapter 3. - Roydan Ongie found an error in my Newton's method. - Patryk Wolowiec helped me with a problem in the HTML version. - Mark Chonofsky told me about a new keyword in Python 3. - Russell Coleman helped me with my geometry. - Wei Huang spotted several typographical errors. - Karen Barber spotted the the oldest typo in the book.
- Nam Nguyen found a typo and pointed out that I used the Decorator pattern but didn't mention it by name.
- Stéphane Morin sent in several corrections and suggestions.
- Paul Stoop corrected a typo in uses_only.
- Eric Bronner pointed out a confusion in the discussion of the order of operations. - Alexandros Gezerlis set a new standard for the number and quality of suggestions he submitted. We are deeply grateful!
- Gray Thomas knows his right from his left. - Giovanni Escobar Sosa sent a long list of corrections and suggestions. - Alix Etienne fixed one of the URLs.
- Kuang He found a typo. - Daniel Neilson corrected an error about the order of operations. - Will McGinnis pointed out that polyline was defined differently in two places.
- Swarup Sahoo spotted a missing semi-colon. - Frank Hecker pointed out an exercise that was under-specified, and some broken links. - Animesh B helped me clean up a confusing example. - Martin Caspersen found two round-off errors. - Gregor Ulm sent several corrections and suggestions. - Dimitrios Tsirigkas suggested I clarify an exercise. - Carlos Tafur sent a page of corrections and suggestions. - Martin Nordsletten found a bug in an exercise solution. - Lars O.D. Christensen found a broken reference. - Victor Simeone found a typo.
- Sven Hoexter pointed out that a variable named input shadows a built-in function.
- Viet Le found a typo. - Stephen Gregory pointed out the problem with cmp in Python 3. - Matthew Shultz let me know about a broken link. - Lokesh Kumar Makani let me know about some broken links and some changes in error messages.
- Ishwar Bhat corrected my statement of Fermat's last theorem. - Brian McGhie suggested a clarification. - Andrea Zanella translated the book into Italian, and sent a number of corrections along the
way.

## Contents

|      | Preface                               | v   |
|------|---------------------------------------|-----|
| 1    | The way of the program                | 1   |
| 1.1  | The Python programming language       |     |
| 1.2  | What is a program?                    | 3   |
| 1.3  | What is debugging?                    | 3   |
| 1.4  | Formal and natural languages          | 5   |
| 1.5  | The first program                     | 6   |
| 1.6  | Debugging                             | 7   |
| 1.7  | Glossary                              |     |
| 1.8  | Exercises                             | 9   |
| 2    | Variables, expressions and statements | 11  |
| 2.1  | Values and types                      |     |
| 2.2  | Variables                             | 12  |
| 2.3  | Variable names and keywords           | 12  |
| 2.4  | Operators and operands                | 13  |
| 2.5  | Expressions and statements            | 14  |
| 2.6  | Interactive mode and script mode      | 14  |
| 2.7  | Order of operations                   | 15  |
| 2.8  | String operations                     |     |
| 2.9  | Comments                              | 16  |
| 2.1  | Debugging                             | 16  |
| 2.11 | Glossary                              |     |
| 2.12 | Exercises                             | 18  |
| xviii                                   | Contents                        |
|-----------------------------------------|---------------------------------|
| 12 Tuples                               | 113                             |
| 12.1                                    | Tuples are immutable            |
| 12.2                                    | Tuple assignment                |
| 12.3                                    | Tuples as return values         |
| 12.4                                    | Variable-length argument tuples |
| 12.5                                    | Lists and tuples                |
| 12.6                                    | Dictionaries and tuples         |
| 12.7                                    | Comparing tuples                |
| 12.8                                    | Sequences of sequences          |
| 12.9                                    | Debugging                       |
| 12.10 Glossary                          |                                 |
| 12.11 Exercises                         | 121                             |
| 13 Case study: data structure selection | 123                             |
| 13.1                                    | Word frequency analysis         |
| 13.2                                    | Random numbers                  |
| 13.3                                    | Word histogram                  |
| 13.4                                    | Most common words               |
| 13.5                                    | Optional parameters             |
| 13.6                                    | Dictionary subtraction          |
| 13.7                                    | Random words                    |
| 13.8                                    | Markov analysis                 |
| 13.9                                    | Data structures                 |
| 13.10 Debugging                         | 131                             |
| 13.11 Glossary                          |                                 |
| 13.12 Exercises                         | 132                             |
| 14 Files                                | 133                             |
| 14.1                                    | Persistence                     |
| 14.2                                    | Reading and writing             |
| 14.3                                    | Format operator                 |
| 14.4                                    | Filenames and paths             |

## Chapter 1 The Way Of The Program

The goal of this book is to teach you to think like a computer scientist. This way of thinking combines some of the best features of mathematics, engineering, and natural science. Like mathematicians, computer scientists use formal languages to denote ideas (specifically computations). Like engineers, they design things, assembling components into systems and evaluating tradeoffs among alternatives. Like scientists, they observe the behavior of complex systems, form hypotheses, and test predictions.

The single most important skill for a computer scientist is **problem solving**. Problem solving means the ability to formulate problems, think creatively about solutions, and express a solution clearly and accurately. As it turns out, the process of learning to program is an excellent opportunity to practice problem-solving skills. That's why this chapter is called, "The way of the program." On one level, you will be learning to program, a useful skill by itself. On another level, you will use programming as a means to an end. As we go along, that end will become clearer.

## 1.1 The Python Programming Language

The programming language you will learn is Python. Python is an example of a high-level language; other high-level languages you might have heard of are C, C++, Perl, and Java. There are also **low-level languages**, sometimes referred to as "machine languages" or "assembly languages." Loosely speaking, computers can only run programs written in lowlevel languages. So programs written in a high-level language have to be processed before they can run. This extra processing takes some time, which is a small disadvantage of high-level languages. The advantages are enormous. First, it is much easier to program in a high-level language. Programs written in a high-level language take less time to write, they are shorter and easier to read, and they are more likely to be correct. Second, high-level languages are portable, meaning that they can run on different kinds of computers with few or no modifications. Low-level programs can run on only one kind of computer and have to be rewritten to run on another.

SOURCE CODE
INTERPRETER
OUTPUT
CODE OBJECT
EXECUTOR
CODE SOURCE
COMPILER
OUTPUT

Due to these advantages, almost all programs are written in high-level languages. Lowlevel languages are used only for a few specialized applications.

Two kinds of programs process high-level languages into low-level languages: interpreters and **compilers**. An interpreter reads a high-level program and executes it, meaning that it does what the program says. It processes the program a little at a time, alternately reading lines and performing computations. Figure 1.1 shows the structure of an interpreter. A compiler reads the program and translates it completely before the program starts running. In this context, the high-level program is called the **source code**, and the translated program is called the **object code** or the **executable**. Once a program is compiled, you can execute it repeatedly without further translation. Figure 1.2 shows the structure of a compiler. Python is considered an interpreted language because Python programs are executed by an interpreter. There are two ways to use the interpreter: **interactive mode** and **script mode**.

In interactive mode, you type Python programs and the interpreter displays the result:
>>> 1 + 1 2
The chevron, >>>, is the **prompt** the interpreter uses to indicate that it is ready. If you type
1 + 1, the interpreter replies 2. Alternatively, you can store code in a file and use the interpreter to execute the contents of the file, which is called a **script**. By convention, Python scripts have names that end with
.py. To execute the script, you have to tell the interpreter the name of the file. If you have a script named dinsdale.py and you are working in a UNIX command window, you type python dinsdale.py. In other development environments, the details of executing scripts are different. You can find instructions for your environment at the Python website http:
//python.org.

Working in interactive mode is convenient for testing small pieces of code because you can type and execute them immediately. But for anything more than a few lines, you should save your code as a script so you can modify and execute it in the future.

## 1.2. What Is A Program? 1.2 What Is A Program?

A **program** is a sequence of instructions that specifies how to perform a computation. The computation might be something mathematical, such as solving a system of equations or finding the roots of a polynomial, but it can also be a symbolic computation, such as searching and replacing text in a document or (strangely enough) compiling a program. The details look different in different languages, but a few basic instructions appear in just about every language:
input: Get data from the keyboard, a file, or some other device. output: Display data on the screen or send data to a file or other device. math: Perform basic mathematical operations like addition and multiplication.

conditional execution: Check for certain conditions and execute the appropriate code. repetition: Perform some action repeatedly, usually with some variation.

Believe it or not, that's pretty much all there is to it. Every program you've ever used, no matter how complicated, is made up of instructions that look pretty much like these. So you can think of programming as the process of breaking a large, complex task into smaller and smaller subtasks until the subtasks are simple enough to be performed with one of these basic instructions.

That may be a little vague, but we will come back to this topic when we talk about algorithms.

## 1.3 What Is Debugging?

Programming is error-prone. For whimsical reasons, programming errors are called bugs and the process of tracking them down is called **debugging**.

Three kinds of errors can occur in a program: syntax errors, runtime errors, and semantic errors. It is useful to distinguish between them in order to track them down more quickly.

## 1.3.1 Syntax Errors

Python can only execute a program if the syntax is correct; otherwise, the interpreter displays an error message. **Syntax** refers to the structure of a program and the rules about that structure. For example, parentheses have to come in matching pairs, so (1 + 2) is legal, but 8) is a **syntax error**.

In English, readers can tolerate most syntax errors, which is why we can read the poetry of e. e. cummings without spewing error messages. Python is not so forgiving. If there is a single syntax error anywhere in your program, Python will display an error message and quit, and you will not be able to run your program. During the first few weeks of your programming career, you will probably spend a lot of time tracking down syntax errors. As you gain experience, you will make fewer errors and find them faster.

## 1.3.2 Runtime Errors

The second type of error is a runtime error, so called because the error does not appear until after the program has started running. These errors are also called **exceptions** because they usually indicate that something exceptional (and bad) has happened. Runtime errors are rare in the simple programs you will see in the first few chapters, so it might be a while before you encounter one.

## 1.3.3 Semantic Errors

The third type of error is the **semantic error**. If there is a semantic error in your program, it will run successfully in the sense that the computer will not generate any error messages, but it will not do the right thing. It will do something else. Specifically, it will do what you told it to do. The problem is that the program you wrote is not the program you wanted to write. The meaning of the program (its semantics) is wrong. Identifying semantic errors can be tricky because it requires you to work backward by looking at the output of the program and trying to figure out what it is doing.

## 1.3.4 Experimental Debugging

One of the most important skills you will acquire is debugging. Although it can be frustrating, debugging is one of the most intellectually rich, challenging, and interesting parts of programming. In some ways, debugging is like detective work. You are confronted with clues, and you have to infer the processes and events that led to the results you see. Debugging is also like an experimental science. Once you have an idea about what is going wrong, you modify your program and try again. If your hypothesis was correct, then you can predict the result of the modification, and you take a step closer to a working program.

If your hypothesis was wrong, you have to come up with a new one. As Sherlock Holmes pointed out, "When you have eliminated the impossible, whatever remains, however improbable, must be the truth." (A. Conan Doyle, *The Sign of Four*)
For some people, programming and debugging are the same thing. That is, programming is the process of gradually debugging a program until it does what you want. The idea is that you should start with a program that does *something* and make small modifications, debugging them as you go, so that you always have a working program. For example, Linux is an operating system that contains thousands of lines of code, but it started out as a simple program Linus Torvalds used to explore the Intel 80386 chip. According to Larry Greenfield, "One of Linus's earlier projects was a program that would switch between printing AAAA and BBBB. This later evolved to Linux." (The Linux Users' Guide Beta Version 1).

Later chapters will make more suggestions about debugging and other programming practices.

## 1.4 Formal And Natural Languages

Natural languages are the languages people speak, such as English, Spanish, and French.

They were not designed by people (although people try to impose some order on them); they evolved naturally.

Formal languages are languages that are designed by people for specific applications. For example, the notation that mathematicians use is a formal language that is particularly good at denoting relationships among numbers and symbols. Chemists use a formal language to represent the chemical structure of molecules. And most importantly:

## Programming Languages Are Formal Languages That Have Been Designed To Express Computations.

Formal languages tend to have strict rules about syntax. For example, 3 + 3 = 6 is a syntactically correct mathematical statement, but 3+ = 3$6 is not. H2O is a syntactically correct chemical formula, but 2Zz is not.

Syntax rules come in two flavors, pertaining to **tokens** and structure. Tokens are the basic elements of the language, such as words, numbers, and chemical elements. One of the problems with 3+ = 3$6 is that $ is not a legal token in mathematics (at least as far as I
know). Similarly, 2Zz is not legal because there is no element with the abbreviation Zz.

The second type of syntax rule pertains to the structure of a statement; that is, the way the tokens are arranged. The statement 3+ = 3 is illegal because even though + and = are legal tokens, you can't have one right after the other. Similarly, in a chemical formula the subscript comes after the element name, not before.

Exercise 1.1. Write a well-structured English sentence with invalid tokens in it. Then write another sentence with all valid tokens but with invalid structure.

When you read a sentence in English or a statement in a formal language, you have to figure out what the structure of the sentence is (although in a natural language you do this subconsciously). This process is called **parsing**.

For example, when you hear the sentence, "The penny dropped," you understand that
"the penny" is the subject and "dropped" is the predicate. Once you have parsed a sentence, you can figure out what it means, or the semantics of the sentence. Assuming that you know what a penny is and what it means to drop, you will understand the general implication of this sentence. Although formal and natural languages have many features in common—tokens, structure, syntax, and semantics—there are some differences:

ambiguity: Natural languages are full of ambiguity, which people deal with by using contextual clues and other information. Formal languages are designed to be nearly or completely unambiguous, which means that any statement has exactly one meaning, regardless of context.
redundancy: In order to make up for ambiguity and reduce misunderstandings, natural
languages employ lots of redundancy. As a result, they are often verbose. Formal languages are less redundant and more concise.
literalness: Natural languages are full of idiom and metaphor.
If I say, "The penny
dropped," there is probably no penny and nothing dropping (this idiom means that someone realized something after a period of confusion). Formal languages mean exactly what they say.
People who grow up speaking a natural language—everyone—often have a hard time adjusting to formal languages. In some ways, the difference between formal and natural language is like the difference between poetry and prose, but more so:

Poetry: Words are used for their sounds as well as for their meaning, and the whole poem
together creates an effect or emotional response. Ambiguity is not only common but often deliberate.
Prose: The literal meaning of words is more important, and the structure contributes more
meaning. Prose is more amenable to analysis than poetry but still often ambiguous.
Programs: The meaning of a computer program is unambiguous and literal, and can be
understood entirely by analysis of the tokens and structure.
Here are some suggestions for reading programs (and other formal languages). First, remember that formal languages are much more dense than natural languages, so it takes longer to read them. Also, the structure is very important, so it is usually not a good idea to read from top to bottom, left to right. Instead, learn to parse the program in your head, identifying the tokens and interpreting the structure. Finally, the details matter. Small errors in spelling and punctuation, which you can get away with in natural languages, can make a big difference in a formal language.

## 1.5 The First Program

Traditionally, the first program you write in a new language is called "Hello, World!" because all it does is display the words "Hello, World!". In Python, it looks like this:
print 'Hello, World!'
This is an example of a **print statement**, which doesn't actually print anything on paper. It displays a value on the screen. In this case, the result is the words Hello, World!

The quotation marks in the program mark the beginning and end of the text to be displayed; they don't appear in the result. In Python 3, the syntax for printing is slightly different:
print('Hello, World!')
The parentheses indicate that print is a function. We'll get to functions in Chapter 3.

For the rest of this book, I'll use the print statement. If you are using Python 3, you will have to translate. But other than that, there are very few differences we have to worry about.

## 1.6 Debugging

It is a good idea to read this book in front of a computer so you can try out the examples as you go. You can run most of the examples in interactive mode, but if you put the code in a script, it is easier to try out variations. Whenever you are experimenting with a new feature, you should try to make mistakes. For example, in the "Hello, world!" program, what happens if you leave out one of the quotation marks? What if you leave out both? What if you spell print wrong?

This kind of experiment helps you remember what you read; it also helps with debugging, because you get to know what the error messages mean. It is better to make mistakes now and on purpose than later and accidentally.

Programming, and especially debugging, sometimes brings out strong emotions. If you are struggling with a difficult bug, you might feel angry, despondent or embarrassed. There is evidence that people naturally respond to computers as if they were people. When they work well, we think of them as teammates, and when they are obstinate or rude, we respond to them the same way we respond to rude, obstinate people (Reeves and Nass, The Media Equation: How People Treat Computers, Television, and New Media Like Real People and Places).

Preparing for these reactions might help you deal with them. One approach is to think of the computer as an employee with certain strengths, like speed and precision, and particular weaknesses, like lack of empathy and inability to grasp the big picture. Your job is to be a good manager: find ways to take advantage of the strengths and mitigate the weaknesses. And find ways to use your emotions to engage with the problem, without letting your reactions interfere with your ability to work effectively. Learning to debug can be frustrating, but it is a valuable skill that is useful for many activities beyond programming. At the end of each chapter there is a debugging section, like this one, with my thoughts about debugging. I hope they help!

## 1.7 Glossary

problem solving: The process of formulating a problem, finding a solution, and expressing the solution.
high-level language: A programming language like Python that is designed to be easy for
humans to read and write.
low-level language: A programming language that is designed to be easy for a computer
to execute; also called "machine language" or "assembly language."
portability: A property of a program that can run on more than one kind of computer.
interpret: To execute a program in a high-level language by translating it one line at a time. compile: To translate a program written in a high-level language into a low-level language
all at once, in preparation for later execution.
source code: A program in a high-level language before being compiled.
object code: The output of the compiler after it translates the program.
executable: Another name for object code that is ready to be executed.
prompt: Characters displayed by the interpreter to indicate that it is ready to take input
from the user.
script: A program stored in a file (usually one that will be interpreted). interactive mode: A way of using the Python interpreter by typing commands and expressions at the prompt.
script mode: A way of using the Python interpreter to read and execute statements in a
script.
program: A set of instructions that specifies a computation. algorithm: A general process for solving a category of problems.
bug: An error in a program. debugging: The process of finding and removing any of the three kinds of programming
errors.
syntax: The structure of a program. syntax error: An error in a program that makes it impossible to parse (and therefore impossible to interpret).
exception: An error that is detected while the program is running. semantics: The meaning of a program.
semantic error: An error in a program that makes it do something other than what the
programmer intended.
natural language: Any one of the languages that people speak that evolved naturally.
formal language: Any one of the languages that people have designed for specific purposes, such as representing mathematical ideas or computer programs; all programming languages are formal languages.
token: One of the basic elements of the syntactic structure of a program, analogous to a
word in a natural language.
parse: To examine a program and analyze the syntactic structure. print statement: An instruction that causes the Python interpreter to display a value on
the screen.

## 1.8 Exercises

Exercise 1.2. *Use a web browser to go to the Python website* http: // python. org . This page contains information about Python and links to Python-related pages, and it gives you the ability to search the Python documentation. For example, if you enter print in the search window, the first link that appears is the documentation of the print statement. At this point, not all of it will make sense to you, but it is good to know where it is. Exercise 1.3. *Start the Python interpreter and type* help() to start the online help utility. Or you can type help('print') *to get information about the* print statement.

If this example doesn't work, you may need to install additional Python documentation or set an environment variable; the details depend on your operating system and version of Python.

Exercise 1.4. Start the Python interpreter and use it as a calculator. Python's syntax for math operations is almost the same as standard mathematical notation. For example, the symbols +, - and
/ denote addition, subtraction and division, as you would expect. The symbol for multiplication is *. If you run a 10 kilometer race in 43 minutes 30 seconds, what is your average time per mile? What is your average speed in miles per hour? (Hint: there are 1.61 kilometers in a mile).

## Chapter 2 Variables, Expressions And Statements 2.1 Values And Types

A **value** is one of the basic things a program works with, like a letter or a number. The values we have seen so far are 1, 2, and 'Hello, World!'.

These values belong to different **types**: 2 is an integer, and 'Hello, World!' is a **string**, so-called because it contains a "string" of letters. You (and the interpreter) can identify strings because they are enclosed in quotation marks. If you are not sure what type a value has, the interpreter can tell you.

>>> type('Hello, World!')
<type 'str'>
>>> type(17)
<type 'int'>

Not surprisingly, strings belong to the type str and integers belong to the type int. Less obviously, numbers with a decimal point belong to a type called float, because these numbers are represented in a format called **floating-point**.

>>> type(3.2)
<type 'float'>
What about values like '17' and '3.2'? They look like numbers, but they are in quotation marks like strings.

>>> type('17')
<type 'str'>
>>> type('3.2')
<type 'str'>

They're strings.

When you type a large integer, you might be tempted to use commas between groups of
three digits, as in 1,000,000. This is not a legal integer in Python, but it is legal:

| message   |   'And now for something completely different' |
|-----------|------------------------------------------------|
| n         |                                       17       |
| pi        |                                        3.14159 |

>>> 1,000,000 (1, 0, 0)
Well, that's not what we expected at all!

Python interprets 1,000,000 as a commaseparated sequence of integers. This is the first example we have seen of a semantic error: the code runs without producing an error message, but it doesn't do the "right" thing.

## 2.2 Variables

One of the most powerful features of a programming language is the ability to manipulate variables. A variable is a name that refers to a value. An **assignment statement** creates new variables and gives them values:
>>> message = 'And now for something completely different'
>>> n = 17 >>> pi = 3.1415926535897932
This example makes three assignments. The first assigns a string to a new variable named message; the second gives the integer 17 to n; the third assigns the (approximate) value of
π to pi.

A common way to represent variables on paper is to write the name with an arrow pointing to the variable's value. This kind of figure is called a **state diagram** because it shows what state each of the variables is in (think of it as the variable's state of mind). Figure 2.1 shows the result of the previous example. The type of a variable is the type of the value it refers to.

>>> type(message)
<type 'str'>
>>> type(n)
<type 'int'>
>>> type(pi)
<type 'float'>

## 2.3 Variable Names And Keywords

Programmers generally choose names for their variables that are meaningful—they document what the variable is used for. Variable names can be arbitrarily long. They can contain both letters and numbers, but they have to begin with a letter. It is legal to use uppercase letters, but it is a good idea to begin variable names with a lowercase letter (you'll see why later).

The underscore character, _, can appear in a name. It is often used in names with multiple words, such as my_name or airspeed_of_unladen_swallow.

If you give a variable an illegal name, you get a syntax error:

>>> 76trombones = 'big parade'
SyntaxError: invalid syntax
>>> more@ = 1000000
SyntaxError: invalid syntax
>>> class = 'Advanced Theoretical Zymurgy'
SyntaxError: invalid syntax

76trombones is illegal because it does not begin with a letter. more@ is illegal because it
contains an illegal character, @. But what's wrong with class?

It turns out that class is one of Python's keywords. The interpreter uses keywords to
recognize the structure of the program, and they cannot be used as variable names.

Python 2 has 31 keywords:

and
          del
                    from
                              not
                                        while
as
          elif
                    global
                              or
                                        with
assert
          else
                    if
                              pass
                                        yield
break
          except
                    import
                              print
class
          exec
                    in
                              raise
continue
         finally
                   is
                              return
def
          for
                    lambda
                              try

In Python 3, exec is no longer a keyword, but nonlocal is.

You might want to keep this list handy. If the interpreter complains about one of your
variable names and you don't know why, see if it is on this list.

## 2.4 Operators And Operands

Operators are special symbols that represent computations like addition and multiplication. The values the operator is applied to are called **operands**.

The operators +, -, *, / and ** perform addition, subtraction, multiplication, division and exponentiation, as in the following examples:

20+32
        hour-1
                 hour*60+minute
                                  minute/60
                                              5**2
                                                     (5+9)*(15-7)

In some other languages, ^ is used for exponentiation, but in Python it is a bitwise operator called XOR. I won't cover bitwise operators in this book, but you can read about them at http://wiki.python.org/moin/BitwiseOperators. In Python 2, the division operator might not do what you expect:
>>> minute = 59 >>> minute/60 0
The value of minute is 59, and in conventional arithmetic 59 divided by 60 is 0.98333, not 0.

The reason for the discrepancy is that Python is performing **floor division**. When both of the operands are integers, the result is also an integer; floor division chops off the fraction part, so in this example it rounds down to zero.

In Python 3, the result of this division is a float. The new operator // performs floor division. If either of the operands is a floating-point number, Python performs floating-point division, and the result is a float:
>>> minute/60.0 0.98333333333333328

## 2.5 Expressions And Statements

An **expression** is a combination of values, variables, and operators. A value all by itself is considered an expression, and so is a variable, so the following are all legal expressions
(assuming that the variable x has been assigned a value):
17 x x + 17
A **statement** is a unit of code that the Python interpreter can execute. We have seen two kinds of statement: print and assignment. Technically an expression is also a statement, but it is probably simpler to think of them as different things. The important difference is that an expression has a value; a statement does not.

## 2.6 Interactive Mode And Script Mode

One of the benefits of working with an interpreted language is that you can test bits of code in interactive mode before you put them in a script. But there are differences between interactive mode and script mode that can be confusing. For example, if you are using Python as a calculator, you might type
>>> miles = 26.2 >>> miles * 1.61 42.182
The first line assigns a value to miles, but it has no visible effect. The second line is an expression, so the interpreter evaluates it and displays the result. So we learn that a marathon is about 42 kilometers. But if you type the same code into a script and run it, you get no output at all. In script mode an expression, all by itself, has no visible effect. Python actually evaluates the expression, but it doesn't display the value unless you tell it to:
miles = 26.2 print miles * 1.61
This behavior can be confusing at first. A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute. For example, the script print 1 x = 2 print x produces the output
1 2
The assignment statement produces no output.

Exercise 2.1. Type the following statements in the Python interpreter to see what they do:
5 x = 5 x + 1
Now put the same statements into a script and run it. What is the output? Modify the script by transforming each expression into a print statement and then run it again.

## 2.7 Order Of Operations

When more than one operator appears in an expression, the order of evaluation depends on the **rules of precedence**. For mathematical operators, Python follows mathematical convention. The acronym **PEMDAS** is a useful way to remember the rules:

- Parentheses have the highest precedence and can be used to force an expression to
evaluate in the order you want. Since expressions in parentheses are evaluated first, 2 * (3-1) is 4, and (1+1)**(5-2) is 8. You can also use parentheses to make an
expression easier to read, as in (minute * 100) / 60, even if it doesn't change the result.
- Exponentiation has the next highest precedence, so 2**1+1 is 3, not 4, and 3*1**3 is
3, not 27.
- Multiplication and Division have the same precedence, which is higher than
Addition and Subtraction, which also have the same precedence. So 2*3-1 is 5, not
4, and 6+4/2 is 8, not 5.
- Operators with the same precedence are evaluated from left to right (except exponentiation). So in the expression degrees / 2 * pi, the division happens first and the result is multiplied by pi. To divide by 2π, you can use parentheses or write degrees
/ 2 / pi.
I don't work very hard to remember rules of precedence for other operators. If I can't tell by looking at the expression, I use parentheses to make it obvious.

## 2.8 String Operations

In general, you can't perform mathematical operations on strings, even if the strings look like numbers, so the following are illegal:
'2'-'1'
'eggs'/'easy'
'third'*'a charm'
The + operator works with strings, but it might not do what you expect: it performs concatenation, which means joining the strings by linking them end-to-end. For example:
first = 'throat'
second = 'warbler'
print first + second The output of this program is throatwarbler.

The * operator also works on strings; it performs repetition. For example, 'Spam'*3 is 'SpamSpamSpam'. If one of the operands is a string, the other has to be an integer.

This use of + and * makes sense by analogy with addition and multiplication. Just as 4*3
is equivalent to 4+4+4, we expect 'Spam'*3 to be the same as 'Spam'+'Spam'+'Spam', and it is. On the other hand, there is a significant way in which string concatenation and repetition are different from integer addition and multiplication. Can you think of a property that addition has that string concatenation does not?

## 2.9 Comments

As programs get bigger and more complicated, they get more difficult to read. Formal languages are dense, and it is often difficult to look at a piece of code and figure out what it is doing, or why. For this reason, it is a good idea to add notes to your programs to explain in natural language what the program is doing. These notes are called **comments**, and they start with the # symbol:
# compute the percentage of the hour that has elapsed percentage = (minute * 100) / 60
In this case, the comment appears on a line by itself. You can also put comments at the end of a line:
percentage = (minute * 100) / 60
# percentage of an hour Everything from the # to the end of the line is ignored—it has no effect on the program.

Comments are most useful when they document non-obvious features of the code. It is reasonable to assume that the reader can figure out *what* the code does; it is much more useful to explain *why*.

This comment is redundant with the code and useless:
v = 5
# assign 5 to v This comment contains useful information that is not in the code:
v = 5
# velocity in meters/second.

Good variable names can reduce the need for comments, but long names can make complex expressions hard to read, so there is a tradeoff.

## 2.10 Debugging

At this point the syntax error you are most likely to make is an illegal variable name, like class and yield, which are keywords, or odd~job and US$, which contain illegal characters.

If you put a space in a variable name, Python thinks it is two operands without an operator:
>>> bad name = 5 SyntaxError: invalid syntax For syntax errors, the error messages don't help much. The most common messages are SyntaxError:
invalid syntax and SyntaxError:
invalid token, neither of which is very informative. The runtime error you are most likely to make is a "use before def;" that is, trying to use a variable before you have assigned a value. This can happen if you spell a variable name wrong:
>>> principal = 327.68 >>> interest = principle * rate NameError: name 'principle' is not defined Variables names are case sensitive, so LaTeX is not the same as latex.

At this point the most likely cause of a semantic error is the order of operations. For example, to evaluate
1
2π, you might be tempted to write
>>> 1.0 / 2.0 * pi But the division happens first, so you would get π/2, which is not the same thing! There is no way for Python to know what you meant to write, so in this case you don't get an error message; you just get the wrong answer.

## 2.11 Glossary

value: One of the basic units of data, like a number or string, that a program manipulates.

type: A category of values. The types we have seen so far are integers (type int), floatingpoint numbers (type float), and strings (type str).
integer: A type that represents whole numbers. floating-point: A type that represents numbers with fractional parts.
string: A type that represents sequences of characters. variable: A name that refers to a value.
statement: A section of code that represents a command or action. So far, the statements
we have seen are assignments and print statements.
assignment: A statement that assigns a value to a variable. state diagram: A graphical representation of a set of variables and the values they refer to. keyword: A reserved word that is used by the compiler to parse a program; you cannot
use keywords like if, def, and while as variable names.
operator: A special symbol that represents a simple computation like addition, multiplication, or string concatenation.
operand: One of the values on which an operator operates.

floor division: The operation that divides two numbers and chops off the fraction part.
expression: A combination of variables, operators, and values that represents a single result value.
evaluate: To simplify an expression by performing the operations in order to yield a single
value.
rules of precedence: The set of rules governing the order in which expressions involving
multiple operators and operands are evaluated.
concatenate: To join two operands end-to-end. comment: Information in a program that is meant for other programmers (or anyone reading the source code) and has no effect on the execution of the program.
Exercise 2.2. Assume that we execute the following assignment statements:
width = 17 height = 12.0
delimiter = '.'
For each of the following expressions, write the value of the expression and the type (of the value of the expression).

1. width/2 2. width/2.0 3. height/3 4. 1 + 2 * 5 5. delimiter * 5
Use the Python interpreter to check your answers. Exercise 2.3. Practice using the Python interpreter as a calculator:

1. The volume of a sphere with radius r is 4
3πr3. What is the volume of a sphere with radius 5?
Hint: 392.7 is wrong!
2. Suppose the cover price of a book is $24.95, but bookstores get a 40% discount. Shipping costs
$3 for the first copy and 75 cents for each additional copy. What is the total wholesale cost for 60 copies?
3. If I leave my house at 6:52 am and run 1 mile at an easy pace (8:15 per mile), then 3 miles at
tempo (7:12 per mile) and 1 mile at easy pace again, what time do I get home for breakfast?

## Chapter 3 Functions 3.1 Function Calls

In the context of programming, a **function** is a named sequence of statements that performs a computation. When you define a function, you specify the name and the sequence of statements. Later, you can "call" the function by name. We have already seen one example of a **function call**:
>>> type(32)
<type 'int'>
The name of the function is type. The expression in parentheses is called the **argument** of the function. The result, for this function, is the type of the argument. It is common to say that a function "takes" an argument and "returns" a result. The result is called the **return value**.

## 3.2 Type Conversion Functions

Python provides built-in functions that convert values from one type to another. The int function takes any value and converts it to an integer, if it can, or complains otherwise:

>>> int('32')
32
>>> int('Hello')
ValueError: invalid literal for int(): Hello

int can convert floating-point values to integers, but it doesn't round off; it chops off the
fraction part:

>>> int(3.99999)
3
>>> int(-2.3)
-2

float converts integers and strings to floating-point numbers:

>>> float(32)
32.0
>>> float('3.14159')
3.14159

Finally, str converts its argument to a string:

>>> str(32)
'32'
>>> str(3.14159)
'3.14159'

## 3.3 Math Functions

Python has a math module that provides most of the familiar mathematical functions. A
module is a file that contains a collection of related functions.

Before we can use the module, we have to import it:
>>> import math This statement creates a **module object** named math. If you print the module object, you get some information about it:
>>> print math
<module 'math' (built-in)>
The module object contains the functions and variables defined in the module. To access one of the functions, you have to specify the name of the module and the name of the function, separated by a dot (also known as a period). This format is called **dot notation**.

>>> ratio = signal_power / noise_power >>> decibels = 10 * math.log10(ratio) >>> radians = 0.7 >>> height = math.sin(radians)
The first example uses log10 to compute a signal-to-noise ratio in decibels (assuming that signal_power and noise_power are defined). The math module also provides log, which computes logarithms base e.

The second example finds the sine of radians. The name of the variable is a hint that sin and the other trigonometric functions (cos, tan, etc.) take arguments in radians. To convert from degrees to radians, divide by 360 and multiply by 2π:

>>> degrees = 45
>>> radians = degrees / 360.0 * 2 * math.pi
>>> math.sin(radians)
0.707106781187

The expression math.pi gets the variable pi from the math module. The value of this variable is an approximation of π, accurate to about 15 digits. If you know your trigonometry, you can check the previous result by comparing it to the square root of two divided by two:
>>> math.sqrt(2) / 2.0 0.707106781187

## 3.4 Composition

So far, we have looked at the elements of a program—variables, expressions, and statements—in isolation, without talking about how to combine them. One of the most useful features of programming languages is their ability to take small building blocks and **compose** them. For example, the argument of a function can be any kind of expression, including arithmetic operators:
x = math.sin(degrees / 360.0 * 2 * math.pi)
And even function calls:
x = math.exp(math.log(x+1))
Almost anywhere you can put a value, you can put an arbitrary expression, with one exception: the left side of an assignment statement has to be a variable name. Any other expression on the left side is a syntax error (we will see exceptions to this rule later).

>>> minutes = hours * 60
                                         # right
>>> hours * 60 = minutes
                                         # wrong!
SyntaxError: can't assign to operator

## 3.5 Adding New Functions

So far, we have only been using the functions that come with Python, but it is also possible to add new functions. A **function definition** specifies the name of a new function and the sequence of statements that execute when the function is called. Here is an example:
def print_lyrics():
print "I'm a lumberjack, and I'm okay."
print "I sleep all night and I work all day."
def is a keyword that indicates that this is a function definition. The name of the function is print_lyrics. The rules for function names are the same as for variable names: letters, numbers and some punctuation marks are legal, but the first character can't be a number.

You can't use a keyword as the name of a function, and you should avoid having a variable and a function with the same name. The empty parentheses after the name indicate that this function doesn't take any arguments.

The first line of the function definition is called the **header**; the rest is called the **body**.

The header has to end with a colon and the body has to be indented. By convention, the indentation is always four spaces (see Section 3.14). The body can contain any number of statements. The strings in the print statements are enclosed in double quotes. Single quotes and double quotes do the same thing; most people use single quotes except in cases like this where a single quote (which is also an apostrophe) appears in the string.

If you type a function definition in interactive mode, the interpreter prints ellipses (...) to let you know that the definition isn't complete:

>>> def print_lyrics():
...
        print "I'm a lumberjack, and I'm okay."
...
        print "I sleep all night and I work all day."
...

To end the function, you have to enter an empty line (this is not necessary in a script). Defining a function creates a variable with the same name.

>>> print print_lyrics
<function print_lyrics at 0xb7e99e9c>
>>> type(print_lyrics)
<type 'function'>

The value of print_lyrics is a function object, which has type 'function'.

The syntax for calling the new function is the same as for built-in functions:

>>> print_lyrics()
I'm a lumberjack, and I'm okay.
I sleep all night and I work all day.

Once you have defined a function, you can use it inside another function. For example, to
repeat the previous refrain, we could write a function called repeat_lyrics:

def repeat_lyrics():
    print_lyrics()
    print_lyrics()

And then call repeat_lyrics:

>>> repeat_lyrics()
I'm a lumberjack, and I'm okay.
I sleep all night and I work all day.
I'm a lumberjack, and I'm okay.
I sleep all night and I work all day.

But that's not really how the song goes.

## 3.6 Definitions And Uses

Pulling together the code fragments from the previous section, the whole program looks like this:
def print_lyrics():
print "I'm a lumberjack, and I'm okay."
print "I sleep all night and I work all day."
def repeat_lyrics():
print_lyrics() print_lyrics()
repeat_lyrics()
This program contains two function definitions: print_lyrics and repeat_lyrics. Function definitions get executed just like other statements, but the effect is to create function objects. The statements inside the function do not get executed until the function is called, and the function definition generates no output.

As you might expect, you have to create a function before you can execute it. In other words, the function definition has to be executed before the first time it is called.

Exercise 3.1. Move the last line of this program to the top, so the function call appears before the definitions. Run the program and see what error message you get.

Exercise 3.2. *Move the function call back to the bottom and move the definition of* print_lyrics after the definition of repeat_lyrics. What happens when you run this program?

## 3.7 Flow Of Execution

In order to ensure that a function is defined before its first use, you have to know the order in which statements are executed, which is called the **flow of execution**.

Execution always begins at the first statement of the program. Statements are executed one at a time, in order from top to bottom. Function definitions do not alter the flow of execution of the program, but remember that statements inside the function are not executed until the function is called. A function call is like a detour in the flow of execution. Instead of going to the next statement, the flow jumps to the body of the function, executes all the statements there, and then comes back to pick up where it left off. That sounds simple enough, until you remember that one function can call another. While in the middle of one function, the program might have to execute the statements in another function. But while executing that new function, the program might have to execute yet another function! Fortunately, Python is good at keeping track of where it is, so each time a function completes, the program picks up where it left off in the function that called it. When it gets to the end of the program, it terminates. What's the moral of this sordid tale? When you read a program, you don't always want to read from top to bottom. Sometimes it makes more sense if you follow the flow of execution.

## 3.8 Parameters And Arguments

Some of the built-in functions we have seen require arguments. For example, when you call math.sin you pass a number as an argument. Some functions take more than one argument: math.pow takes two, the base and the exponent.

Inside the function, the arguments are assigned to variables called **parameters**. Here is an example of a user-defined function that takes an argument:
def print_twice(bruce):
print bruce print bruce This function assigns the argument to a parameter named bruce. When the function is called, it prints the value of the parameter (whatever it is) twice. This function works with any value that can be printed.

>>> print_twice('Spam')
Spam
Spam
>>> print_twice(17)
17
17
>>> print_twice(math.pi)
3.14159265359
3.14159265359

The same rules of composition that apply to built-in functions also apply to user-defined
functions, so we can use any kind of expression as an argument for print_twice:

>>> print_twice('Spam '*4)
Spam Spam Spam Spam
Spam Spam Spam Spam
>>> print_twice(math.cos(math.pi))
-1.0
-1.0

The argument is evaluated before the function is called, so in the examples the expressions
'Spam '*4 and math.cos(math.pi) are only evaluated once.

You can also use a variable as an argument:

>>> michael = 'Eric, the half a bee.'
>>> print_twice(michael)
Eric, the half a bee.
Eric, the half a bee.

The name of the variable we pass as an argument (michael) has nothing to do with the
name of the parameter (bruce). It doesn't matter what the value was called back home (in
the caller); here in print_twice, we call everybody bruce.

## 3.9 Variables And Parameters Are Local

When you create a variable inside a function, it is **local**, which means that it only exists inside the function. For example:
def cat_twice(part1, part2):
cat = part1 + part2 print_twice(cat)
This function takes two arguments, concatenates them, and prints the result twice. Here is an example that uses it:

>>> line1 = 'Bing tiddle '
>>> line2 = 'tiddle bang.'
>>> cat_twice(line1, line2)
Bing tiddle tiddle bang.
Bing tiddle tiddle bang.

When cat_twice terminates, the variable cat is destroyed. If we try to print it, we get an
exception:

>>> print cat
NameError: name 'cat' is not defined

| line1       | 'Bing tiddle '             |
|-------------|----------------------------|
| <module>    |                            |
| line2       | 'tiddle bang.'             |
| part1       | 'Bing tiddle '             |
| cat_twice   | part2                      |
| cat         | 'Bing tiddle tiddle bang.' |
| print_twice | bruce                      |

Parameters are also local. For example, outside print_twice, there is no such thing as bruce.

## 3.10 Stack Diagrams

To keep track of which variables can be used where, it is sometimes useful to draw a stack diagram. Like state diagrams, stack diagrams show the value of each variable, but they also show the function each variable belongs to.

Each function is represented by a **frame**. A frame is a box with the name of a function beside it and the parameters and variables of the function inside it. The stack diagram for the previous example is shown in Figure 3.1. The frames are arranged in a stack that indicates which function called which, and so on. In this example, print_twice was called by cat_twice, and cat_twice was called by __main__, which is a special name for the topmost frame. When you create a variable outside of any function, it belongs to __main__. Each parameter refers to the same value as its corresponding argument. So, part1 has the same value as line1, part2 has the same value as line2, and bruce has the same value as cat.

If an error occurs during a function call, Python prints the name of the function, and the name of the function that called it, and the name of the function that called *that*, all the way back to __main__.

For example, if you try to access cat from within print_twice, you get a NameError:

Traceback (innermost last):
  File "test.py", line 13, in __main__
    cat_twice(line1, line2)
  File "test.py", line 5, in cat_twice
    print_twice(cat)
  File "test.py", line 9, in print_twice
    print cat
NameError: name 'cat' is not defined

This list of functions is called a traceback. It tells you what program file the error occurred
in, and what line, and what functions were executing at the time. It also shows the line of
code that caused the error.

The order of the functions in the traceback is the same as the order of the frames in the stack diagram. The function that is currently running is at the bottom.

## 3.11 Fruitful Functions And Void Functions

Some of the functions we are using, such as the math functions, yield results; for lack of a better name, I call them **fruitful functions**. Other functions, like print_twice, perform an action but don't return a value. They are called **void functions**.

When you call a fruitful function, you almost always want to do something with the result; for example, you might assign it to a variable or use it as part of an expression:
x = math.cos(radians)
golden = (math.sqrt(5) + 1) / 2
When you call a function in interactive mode, Python displays the result:
>>> math.sqrt(5) 2.2360679774997898
But in a script, if you call a fruitful function all by itself, the return value is lost forever!

math.sqrt(5)
This script computes the square root of 5, but since it doesn't store or display the result, it is not very useful. Void functions might display something on the screen or have some other effect, but they don't have a return value. If you try to assign the result to a variable, you get a special value called None.

>>> result = print_twice('Bing')
Bing Bing >>> print result None The value None is not the same as the string 'None'. It is a special value that has its own type:
>>> print type(None)
<type 'NoneType'>
The functions we have written so far are all void. We will start writing fruitful functions in a few chapters.

## 3.12 Why Functions?

It may not be clear why it is worth the trouble to divide a program into functions. There are several reasons:

- Creating a new function gives you an opportunity to name a group of statements,
which makes your program easier to read and debug.
- Functions can make a program smaller by eliminating repetitive code. Later, if you
make a change, you only have to make it in one place.
- Dividing a long program into functions allows you to debug the parts one at a time
and then assemble them into a working whole.
- Well-designed functions are often useful for many programs. Once you write and
debug one, you can reuse it.

## 3.13 Importing With From

Python provides two ways to import modules; we have already seen one:

>>> import math
>>> print math
<module 'math' (built-in)>
>>> print math.pi
3.14159265359

If you import math, you get a module object named math. The module object contains constants like pi and functions like sin and exp.

But if you try to access pi directly, you get an error.

>>> print pi
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'pi' is not defined

As an alternative, you can import an object from a module like this:

>>> from math import pi

Now you can access pi directly, without dot notation.

>>> print pi
3.14159265359

Or you can use the star operator to import everything from the module:

>>> from math import *
>>> cos(pi)
-1.0

The advantage of importing everything from the math module is that your code can be
more concise. The disadvantage is that there might be conflicts between names defined in
different modules, or between a name from a module and one of your variables.

## 3.14 Debugging

If you are using a text editor to write your scripts, you might run into problems with spaces and tabs. The best way to avoid these problems is to use spaces exclusively (no tabs). Most text editors that know about Python do this by default, but some don't. Tabs and spaces are usually invisible, which makes them hard to debug, so try to find an editor that manages indentation for you. Also, don't forget to save your program before you run it. Some development environments do this automatically, but some don't. In that case the program you are looking at in the text editor is not the same as the program you are running.

Debugging can take a long time if you keep running the same, incorrect, program over and over! Make sure that the code you are looking at is the code you are running. If you're not sure, put something like print 'hello' at the beginning of the program and run it again. If you don't see hello, you're not running the right program!

## 3.15 Glossary

function: A named sequence of statements that performs some useful operation. Functions may or may not take arguments and may or may not produce a result.
function definition: A statement that creates a new function, specifying its name, parameters, and the statements it executes.
function object: A value created by a function definition. The name of the function is a
variable that refers to a function object.
header: The first line of a function definition.
body: The sequence of statements inside a function definition. parameter: A name used inside a function to refer to the value passed as an argument. function call: A statement that executes a function. It consists of the function name followed by an argument list.
argument: A value provided to a function when the function is called. This value is assigned to the corresponding parameter in the function.
local variable: A variable defined inside a function. A local variable can only be used
inside its function.
return value: The result of a function. If a function call is used as an expression, the return
value is the value of the expression.
fruitful function: A function that returns a value.
void function: A function that doesn't return a value.
module: A file that contains a collection of related functions and other definitions.
import statement: A statement that reads a module file and creates a module object. module object: A value created by an import statement that provides access to the values
defined in a module.
dot notation: The syntax for calling a function in another module by specifying the module name followed by a dot (period) and the function name.
composition: Using an expression as part of a larger expression, or a statement as part of
a larger statement.
flow of execution: The order in which statements are executed during a program run.

stack diagram: A graphical representation of a stack of functions, their variables, and the
values they refer to.
frame: A box in a stack diagram that represents a function call. It contains the local variables and parameters of the function.
traceback: A list of the functions that are executing, printed when an exception occurs.

## 3.16 Exercises

Exercise 3.3. *Python provides a built-in function called* len that returns the length of a string, so the value of len('allen') is 5.

Write a function named right_justify that takes a string named s as a parameter and prints the string with enough leading spaces so that the last letter of the string is in column 70 of the display.

>>> right_justify('allen')
                                                                 allen
Exercise 3.4. A function object is a value you can assign to a variable or pass as an argument. For
example, do_twice is a function that takes a function object as an argument and calls it twice:

def do_twice(f):
f() f()
Here's an example that uses do_twice *to call a function named* print_spam twice.

def print_spam():
print 'spam'

## Do_Twice(Print_Spam)

1. Type this example into a script and test it. 2. Modify do_twice so that it takes two arguments, a function object and a value, and calls the
function twice, passing the value as an argument.
3. Write a more general version of print_spam*, called* print_twice, that takes a string as a
parameter and prints it twice.
4. Use the modified version of do_twice *to call* print_twice *twice, passing* 'spam' as an
argument.
5. Define a new function called do_four that takes a function object and a value and calls the
function four times, passing the value as a parameter. There should be only two statements in the body of this function, not four.
Solution: http: // thinkpython. com/ code/ do_ four. py .

Exercise 3.5. This exercise can be done using only the statements and other features we have learned so far.

1. Write a function that draws a grid like the following:
+ - - - - + - - - - + |
|
|
|
|
|
|
|
|
|
|
|
+ - - - - + - - - - + |
|
|
|
|
|
|
|
|
|
|
|
+ - - - - + - - - - +
Hint: to print more than one value on a line, you can print a comma-separated sequence:
print '+', '-'
If the sequence ends with a comma, Python leaves the line unfinished, so the value printed next appears on the same line.

print '+', print '-'
The output of these statements is '+ -'.

A print statement all by itself ends the current line and goes to the next line.

2. Write a function that draws a similar grid with four rows and four columns.
Solution: http: // thinkpython. com/ code/ grid. py . Credit: This exercise is based on an exercise in Oualline, Practical C Programming, Third Edition, O'Reilly Media, 1997.

## Chapter 4 Case Study: Interface Design

Code examples from this chapter are available from http://thinkpython.com/code/
polygon.py.

## 4.1 Turtleworld

To accompany this book, I have written a package called Swampy. You can download Swampy from http://thinkpython.com/swampy; follow the instructions there to install Swampy on your system.

A **package** is a collection of modules; one of the modules in Swampy is TurtleWorld, which provides a set of functions for drawing lines by steering turtles around the screen. If Swampy is installed as a package on your system, you can import TurtleWorld like this:
from swampy.TurtleWorld import *
If you downloaded the Swampy modules but did not install them as a package, you can either work in the directory that contains the Swampy files, or add that directory to Python's search path. Then you can import TurtleWorld like this:
from TurtleWorld import *
The details of the installation process and setting Python's search path depend on your system, so rather than include those details here, I will try to maintain current information for several systems at http://thinkpython.com/swampy Create a file named mypolygon.py and type in the following code:
from swampy.TurtleWorld import * world = TurtleWorld() bob = Turtle() print bob wait_for_user()
The first line imports everything from the TurtleWorld module in the swampy package.

The next lines create a TurtleWorld assigned to world and a Turtle assigned to bob. Printing bob yields something like:
<TurtleWorld.Turtle instance at 0xb7bfbf4c>
This means that bob refers to an **instance** of a Turtle as defined in module TurtleWorld.

In this context, "instance" means a member of a set; this Turtle is one of the set of possible Turtles. wait_for_user tells TurtleWorld to wait for the user to do something, although in this case there's not much for the user to do except close the window. TurtleWorld provides several turtle-steering functions: fd and bk for forward and backward, and lt and rt for left and right turns. Also, each Turtle is holding a pen, which is either down or up; if the pen is down, the Turtle leaves a trail when it moves. The functions pu and pd stand for "pen up" and "pen down."
To draw a right angle, add these lines to the program (after creating bob and before calling wait_for_user):
fd(bob, 100) lt(bob) fd(bob, 100)
The first line tells bob to take 100 steps forward. The second line tells him to turn left. When you run this program, you should see bob move east and then north, leaving two line segments behind. Now modify the program to draw a square. Don't go on until you've got it working!

## 4.2 Simple Repetition

Chances are you wrote something like this (leaving out the code that creates TurtleWorld and waits for the user):
fd(bob, 100)
lt(bob) fd(bob, 100) lt(bob) fd(bob, 100) lt(bob) fd(bob, 100)
We can do the same thing more concisely with a for statement. Add this example to mypolygon.py and run it again:
for i in range(4):
print 'Hello!'
You should see something like this:
Hello! Hello! Hello!

Hello!

This is the simplest use of the for statement; we will see more later. But that should be enough to let you rewrite your square-drawing program. Don't go on until you do. Here is a for statement that draws a square:
for i in range(4):
fd(bob, 100) lt(bob)
The syntax of a for statement is similar to a function definition. It has a header that ends with a colon and an indented body. The body can contain any number of statements.

A for statement is sometimes called a **loop** because the flow of execution runs through the body and then loops back to the top. In this case, it runs the body four times. This version is actually a little different from the previous square-drawing code because it makes another turn after drawing the last side of the square. The extra turn takes a little more time, but it simplifies the code if we do the same thing every time through the loop. This version also has the effect of leaving the turtle back in the starting position, facing in the starting direction.

## 4.3 Exercises

The following is a series of exercises using TurtleWorld. They are meant to be fun, but they have a point, too. While you are working on them, think about what the point is. The following sections have solutions to the exercises, so don't look until you have finished (or at least tried).

1. Write a function called square that takes a parameter named t, which is a turtle. It
should use the turtle to draw a square.
Write a function call that passes bob as an argument to square, and then run the
program again.
2. Add another parameter, named length, to square. Modify the body so length of the
sides is length, and then modify the function call to provide a second argument. Run the program again. Test your program with a range of values for length.
3. The functions lt and rt make 90-degree turns by default, but you can provide a
second argument that specifies the number of degrees. For example, lt(bob, 45) turns bob 45 degrees to the left.
Make a copy of square and change the name to polygon. Add another parameter named n and modify the body so it draws an n-sided regular polygon. Hint: The exterior angles of an n-sided regular polygon are 360/n degrees.

4. Write a function called circle that takes a turtle, t, and radius, r, as parameters and
that draws an approximate circle by invoking polygon with an appropriate length
and number of sides. Test your function with a range of values of r.
Hint: figure out the circumference of the circle and make sure that length * n =
circumference. Another hint:
if bob is too slow for you, you can speed him up by changing bob.delay, which is the time between moves, in seconds. bob.delay = 0.01 ought to get him moving.

5. Make a more general version of circle called arc that takes an additional parameter
angle, which determines what fraction of a circle to draw. angle is in units of degrees,
so when angle=360, arc should draw a complete circle.

## 4.4 Encapsulation

The first exercise asks you to put your square-drawing code into a function definition and then call the function, passing the turtle as a parameter. Here is a solution:

def square(t):
    for i in range(4):
        fd(t, 100)
        lt(t)

square(bob)

The innermost statements, fd and lt are indented twice to show that they are inside the
for loop, which is inside the function definition. The next line, square(bob), is flush with
the left margin, so that is the end of both the for loop and the function definition. Inside the function, t refers to the same turtle bob refers to, so lt(t) has the same effect as
lt(bob). So why not call the parameter bob? The idea is that t can be any turtle, not just
bob, so you could create a second turtle and pass it as an argument to square:

ray = Turtle()
square(ray)

Wrapping a piece of code up in a function is called encapsulation. One of the benefits of
encapsulation is that it attaches a name to the code, which serves as a kind of documenta-
tion. Another advantage is that if you re-use the code, it is more concise to call a function
twice than to copy and paste the body!

## 4.5 Generalization

The next step is to add a length parameter to square. Here is a solution:

def square(t, length):
    for i in range(4):
        fd(t, length)
        lt(t)

square(bob, 100)
Adding a parameter to a function is called **generalization** because it makes the function more general: in the previous version, the square is always the same size; in this version it can be any size.

The next step is also a generalization. Instead of drawing squares, polygon draws regular polygons with any number of sides. Here is a solution :rule

def polygon(t, n, length):
    angle = 360.0 / n
    for i in range(n):
        fd(t, length)
        lt(t, angle)

polygon(bob, 7, 70)

This draws a 7-sided polygon with side length 70. If you have more than a few numeric
arguments, it is easy to forget what they are, or what order they should be in. It is legal,
and sometimes helpful, to include the names of the parameters in the argument list:

polygon(bob, n=7, length=70)

These are called keyword arguments because they include the parameter names as "key-
words" (not to be confused with Python keywords like while and def).

This syntax makes the program more readable. It is also a reminder about how arguments
and parameters work: when you call a function, the arguments are assigned to the param-
eters.

## 4.6 Interface Design

The next step is to write circle, which takes a radius, r, as a parameter. Here is a simple solution that uses polygon to draw a 50-sided polygon:

def circle(t, r):
    circumference = 2 * math.pi * r
    n = 50
    length = circumference / n
    polygon(t, n, length)

The first line computes the circumference of a circle with radius r using the formula 2πr.
Since we use math.pi, we have to import math. By convention, import statements are
usually at the beginning of the script.

n is the number of line segments in our approximation of a circle, so length is the length of each segment. Thus, polygon draws a 50-sides polygon that approximates a circle with radius r. One limitation of this solution is that n is a constant, which means that for very big circles, the line segments are too long, and for small circles, we waste time drawing very small segments. One solution would be to generalize the function by taking n as a parameter.

This would give the user (whoever calls circle) more control, but the interface would be less clean.

The **interface** of a function is a summary of how it is used: what are the parameters? What does the function do? And what is the return value? An interface is "clean" if it is "as simple as possible, but not simpler. (Einstein)" In this example, r belongs in the interface because it specifies the circle to be drawn. n is less appropriate because it pertains to the details of *how* the circle should be rendered.

Rather than clutter up the interface, it is better to choose an appropriate value of n depending on circumference:

def circle(t, r):
    circumference = 2 * math.pi * r
    n = int(circumference / 3) + 1
    length = circumference / n
    polygon(t, n, length)

Now the number of segments is (approximately) circumference/3, so the length of each
segment is (approximately) 3, which is small enough that the circles look good, but big
enough to be efficient, and appropriate for any size circle.

## 4.7 Refactoring

When I wrote circle, I was able to re-use polygon because a many-sided polygon is a good approximation of a circle. But arc is not as cooperative; we can't use polygon or circle to draw an arc. One alternative is to start with a copy of polygon and transform it into arc. The result might look like this:

def arc(t, r, angle):
    arc_length = 2 * math.pi * r * angle / 360
    n = int(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = float(angle) / n

for i in range(n):
    fd(t, step_length)
    lt(t, step_angle)

The second half of this function looks like polygon, but we can't re-use polygon without
changing the interface. We could generalize polygon to take an angle as a third argument,
but then polygon would no longer be an appropriate name! Instead, let's call the more
general function polyline:

def polyline(t, n, length, angle):
    for i in range(n):
        fd(t, length)
        lt(t, angle)

Now we can rewrite polygon and arc to use polyline:

def polygon(t, n, length):
angle = 360.0 / n polyline(t, n, length, angle)

def arc(t, r, angle):
    arc_length = 2 * math.pi * r * angle / 360
    n = int(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = float(angle) / n
    polyline(t, n, step_length, step_angle)

Finally, we can rewrite circle to use arc:
def circle(t, r):
arc(t, r, 360)
This process—rearranging a program to improve function interfaces and facilitate code reuse—is called **refactoring**. In this case, we noticed that there was similar code in arc and polygon, so we "factored it out" into polyline. If we had planned ahead, we might have written polyline first and avoided refactoring, but often you don't know enough at the beginning of a project to design all the interfaces. Once you start coding, you understand the problem better. Sometimes refactoring is a sign that you have learned something.

## 4.8 A Development Plan

A **development plan** is a process for writing programs. The process we used in this case study is "encapsulation and generalization." The steps of this process are:

1. Start by writing a small program with no function definitions. 2. Once you get the program working, encapsulate it in a function and give it a name. 3. Generalize the function by adding appropriate parameters. 4. Repeat steps 1–3 until you have a set of working functions. Copy and paste working
code to avoid retyping (and re-debugging).
5. Look for opportunities to improve the program by refactoring. For example, if you
have similar code in several places, consider factoring it into an appropriately general function.
This process has some drawbacks—we will see alternatives later—but it can be useful if you don't know ahead of time how to divide the program into functions. This approach lets you design as you go along.

## 4.9 Docstring

A **docstring** is a string at the beginning of a function that explains the interface ("doc" is short for "documentation"). Here is an example:

def polyline(t, n, length, angle):
    """Draws n line segments with the given length and
    angle (in degrees) between them.
                                      t is a turtle.
    """
    for i in range(n):
        fd(t, length)
        lt(t, angle)

This docstring is a triple-quoted string, also known as a multiline string because the triple quotes allow the string to span more than one line. It is terse, but it contains the essential information someone would need to use this function. It explains concisely what the function does (without getting into the details of how it does it). It explains what effect each parameter has on the behavior of the function and what type each parameter should be (if it is not obvious). Writing this kind of documentation is an important part of interface design.

A welldesigned interface should be simple to explain; if you are having a hard time explaining one of your functions, that might be a sign that the interface could be improved.

## 4.10 Debugging

An interface is like a contract between a function and a caller. The caller agrees to provide certain parameters and the function agrees to do certain work. For example, polyline requires four arguments: t has to be a Turtle; n is the number of line segments, so it has to be an integer; length should be a positive number; and angle has to be a number, which is understood to be in degrees.

These requirements are called **preconditions** because they are supposed to be true before the function starts executing. Conversely, conditions at the end of the function are postconditions. Postconditions include the intended effect of the function (like drawing line segments) and any side effects (like moving the Turtle or making other changes in the World). Preconditions are the responsibility of the caller. If the caller violates a (properly documented!) precondition and the function doesn't work correctly, the bug is in the caller, not the function.

## 4.11 Glossary

instance: A member of a set. The TurtleWorld in this chapter is a member of the set of
TurtleWorlds.
loop: A part of a program that can execute repeatedly. encapsulation: The process of transforming a sequence of statements into a function definition.
generalization: The process of replacing something unnecessarily specific (like a number)
with something appropriately general (like a variable or parameter).
keyword argument: An argument that includes the name of the parameter as a "keyword."
interface: A description of how to use a function, including the name and descriptions of
the arguments and return value.
refactoring: The process of modifying a working program to improve function interfaces
and other qualities of the code.
development plan: A process for writing programs. docstring: A string that appears in a function definition to document the function's interface.

precondition: A requirement that should be satisfied by the caller before a function starts. postcondition: A requirement that should be satisfied by the function before it ends.

Exercise 4.1. *Download the code in this chapter from* http: // thinkpython. com/ code/ polygon. py .

1. Write appropriate docstrings for polygon, arc *and* circle.
2. Draw a stack diagram that shows the state of the program while executing circle(bob,
radius)*. You can do the arithmetic by hand or add* print statements to the code.
3. The version of arc in Section 4.7 is not very accurate because the linear approximation of the
circle is always outside the true circle. As a result, the turtle ends up a few units away from the correct destination. My solution shows a way to reduce the effect of this error. Read the code and see if it makes sense to you. If you draw a diagram, you might see how it works.
Exercise 4.2. Write an appropriately general set of functions that can draw flowers as in Figure 4.1.

Solution:
               http: // thinkpython. com/ code/ flower. py ,
                                                                       also
                                                                              requires
                                                                                          http:
// thinkpython. com/ code/ polygon. py .
Exercise 4.3. Write an appropriately general set of functions that can draw shapes as in Figure 4.2.

Solution: http: // thinkpython. com/ code/ pie. py .

Exercise 4.4. The letters of the alphabet can be constructed from a moderate number of basic elements, like vertical and horizontal lines and a few curves. Design a font that can be drawn with a minimal number of basic elements and then write functions that draw letters of the alphabet.

You should write one function for each letter, with names draw_a, draw_b, etc., and put your functions in a file named letters.py*. You can download a "turtle typewriter" from* http: // thinkpython. com/ code/ typewriter. py to help you test your code.

Solution:
               http: // thinkpython. com/ code/ letters. py ,
                                                                       also
                                                                              requires
                                                                                          http:
// thinkpython. com/ code/ polygon. py .
Exercise 4.5. Read about spirals at http: // en. wikipedia. org/ wiki/ Spiral ; then write
a program that draws an Archimedian spiral (or one of the other kinds).
                                                                               Solution: http:
// thinkpython. com/ code/ spiral. py .

## Chapter 5 Conditionals And Recursion 5.1 Modulus Operator

The **modulus operator** works on integers and yields the remainder when the first operand is divided by the second. In Python, the modulus operator is a percent sign (%). The syntax is the same as for other operators:
>>> quotient = 7 / 3 >>> print quotient 2 >>> remainder = 7 % 3 >>> print remainder 1
So 7 divided by 3 is 2 with 1 left over. The modulus operator turns out to be surprisingly useful. For example, you can check whether one number is divisible by another—if x % y is zero, then x is divisible by y.

Also, you can extract the right-most digit or digits from a number. For example, x % 10 yields the right-most digit of x (in base 10). Similarly x % 100 yields the last two digits.

## 5.2 Boolean Expressions

A **boolean expression** is an expression that is either true or false. The following examples use the operator ==, which compares two operands and produces True if they are equal and False otherwise:
>>> 5 == 5 True >>> 5 == 6 False True and False are special values that belong to the type bool; they are not strings:
>>> type(True)
<type 'bool'>
>>> type(False)
<type 'bool'>
The == operator is one of the **relational operators**; the others are:
x != y
# x is not equal to y x > y
# x is greater than y x < y
# x is less than y x >= y
# x is greater than or equal to y x <= y
# x is less than or equal to y Although these operations are probably familiar to you, the Python symbols are different from the mathematical symbols. A common error is to use a single equal sign (=) instead of a double equal sign (==). Remember that = is an assignment operator and == is a relational operator. There is no such thing as =< or =>.

## 5.3 Logical Operators

There are three **logical operators**: and, or, and not. The semantics (meaning) of these operators is similar to their meaning in English. For example, x > 0 and x < 10 is true only if x is greater than 0 *and* less than 10. n%2 == 0 or n%3 == 0 is true if *either* of the conditions is true, that is, if the number is divisible by 2 or 3.

Finally, the not operator negates a boolean expression, so not (x > y) is true if x > y is false, that is, if x is less than or equal to y. Strictly speaking, the operands of the logical operators should be boolean expressions, but Python is not very strict. Any nonzero number is interpreted as "true."
>>> 17 and True True This flexibility can be useful, but there are some subtleties to it that might be confusing. You might want to avoid it (unless you know what you are doing).

## 5.4 Conditional Execution

In order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly. **Conditional statements** give us this ability. The simplest form is the if statement:
if x > 0:
print 'x is positive'
The boolean expression after if is called the **condition**. If it is true, then the indented statement gets executed. If not, nothing happens. if statements have the same structure as function definitions: a header followed by an indented body. Statements like this are called **compound statements**.

There is no limit on the number of statements that can appear in the body, but there has to be at least one. Occasionally, it is useful to have a body with no statements (usually as a place keeper for code you haven't written yet). In that case, you can use the pass statement, which does nothing.

if x < 0:
pass
# need to handle negative values!

## 5.5 Alternative Execution

A second form of the if statement is **alternative execution**, in which there are two possibilities and the condition determines which one gets executed. The syntax looks like this:

if x%2 == 0:
    print 'x is even'
else:
    print 'x is odd'

If the remainder when x is divided by 2 is 0, then we know that x is even, and the program
displays a message to that effect. If the condition is false, the second set of statements is
executed. Since the condition must be true or false, exactly one of the alternatives will be
executed. The alternatives are called branches, because they are branches in the flow of
execution.

## 5.6 Chained Conditionals

Sometimes there are more than two possibilities and we need more than two branches.

One way to express a computation like that is a **chained conditional**:

if x < y:
    print 'x is less than y'
elif x > y:
    print 'x is greater than y'
else:
    print 'x and y are equal'

elif is an abbreviation of "else if." Again, exactly one branch will be executed. There is no limit on the number of elif statements. If there is an else clause, it has to be at the end, but there doesn't have to be one.

if choice == 'a':
    draw_a()
elif choice == 'b':
    draw_b()
elif choice == 'c':
    draw_c()

Each condition is checked in order. If the first is false, the next is checked, and so on. If one
of them is true, the corresponding branch executes, and the statement ends. Even if more
than one condition is true, only the first true branch executes.

## 5.7 Nested Conditionals

One conditional can also be nested within another. We could have written the trichotomy example like this:

if x == y:
    print 'x and y are equal'
else:
    if x < y:

print 'x is less than y'
else:
print 'x is greater than y'
The outer conditional contains two branches. The first branch contains a simple statement. The second branch contains another if statement, which has two branches of its own.

Those two branches are both simple statements, although they could have been conditional statements as well.

Although the indentation of the statements makes the structure apparent, nested conditionals become difficult to read very quickly. In general, it is a good idea to avoid them when you can. Logical operators often provide a way to simplify nested conditional statements. For example, we can rewrite the following code using a single conditional:
if 0 < x:
if x < 10:
print 'x is a positive single-digit number.'
The print statement is executed only if we make it past both conditionals, so we can get the same effect with the and operator:
if 0 < x and x < 10:
print 'x is a positive single-digit number.'

## 5.8 Recursion

It is legal for one function to call another; it is also legal for a function to call itself. It may not be obvious why that is a good thing, but it turns out to be one of the most magical things a program can do. For example, look at the following function:

def countdown(n):
    if n <= 0:
        print 'Blastoff!'
    else:
        print n
        countdown(n-1)

If n is 0 or negative, it outputs the word, "Blastoff!" Otherwise, it outputs n and then calls
a function named countdown—itself—passing n-1 as an argument.

What happens if we call this function like this?

>>> countdown(3)

The execution of countdown begins with n=3, and since n is greater than 0, it outputs the
value 3, and then calls itself...

The execution of countdown begins with n=2, and since n is greater than 0, it
outputs the value 2, and then calls itself...

The execution of countdown begins with n=1, and since n is greater
than 0, it outputs the value 1, and then calls itself...

The execution of countdown begins with n=0, and since n is
not greater than 0, it outputs the word, "Blastoff!" and then
returns.

The countdown that got n=1 returns.

The countdown that got n=2 returns.

The countdown that got n=3 returns. And then you're back in __main__. So, the total output looks like this:

3
2
1
Blastoff!

A function that calls itself is recursive; the process is called recursion.

As another example, we can write a function that prints a string n times.

def print_n(s, n):
    if n <= 0:
        return
    print s
    print_n(s, n-1)

If n <= 0 the return statement exits the function. The flow of execution immediately re-
turns to the caller, and the remaining lines of the function are not executed.

The rest of the function is similar to countdown: if n is greater than 0, it displays s and then calls itself to display s n − 1 additional times. So the number of lines of output is 1 + (n -
1), which adds up to n.

For simple examples like this, it is probably easier to use a for loop. But we will see examples later that are hard to write with a for loop and easy to write with recursion, so it is good to start early.

## 5.9 Stack Diagrams For Recursive Functions

In Section 3.10, we used a stack diagram to represent the state of a program during a function call. The same kind of diagram can help interpret a recursive function.

Every time a function gets called, Python creates a new function frame, which contains the function's local variables and parameters. For a recursive function, there might be more than one frame on the stack at the same time.

As usual, the top of the stack is the frame for __main__. It is empty because we did not create any variables in __main__ or pass any arguments to it.

The four countdown frames have different values for the parameter n. The bottom of the stack, where n=0, is called the **base case**. It does not make a recursive call, so there are no more frames.

Exercise 5.1. *Draw a stack diagram for* print_n *called with* s = 'Hello' *and* n=2.

Exercise 5.2. *Write a function called* do_n that takes a function object and a number, n, as arguments, and that calls the given function n times.

<module>
countdown
n
3
countdown
n
2
countdown
n
1
countdown
n
0

## 5.10 Infinite Recursion

If a recursion never reaches a base case, it goes on making recursive calls forever, and the program never terminates. This is known as **infinite recursion**, and it is generally not a good idea. Here is a minimal program with an infinite recursion:
def recurse():
recurse()
In most programming environments, a program with infinite recursion does not really run forever. Python reports an error message when the maximum recursion depth is reached:

  File "<stdin>", line 2, in recurse
  File "<stdin>", line 2, in recurse
  File "<stdin>", line 2, in recurse
                  .
                  .
                  .
  File "<stdin>", line 2, in recurse
RuntimeError: Maximum recursion depth exceeded

This traceback is a little bigger than the one we saw in the previous chapter. When the error
occurs, there are 1000 recurse frames on the stack!

## 5.11 Keyboard Input

The programs we have written so far are a bit rude in the sense that they accept no input from the user. They just do the same thing every time. Python 2 provides a built-in function called raw_input that gets input from the keyboard.

In Python 3, it is called input. When this function is called, the program stops and waits for the user to type something. When the user presses Return or Enter, the program resumes and raw_input returns what the user typed as a string.

>>> text = raw_input()
What are you waiting for?
>>> print text
What are you waiting for?

Before getting input from the user, it is a good idea to print a prompt telling the user what to input. raw_input can take a prompt as an argument:

>>> name = raw_input('What...is your name?\n')
What...is your name?
Arthur, King of the Britons!
>>> print name
Arthur, King of the Britons!

The sequence \n at the end of the prompt represents a newline, which is a special character
that causes a line break. That's why the user's input appears below the prompt.

If you expect the user to type an integer, you can try to convert the return value to int:

>>> prompt = 'What...is the airspeed velocity of an unladen swallow?\n'
>>> speed = raw_input(prompt)
What...is the airspeed velocity of an unladen swallow?
17
>>> int(speed)
17

But if the user types something other than a string of digits, you get an error:

>>> speed = raw_input(prompt)
What...is the airspeed velocity of an unladen swallow?
What do you mean, an African or a European swallow?
>>> int(speed)
ValueError: invalid literal for int() with base 10

We will see how to handle this kind of error later.

## 5.12 Debugging

The traceback Python displays when an error occurs contains a lot of information, but it can be overwhelming, especially when there are many frames on the stack. The most useful parts are usually:

- What kind of error it was, and
- Where it occurred.
Syntax errors are usually easy to find, but there are a few gotchas. Whitespace errors can be tricky because spaces and tabs are invisible and we are used to ignoring them.

>>> x = 5
>>>
    y = 6
  File "<stdin>", line 1
    y = 6
    ^
IndentationError: unexpected indent

In this example, the problem is that the second line is indented by one space. But the error
message points to y, which is misleading. In general, error messages indicate where the
problem was discovered, but the actual error might be earlier in the code, sometimes on a
previous line.

The same is true of runtime errors. Suppose you are trying to compute a signal-to-noise ratio in decibels. The formula is SNRdb = 10 log10(Psignal/P*noise*). In Python, you might write something like this:

import math
signal_power = 9
noise_power = 10
ratio = signal_power / noise_power
decibels = 10 * math.log10(ratio)
print decibels

But when you run it in Python 2, you get an error message.

Traceback (most recent call last):
  File "snr.py", line 5, in ?
    decibels = 10 * math.log10(ratio)
ValueError: math domain error

The error message indicates line 5, but there is nothing wrong with that line. To find the real error, it might be useful to print the value of ratio, which turns out to be 0. The problem is in line 4, because dividing two integers does floor division. The solution is to represent signal power and noise power with floating-point values. In general, error messages tell you where the problem was discovered, but that is often not where it was caused. In Python 3, this example does not cause an error; the division operator performs floatingpoint division even with integer operands.

## 5.13 Glossary

modulus operator: An operator, denoted with a percent sign (%), that works on integers
and yields the remainder when one number is divided by another.
boolean expression: An expression whose value is either True or False.
relational operator: One of the operators that compares its operands: ==, !=, >, <, >=, and
<=.
logical operator: One of the operators that combines boolean expressions: and, or, and
not.
conditional statement: A statement that controls the flow of execution depending on some
condition.
condition: The boolean expression in a conditional statement that determines which
branch is executed.
compound statement: A statement that consists of a header and a body. The header ends
with a colon (:). The body is indented relative to the header.
branch: One of the alternative sequences of statements in a conditional statement. chained conditional: A conditional statement with a series of alternative branches.
nested conditional: A conditional statement that appears in one of the branches of another
conditional statement.
recursion: The process of calling the function that is currently executing. base case: A conditional branch in a recursive function that does not make a recursive call. infinite recursion: A recursion that doesn't have a base case, or never reaches it. Eventually, an infinite recursion causes a runtime error.

## 5.14 Exercises

Exercise 5.3. Fermat's Last Theorem says that there are no positive integers a, b, and c such that

an + bn = cn
for any values of n greater than 2.

1. Write a function named check_fermat that takes four parameters—a, b, c and n—and that
checks to see if Fermat's theorem holds. If n is greater than 2 and it turns out to be true that
an + bn = cn
the program should print, "Holy smokes, Fermat was wrong!" Otherwise the program should print, "No, that doesn't work."

2. Write a function that prompts the user to input values for a, b, c and n, converts them to
integers, and uses check_fermat to check whether they violate Fermat's theorem.
Exercise 5.4. If you are given three sticks, you may or may not be able to arrange them in a triangle. For example, if one of the sticks is 12 inches long and the other two are one inch long, it is clear that you will not be able to get the short sticks to meet in the middle. For any three lengths, there is a simple test to see if it is possible to form a triangle:
If any of the three lengths is greater than the sum of the other two, then you cannot form a triangle. Otherwise, you can. (If the sum of two lengths equals the third, they form what is called a "degenerate" triangle.)

1. Write a function named is_triangle that takes three integers as arguments, and that prints
either "Yes" or "No," depending on whether you can or cannot form a triangle from sticks with the given lengths.
2. Write a function that prompts the user to input three stick lengths, converts them to integers,
and uses is_triangle to check whether sticks with the given lengths can form a triangle.
The following exercises use TurtleWorld from Chapter 4:
Exercise 5.5. Read the following function and see if you can figure out what it does. Then run it (see the examples in Chapter 4).

def draw(t, length, n):
    if n == 0:
        return
    angle = 50
    fd(t, length*n)
    lt(t, angle)
    draw(t, length, n-1)
    rt(t, 2*angle)
    draw(t, length, n-1)
    lt(t, angle)
    bk(t, length*n)
Exercise 5.6. The Koch curve is a fractal that looks something like Figure 5.2. To draw a Koch
curve with length x, all you have to do is

1. Draw a Koch curve with length x/3.
2. Turn left 60 degrees.
3. Draw a Koch curve with length x/3.
4. Turn right 120 degrees.
5. Draw a Koch curve with length x/3.
6. Turn left 60 degrees.
7. Draw a Koch curve with length x/3.
The exception is if x is less than 3: in that case, you can just draw a straight line with length x.

1. Write a function called koch that takes a turtle and a length as parameters, and that uses the
turtle to draw a Koch curve with the given length.
2. Write a function called snowflake that draws three Koch curves to make the outline of a
snowflake.
Solution: http: // thinkpython. com/ code/ koch. py .

3. The Koch curve can be generalized in several ways. See http: // en. wikipedia. org/
wiki/ Koch_ snowflake for examples and implement your favorite.

## Chapter 6 Fruitful Functions 6.1 Return Values

Some of the built-in functions we have used, such as the math functions, produce results. Calling the function generates a value, which we usually assign to a variable or use as part of an expression.

e = math.exp(1.0) height = radius * math.sin(radians)
All of the functions we have written so far are void; they print something or move turtles around, but their return value is None.

In this chapter, we are (finally) going to write fruitful functions. The first example is area, which returns the area of a circle with the given radius:
def area(radius):
temp = math.pi * radius**2 return temp We have seen the return statement before, but in a fruitful function the return statement includes an expression. This statement means: "Return immediately from this function and use the following expression as a return value." The expression can be arbitrarily complicated, so we could have written this function more concisely:
def area(radius):
return math.pi * radius**2
On the other hand, **temporary variables** like temp often make debugging easier.

Sometimes it is useful to have multiple return statements, one in each branch of a conditional:

def absolute_value(x):
    if x < 0:
        return -x
    else:
        return x

Since these return statements are in an alternative conditional, only one will be executed.

As soon as a return statement executes, the function terminates without executing any subsequent statements. Code that appears after a return statement, or any other place the flow of execution can never reach, is called **dead code**.

In a fruitful function, it is a good idea to ensure that every possible path through the program hits a return statement. For example:

def absolute_value(x):
    if x < 0:
        return -x
    if x > 0:
        return x

This function is incorrect because if x happens to be 0, neither condition is true, and the
function ends without hitting a return statement. If the flow of execution gets to the end
of a function, the return value is None, which is not the absolute value of 0.

>>> print absolute_value(0)
None

By the way, Python provides a built-in function called abs that computes absolute values.
Exercise 6.1. Write a compare function that returns 1 if x > y, 0 if x == y, and -1 if x < y.

## 6.2 Incremental Development

As you write larger functions, you might find yourself spending more time debugging.

To deal with increasingly complex programs, you might want to try a process called incremental development. The goal of incremental development is to avoid long debugging sessions by adding and testing only a small amount of code at a time. As an example, suppose you want to find the distance between two points, given by the coordinates (x1, y1) and (x2, y2). By the Pythagorean theorem, the distance is:

$$\text{distance}=\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}$$

The first step is to consider what a distance function should look like in Python. In other words, what are the inputs (parameters) and what is the output (return value)?
In this case, the inputs are two points, which you can represent using four numbers. The return value is the distance, which is a floating-point value. Already you can write an outline of the function:
def distance(x1, y1, x2, y2):
return 0.0
Obviously, this version doesn't compute distances; it always returns zero. But it is syntactically correct, and it runs, which means that you can test it before you make it more complicated. To test the new function, call it with sample arguments:
>>> distance(1, 2, 4, 6) 0.0
I chose these values so that the horizontal distance is 3 and the vertical distance is 4; that way, the result is 5 (the hypotenuse of a 3-4-5 triangle). When testing a function, it is useful to know the right answer. At this point we have confirmed that the function is syntactically correct, and we can start adding code to the body. A reasonable next step is to find the differences x2 − x1 and y2 − y1. The next version stores those values in temporary variables and prints them.

def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    print 'dx is', dx
    print 'dy is', dy
    return 0.0

If the function is working, it should display 'dx is 3' and 'dy is 4'. If so, we know that the function is getting the right arguments and performing the first computation correctly. If not, there are only a few lines to check. Next we compute the sum of squares of dx and dy:

def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    print 'dsquared is: ', dsquared
    return 0.0

Again, you would run the program at this stage and check the output (which should be
25). Finally, you can use math.sqrt to compute and return the result:

def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    result = math.sqrt(dsquared)
    return result

If that works correctly, you are done. Otherwise, you might want to print the value of
result before the return statement.

The final version of the function doesn't display anything when it runs; it only returns
a value. The print statements we wrote are useful for debugging, but once you get the
function working, you should remove them. Code like that is called scaffolding because it
is helpful for building the program but is not part of the final product.

When you start out, you should add only a line or two of code at a time. As you gain more
experience, you might find yourself writing and debugging bigger chunks. Either way,
incremental development can save you a lot of debugging time.

The key aspects of the process are:

1. Start with a working program and make small incremental changes. At any point, if
there is an error, you should have a good idea where it is.
2. Use temporary variables to hold intermediate values so you can display and check
them.
3. Once the program is working, you might want to remove some of the scaffolding or
consolidate multiple statements into compound expressions, but only if it does not make the program difficult to read.
Exercise 6.2. *Use incremental development to write a function called* hypotenuse that returns the length of the hypotenuse of a right triangle given the lengths of the two legs as arguments. Record each stage of the development process as you go.

## 6.3 Composition

As you should expect by now, you can call one function from within another. This ability is called **composition**.

As an example, we'll write a function that takes two points, the center of the circle and a point on the perimeter, and computes the area of the circle. Assume that the center point is stored in the variables xc and yc, and the perimeter point is in xp and yp. The first step is to find the radius of the circle, which is the distance between the two points. We just wrote a function, distance, that does that:
radius = distance(xc, yc, xp, yp)
The next step is to find the area of a circle with that radius; we just wrote that, too:
result = area(radius)
Encapsulating these steps in a function, we get:

def circle_area(xc, yc, xp, yp):
    radius = distance(xc, yc, xp, yp)
    result = area(radius)
    return result

The temporary variables radius and result are useful for development and debugging,
but once the program is working, we can make it more concise by composing the function
calls:

def circle_area(xc, yc, xp, yp):
    return area(distance(xc, yc, xp, yp))

## 6.4 Boolean Functions

Functions can return booleans, which is often convenient for hiding complicated tests inside functions. For example:

def is_divisible(x, y):
    if x % y == 0:
        return True
    else:
        return False

It is common to give boolean functions names that sound like yes/no questions; is_divisible returns either True or False to indicate whether x is divisible by y. Here is an example:

>>>
      is_divisible(6, 4)
False
>>>
      is_divisible(6, 3)
True

The result of the == operator is a boolean, so we can write the function more concisely by returning it directly:
def is_divisible(x, y):
return x % y == 0
Boolean functions are often used in conditional statements:
if is_divisible(x, y):
print 'x is divisible by y'
It might be tempting to write something like:
if is_divisible(x, y) == True:
print 'x is divisible by y'
But the extra comparison is unnecessary.

Exercise 6.3. *Write a function* is_between(x, y, z) *that returns* True if x ≤ y ≤ *z or* False otherwise.

## 6.5 More Recursion

We have only covered a small subset of Python, but you might be interested to know that this subset is a *complete* programming language, which means that anything that can be computed can be expressed in this language. Any program ever written could be rewritten using only the language features you have learned so far (actually, you would need a few commands to control devices like the keyboard, mouse, disks, etc., but that's all). Proving that claim is a nontrivial exercise first accomplished by Alan Turing, one of the first computer scientists (some would argue that he was a mathematician, but a lot of early computer scientists started as mathematicians). Accordingly, it is known as the Turing Thesis. For a more complete (and accurate) discussion of the Turing Thesis, I recommend Michael Sipser's book *Introduction to the Theory of Computation*.

To give you an idea of what you can do with the tools you have learned so far, we'll evaluate a few recursively defined mathematical functions. A recursive definition is similar to a circular definition, in the sense that the definition contains a reference to the thing being defined. A truly circular definition is not very useful:
vorpal: An adjective used to describe something that is vorpal.

If you saw that definition in the dictionary, you might be annoyed. On the other hand, if you looked up the definition of the factorial function, denoted with the symbol !, you might get something like this:

0! = 1 n! = n(n − 1)!
This definition says that the factorial of 0 is 1, and the factorial of any other value, n, is n multiplied by the factorial of n − 1.

So 3! is 3 times 2!, which is 2 times 1!, which is 1 times 0!. Putting it all together, 3! equals 3 times 2 times 1 times 1, which is 6. If you can write a recursive definition of something, you can usually write a Python program to evaluate it. The first step is to decide what the parameters should be. In this case it should be clear that factorial takes an integer:
def factorial(n):
If the argument happens to be 0, all we have to do is return 1:
def factorial(n):
if n == 0:
return 1
Otherwise, and this is the interesting part, we have to make a recursive call to find the factorial of n − 1 and then multiply it by n:

def factorial(n):
    if n == 0:
        return 1
    else:
        recurse = factorial(n-1)
        result = n * recurse
        return result

The flow of execution for this program is similar to the flow of countdown in Section 5.8. If
we call factorial with the value 3:

Since 3 is not 0, we take the second branch and calculate the factorial of n-1...

Since 2 is not 0, we take the second branch and calculate the factorial of n-1...

Since 1 is not 0, we take the second branch and calculate the factorial
of n-1...

Since 0 is 0, we take the first branch and return 1 without
making any more recursive calls.

The return value (1) is multiplied by n, which is 1, and the result is
returned.

The return value (1) is multiplied by n, which is 2, and the result is returned.

The return value (2) is multiplied by n, which is 3, and the result, 6, becomes the return value of the function call that started the whole process. Figure 6.1 shows what the stack diagram looks like for this sequence of function calls. The return values are shown being passed back up the stack. In each frame, the return value is the value of result, which is the product of n and recurse. In the last frame, the local variables recurse and result do not exist, because the branch that creates them does not execute.

6
factorial
n
3
recurse
2
6
result
2
factorial
n
2
recurse
1
result
2
1
factorial
n
1
recurse
1
1
result
factorial
1
n
0

## 6.6 Leap Of Faith

Following the flow of execution is one way to read programs, but it can quickly become labyrinthine. An alternative is what I call the "leap of faith." When you come to a function call, instead of following the flow of execution, you *assume* that the function works correctly and returns the right result. In fact, you are already practicing this leap of faith when you use built-in functions. When you call math.cos or math.exp, you don't examine the bodies of those functions. You just assume that they work because the people who wrote the built-in functions were good programmers. The same is true when you call one of your own functions. For example, in Section 6.4, we wrote a function called is_divisible that determines whether one number is divisible by another. Once we have convinced ourselves that this function is correct—by examining the code and testing—we can use the function without looking at the body again. The same is true of recursive programs. When you get to the recursive call, instead of following the flow of execution, you should assume that the recursive call works (yields the correct result) and then ask yourself, "Assuming that I can find the factorial of n − 1, can I compute the factorial of n?" In this case, it is clear that you can, by multiplying by n.

Of course, it's a bit strange to assume that the function works correctly when you haven't finished writing it, but that's why it's called a leap of faith!

## 6.7 One More Example

After factorial, the most common example of a recursively defined mathematical function is fibonacci, which has the following definition (see http://en.wikipedia.org/
wiki/Fibonacci_number):

fibonacci(0) = 0 fibonacci(1) = 1 fibonacci($n$) = fibonacci($n-1$) + fibonacci($n-2$)
Translated into Python, it looks like this:

def fibonacci (n):
    if n == 0:
        return 0
    elif
          n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

If you try to follow the flow of execution here, even for fairly small values of n, your head explodes. But according to the leap of faith, if you assume that the two recursive calls work correctly, then it is clear that you get the right result by adding them together.

## 6.8 Checking Types

What happens if we call factorial and give it 1.5 as an argument?

>>> factorial(1.5) RuntimeError: Maximum recursion depth exceeded It looks like an infinite recursion. But how can that be? There is a base case—when n == 0.

But if n is not an integer, we can *miss* the base case and recurse forever.

In the first recursive call, the value of n is 0.5. In the next, it is -0.5. From there, it gets smaller (more negative), but it will never be 0. We have two choices.

We can try to generalize the factorial function to work with floating-point numbers, or we can make factorial check the type of its argument. The first option is called the gamma function and it's a little beyond the scope of this book. So we'll go for the second. We can use the built-in function isinstance to verify the type of the argument. While we're at it, we can also make sure the argument is positive:

def factorial (n):
    if not isinstance(n, int):
        print 'Factorial is only defined for integers.'
        return None
    elif n < 0:
        print 'Factorial is not defined for negative integers.'
        return None
    elif n == 0:
        return 1
    else:
        return n * factorial(n-1)

The first base case handles nonintegers; the second catches negative integers. In both cases,
the program prints an error message and returns None to indicate that something went
wrong:

>>> factorial('fred')
Factorial is only defined for integers.
None
>>> factorial(-2)
Factorial is not defined for negative integers.
None

If we get past both checks, then we know that n is positive or zero, so we can prove that the recursion terminates.

This program demonstrates a pattern sometimes called a **guardian**. The first two conditionals act as guardians, protecting the code that follows from values that might cause an error. The guardians make it possible to prove the correctness of the code. In Section 11.3 we will see a more flexible alternative to printing an error message: raising an exception.

## 6.9 Debugging

Breaking a large program into smaller functions creates natural checkpoints for debugging.

If a function is not working, there are three possibilities to consider:

- There is something wrong with the arguments the function is getting; a precondition
is violated.
- There is something wrong with the function; a postcondition is violated. - There is something wrong with the return value or the way it is being used.
To rule out the first possibility, you can add a print statement at the beginning of the function and display the values of the parameters (and maybe their types). Or you can write code that checks the preconditions explicitly. If the parameters look good, add a print statement before each return statement that displays the return value. If possible, check the result by hand. Consider calling the function with values that make it easy to check the result (as in Section 6.2). If the function seems to be working, look at the function call to make sure the return value is being used correctly (or used at all!).

Adding print statements at the beginning and end of a function can help make the flow of execution more visible. For example, here is a version of factorial with print statements:

def factorial(n):
    space = ' ' * (4 * n)
    print space, 'factorial', n
    if n == 0:
        print space, 'returning 1'
        return 1
    else:
        recurse = factorial(n-1)
        result = n * recurse
        print space, 'returning', result
        return result

space is a string of space characters that controls the indentation of the output. Here is the
result of factorial(5) :

                    factorial 5
                factorial 4
            factorial 3
        factorial 2
    factorial 1
factorial 0
returning 1
    returning 1
        returning 2
            returning 6
                returning 24
                    returning 120

If you are confused about the flow of execution, this kind of output can be helpful. It takes
some time to develop effective scaffolding, but a little bit of scaffolding can save a lot of
debugging.

## 6.10 Glossary

temporary variable: A variable used to store an intermediate value in a complex calculation.
dead code: Part of a program that can never be executed, often because it appears after a
return statement.
None: A special value returned by functions that have no return statement or a return statement without an argument.
incremental development: A program development plan intended to avoid debugging by
adding and testing only a small amount of code at a time.
scaffolding: Code that is used during program development but is not part of the final
version.
guardian: A programming pattern that uses a conditional statement to check for and handle circumstances that might cause an error.

## 6.11 Exercises

Exercise 6.4. Draw a stack diagram for the following program. What does the program print? Solution: http: // thinkpython. com/ code/ stack_ diagram. py .

def b(z):
    prod = a(z, z)
    print z, prod
    return prod

def a(x, y):
    x = x + 1
    return x * y

def c(x, y, z):
    total = x + y + z
    square = b(total)**2
    return square

x = 1
y = x + 1
print c(x, y+3, x+y)
Exercise 6.5. The Ackermann function, A(m, n), is defined:

$$A(m,n)=\begin{cases}n+1&\text{if $m=0$}\\ A(m-1,1)&\text{if $m>0$ and $n=0$}\\ A(m-1,A(m,n-1))&\text{if $m>0$ and $n>0$.}\end{cases}$$

_See [http://en.wikipedia.org/wiki/Ackermann_function](http://en.wikipedia.org/wiki/Ackermann_function). Write a function named_ack that evaluates Ackermann's function. Use your function to evaluate_ack(3, 4)_, which should be 125. What happens for larger values of_m _and_n_? Solution:_[http://thinkpython.com/code/ackermann.py._](http://thinkpython.com/code/ackermann.py._)

**Exercise 6.6**.: _A palindrome is a word that is spelled the same backward and forward, like "noon" and "redivider". Recursively, a word is a palindrome if the first and last letters are the same and the middle is a palindrome._
The following are functions that take a string argument and return the first, last, and middle letters:
def first(word):
return word[0]
def last(word):
return word[-1]
def middle(word):
return word[1:-1]
We'll see how they work in Chapter 8.

1. Type these functions into a file named palindrome.py and test them out. What happens if
you call middle with a string with two letters? One letter? What about the empty string,
which is written '' and contains no letters?
2. Write a function called is_palindrome *that takes a string argument and returns* True if it
is a palindrome and False *otherwise. Remember that you can use the built-in function* len to check the length of a string.
Solution: http: // thinkpython. com/ code/ palindrome_ soln. py .

Exercise 6.7. A number, a, is a power of b if it is divisible by b and a/b is a power of b. Write a function called is_power that takes parameters a and b *and returns* True if a is a power of b. Note: you will have to think about the base case. Exercise 6.8. The greatest common divisor (GCD) of a and b is the largest number that divides both of them with no remainder. One way to find the GCD of two numbers is based on the observation that if r is the remainder when a is divided by b, then gcd(a, b) = gcd(b, r)*. As a base case, we can use gcd*(a, 0) = a.

Write a function called gcd that takes parameters a and b and returns their greatest common divisor.

Credit: This exercise is based on an example from Abelson and Sussman's Structure and Interpretation of Computer Programs.

## Chapter 7 Iteration 7.1 Multiple Assignment

As you may have discovered, it is legal to make more than one assignment to the same variable. A new assignment makes an existing variable refer to a new value (and stop referring to the old value).

bruce = 5
print bruce,
bruce = 7
print bruce

The output of this program is 5 7, because the first time bruce is printed, its value is 5,
and the second time, its value is 7. The comma at the end of the first print statement
suppresses the newline, which is why both outputs appear on the same line.

With multiple assignment it is especially important to distinguish between an assignment operation and a statement of equality. Because Python uses the equal sign (=) for assignment, it is tempting to interpret a statement like a = b as a statement of equality. It is not!

First, equality is a symmetric relation and assignment is not. For example, in mathematics, if a = 7 then 7 = a. But in Python, the statement a = 7 is legal and 7 = a is not.

Furthermore, in mathematics, a statement of equality is either true or false, for all time. If a = b now, then a will always equal b. In Python, an assignment statement can make two variables equal, but they don't have to stay that way:

a = 5
b = a
        # a and b are now equal
a = 3
        # a and b are no longer equal

The third line changes the value of a but does not change the value of b, so they are no
longer equal.

Although multiple assignment is frequently helpful, you should use it with caution. If the
values of variables change frequently, it can make the code difficult to read and debug.

## 7.2 Updating Variables

One of the most common forms of multiple assignment is an **update**, where the new value of the variable depends on the old.

x = x+1
This means "get the current value of x, add one, and then update x with the new value."
If you try to update a variable that doesn't exist, you get an error, because Python evaluates the right side before it assigns a value to x:
>>> x = x+1
NameError: name 'x' is not defined Before you can update a variable, you have to **initialize** it, usually with a simple assignment:
>>> x = 0 >>> x = x+1
Updating a variable by adding 1 is called an **increment**; subtracting 1 is called a **decrement**.

## 7.3 The While Statement

Computers are often used to automate repetitive tasks. Repeating identical or similar tasks without making errors is something that computers do well and people do poorly. We have seen two programs, countdown and print_n, that use recursion to perform repetition, which is also called **iteration**. Because iteration is so common, Python provides several language features to make it easier. One is the for statement we saw in Section 4.2.

We'll get back to that later. Another is the while statement. Here is a version of countdown that uses a while statement:

def countdown(n):
    while n > 0:
        print n
        n = n-1
    print 'Blastoff!'

You can almost read the while statement as if it were English. It means, "While n is greater
than 0, display the value of n and then reduce the value of n by 1. When you get to 0,
display the word Blastoff!"

More formally, here is the flow of execution for a while statement:

1. Evaluate the condition, yielding True or False.
2. If the condition is false, exit the while statement and continue execution at the next
statement.
3. If the condition is true, execute the body and then go back to step 1.
This type of flow is called a **loop** because the third step loops back around to the top.

The body of the loop should change the value of one or more variables so that eventually the condition becomes false and the loop terminates. Otherwise the loop will repeat forever, which is called an **infinite loop**. An endless source of amusement for computer scientists is the observation that the directions on shampoo, "Lather, rinse, repeat," are an infinite loop. In the case of countdown, we can prove that the loop terminates because we know that the value of n is finite, and we can see that the value of n gets smaller each time through the loop, so eventually we have to get to 0. In other cases, it is not so easy to tell:

def sequence(n):
    while n != 1:
        print n,
        if n%2 == 0:
                            # n is even
            n = n/2
        else:
                            # n is odd
            n = n*3+1

The condition for this loop is n != 1, so the loop will continue until n is 1, which makes
the condition false.

Each time through the loop, the program outputs the value of n and then checks whether
it is even or odd. If it is even, n is divided by 2. If it is odd, the value of n is replaced with
n*3+1. For example, if the argument passed to sequence is 3, the resulting sequence is 3,
10, 5, 16, 8, 4, 2, 1.

Since n sometimes increases and sometimes decreases, there is no obvious proof that n will
ever reach 1, or that the program terminates. For some particular values of n, we can prove
termination. For example, if the starting value is a power of two, then the value of n will be
even each time through the loop until it reaches 1. The previous example ends with such a
sequence, starting with 16.

The hard question is whether we can prove that this program terminates for all posi-
tive values of n.
                So far, no one has been able to prove it or disprove it!
                                                                       (See http:
//en.wikipedia.org/wiki/Collatz_conjecture.)
Exercise 7.1. Rewrite the function print_n from Section 5.8 using iteration instead of recursion.

## 7.4 Break

Sometimes you don't know it's time to end a loop until you get half way through the body. In that case you can use the break statement to jump out of the loop. For example, suppose you want to take input from the user until they type done. You could write:

while True:
    line = raw_input('> ')
    if line == 'done':
        break
    print line

print 'Done!'

The loop condition is True, which is always true, so the loop runs until it hits the break
statement.

Each time through, it prompts the user with an angle bracket. If the user types done, the
break statement exits the loop. Otherwise the program echoes whatever the user types and
goes back to the top of the loop. Here's a sample run:

> not done
not done
> done
Done!

This way of writing while loops is common because you can check the condition anywhere
in the loop (not just at the top) and you can express the stop condition affirmatively ("stop
when this happens") rather than negatively ("keep going until that happens.").

## 7.5 Square Roots

Loops are often used in programs that compute numerical results by starting with an approximate answer and iteratively improving it. For example, one way of computing square roots is Newton's method. Suppose that you want to know the square root of a. If you start with almost any estimate, x, you can compute a better estimate with the following formula:
y = x + a/x
2
For example, if a is 4 and x is 3:

>>> a = 4.0
>>> x = 3.0
>>> y = (x + a/x) / 2
>>> print y
2.16666666667

Which is closer to the correct answer (
                                       √

                                    4 = 2). If we repeat the process with the new
estimate, it gets even closer:

>>> x = y
>>> y = (x + a/x) / 2
>>> print y
2.00641025641

After a few more updates, the estimate is almost exact:

>>> x = y
>>> y = (x + a/x) / 2
>>> print y
2.00001024003
>>> x = y
>>> y = (x + a/x) / 2
>>> print y
2.00000000003

In general we don't know ahead of time how many steps it takes to get to the right answer,
but we know when we get there because the estimate stops changing:

>>> x = y
>>> y = (x + a/x) / 2
>>> print y
2.0
>>> x = y
>>> y = (x + a/x) / 2
>>> print y
2.0

When y == x, we can stop. Here is a loop that starts with an initial estimate, x, and im-
proves it until it stops changing:

while True:
    print x
    y = (x + a/x) / 2
    if y == x:
        break
    x = y

For most values of a this works fine, but in general it is dangerous to test float equality.
Floating-point values are only approximately right: most rational numbers, like 1/3, and
irrational numbers, like
                       √

2, can't be represented exactly with a float.

Rather than checking whether x and y are exactly equal, it is safer to use the built-in func-
tion abs to compute the absolute value, or magnitude, of the difference between them:

if abs(y-x) < epsilon:
    break

Where epsilon has a value like 0.0000001 that determines how close is close enough.

Exercise 7.2. *Encapsulate this loop in a function called* square_root that takes a as a parameter, chooses a reasonable value of x, and returns an estimate of the square root of a.

## 7.6 Algorithms

Newton's method is an example of an **algorithm**: it is a mechanical process for solving a category of problems (in this case, computing square roots). It is not easy to define an algorithm. It might help to start with something that is not an algorithm. When you learned to multiply single-digit numbers, you probably memorized the multiplication table. In effect, you memorized 100 specific solutions. That kind of knowledge is not algorithmic.

But if you were "lazy," you probably cheated by learning a few tricks. For example, to find the product of n and 9, you can write n − 1 as the first digit and 10 − n as the second digit. This trick is a general solution for multiplying any single-digit number by 9. That's an algorithm! Similarly, the techniques you learned for addition with carrying, subtraction with borrowing, and long division are all algorithms. One of the characteristics of algorithms is that they do not require any intelligence to carry out. They are mechanical processes in which each step follows from the last according to a simple set of rules. In my opinion, it is embarrassing that humans spend so much time in school learning to execute algorithms that, quite literally, require no intelligence. On the other hand, the process of designing algorithms is interesting, intellectually challenging, and a central part of what we call programming.

Some of the things that people do naturally, without difficulty or conscious thought, are the hardest to express algorithmically. Understanding natural language is a good example.

We all do it, but so far no one has been able to explain *how* we do it, at least not in the form of an algorithm.

## 7.7 Debugging

As you start writing bigger programs, you might find yourself spending more time debugging. More code means more chances to make an error and more place for bugs to hide. One way to cut your debugging time is "debugging by bisection." For example, if there are 100 lines in your program and you check them one at a time, it would take 100 steps. Instead, try to break the problem in half. Look at the middle of the program, or near it, for an intermediate value you can check. Add a print statement (or something else that has a verifiable effect) and run the program. If the mid-point check is incorrect, there must be a problem in the first half of the program.

If it is correct, the problem is in the second half.

Every time you perform a check like this, you halve the number of lines you have to search. After six steps (which is fewer than 100), you would be down to one or two lines of code, at least in theory. In practice it is not always clear what the "middle of the program" is and not always possible to check it. It doesn't make sense to count lines and find the exact midpoint. Instead, think about places in the program where there might be errors and places where it is easy to put a check. Then choose a spot where you think the chances are about the same that the bug is before or after the check.

## 7.8 Glossary

multiple assignment: Making more than one assignment to the same variable during the
execution of a program.
update: An assignment where the new value of the variable depends on the old. initialization: An assignment that gives an initial value to a variable that will be updated.

increment: An update that increases the value of a variable (often by one).

decrement: An update that decreases the value of a variable. iteration: Repeated execution of a set of statements using either a recursive function call
or a loop.
infinite loop: A loop in which the terminating condition is never satisfied.

## 7.9 Exercises

Exercise 7.3. To test the square root algorithm in this chapter, you could compare it with math.sqrt*. Write a function named* test_square_root that prints a table like this:

1.0 1.0
                  1.0
                                0.0
2.0 1.41421356237 1.41421356237 2.22044604925e-16
3.0 1.73205080757 1.73205080757 0.0
4.0 2.0
                  2.0
                                0.0
5.0 2.2360679775
                 2.2360679775
                               0.0
6.0 2.44948974278 2.44948974278 0.0
7.0 2.64575131106 2.64575131106 0.0
8.0 2.82842712475 2.82842712475 4.4408920985e-16
9.0 3.0
                  3.0
                                0.0

The first column is a number, a; the second column is the square root of a computed with the function from Section 7.5; the third column is the square root computed by math.sqrt; the fourth column is the absolute value of the difference between the two estimates. Exercise 7.4. *The built-in function* eval takes a string and evaluates it using the Python interpreter. For example:
>>> eval('1 + 2 * 3')
7
>>> import math
>>> eval('math.sqrt(5)')
2.2360679774997898
>>> eval('type(math.pi)') <type 'float'>
Write a function called eval_loop that iteratively prompts the user, takes the resulting input and evaluates it using eval, and prints the result.

It should continue until the user enters 'done', and then return the value of the last expression it evaluated. Exercise 7.5. The mathematician Srinivasa Ramanujan found an infinite series that can be used to generate a numerical approximation of 1/π:

2 (4k)!(1103 + 26390k) 1 π = 2 √ 9801 (k!)43964k ∞ ∑ k=0
Write a function called estimate_pi that uses this formula to compute and return an estimate of
π*. It should use a* while loop to compute terms of the summation until the last term is smaller than
1e-15 (which is Python notation for 10−15*). You can check the result by comparing it to* math.pi.

Solution: http: // thinkpython. com/ code/ pi. py .

## Chapter 8 Strings 8.1 A String Is A Sequence

A string is a **sequence** of characters. You can access the characters one at a time with the bracket operator:
>>> fruit = 'banana'
>>> letter = fruit[1]
The second statement selects character number 1 from fruit and assigns it to letter.

The expression in brackets is called an **index**. The index indicates which character in the sequence you want (hence the name). But you might not get what you expect:
>>> print letter a

For most people, the first letter of 'banana' is b, not a. But for computer scientists, the
index is an offset from the beginning of the string, and the offset of the first letter is zero.
>>> letter = fruit[0]
>>> print letter b

So b is the 0th letter ("zero-eth") of 'banana', a is the 1th letter ("one-eth"), and n is the 2th
("two-eth") letter.
You can use any expression, including variables and operators, as an index, but the value of the index has to be an integer. Otherwise you get:
>>> letter = fruit[1.5] TypeError: string indices must be integers, not float

## 8.2 Len

len is a built-in function that returns the number of characters in a string:
>>> fruit = 'banana'
>>> len(fruit) 6
To get the last letter of a string, you might be tempted to try something like this:
>>> length = len(fruit) >>> last = fruit[length] IndexError: string index out of range The reason for the IndexError is that there is no letter in 'banana' with the index 6. Since we started counting at zero, the six letters are numbered 0 to 5. To get the last character, you have to subtract 1 from length:
>>> last = fruit[length-1] >>> print last a Alternatively, you can use negative indices, which count backward from the end of the string. The expression fruit[-1] yields the last letter, fruit[-2] yields the second to last, and so on.

## 8.3 Traversal With A For Loop

A lot of computations involve processing a string one character at a time. Often they start at the beginning, select each character in turn, do something to it, and continue until the end. This pattern of processing is called a **traversal**. One way to write a traversal is with a while loop:

index = 0
while index < len(fruit):
    letter = fruit[index]
    print letter
    index = index + 1

This loop traverses the string and displays each letter on a line by itself. The loop condition is index < len(fruit), so when index is equal to the length of the string, the condition is false, and the body of the loop is not executed. The last character accessed is the one with the index len(fruit)-1, which is the last character in the string.

Exercise 8.1. Write a function that takes a string as an argument and displays the letters backward, one per line.

Another way to write a traversal is with a for loop:
for char in fruit:
print char Each time through the loop, the next character in the string is assigned to the variable char.

The loop continues until no characters are left. The following example shows how to use concatenation (string addition) and a for loop to generate an abecedarian series (that is, in alphabetical order). In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack. This loop outputs these names in order:
prefixes = 'JKLMNOPQ' suffix = 'ack'
for letter in prefixes:
print letter + suffix The output is:
Jack Kack Lack Mack Nack Oack Pack Qack Of course, that's not quite right because "Ouack" and "Quack" are misspelled.

Exercise 8.2. Modify the program to fix this error.

## 8.4 String Slices

A segment of a string is called a **slice**. Selecting a slice is similar to selecting a character:
>>> s = 'Monty Python'
>>> print s[0:5] Monty >>> print s[6:12] Python The operator [n:m] returns the part of the string from the "n-eth" character to the "m-eth"
character, including the first but excluding the last. This behavior is counterintuitive, but it might help to imagine the indices pointing *between* the characters, as in Figure 8.1.

If you omit the first index (before the colon), the slice starts at the beginning of the string. If you omit the second index, the slice goes to the end of the string:
>>> fruit = 'banana'
>>> fruit[:3]
'ban'
>>> fruit[3:]
'ana'
If the first index is greater than or equal to the second the result is an **empty string**, represented by two quotation marks:
>>> fruit = 'banana'
>>> fruit[3:3]
''
An empty string contains no characters and has length 0, but other than that, it is the same as any other string.

Exercise 8.3. *Given that* fruit *is a string, what does* fruit[:] mean?

## 8.5 Strings Are Immutable

It is tempting to use the [] operator on the left side of an assignment, with the intention of changing a character in a string. For example:
>>> greeting = 'Hello, world!' >>> greeting[0] = 'J' TypeError: 'str' object does not support item assignment The "object" in this case is the string and the "item" is the character you tried to assign. For now, an **object** is the same thing as a value, but we will refine that definition later. An item is one of the values in a sequence.

The reason for the error is that strings are **immutable**, which means you can't change an existing string. The best you can do is create a new string that is a variation on the original:

>>> greeting = 'Hello, world!'
>>> new_greeting = 'J' + greeting[1:]
>>> print new_greeting
Jello, world!

This example concatenates a new first letter onto a slice of greeting. It has no effect on the
original string.

## 8.6 Searching

What does the following function do?

def find(word, letter):
    index = 0
    while index < len(word):
        if word[index] == letter:
            return index
        index = index + 1
    return -1

In a sense, find is the opposite of the [] operator. Instead of taking an index and extracting
the corresponding character, it takes a character and finds the index where that character
appears. If the character is not found, the function returns -1.

This is the first example we have seen of a return statement inside a loop. If word[index]
== letter, the function breaks out of the loop and returns immediately.

If the character doesn't appear in the string, the program exits the loop normally and re-
turns -1.

This pattern of computation—traversing a sequence and returning when we find what we
are looking for—is called a search.
Exercise 8.4. Modify find so that it has a third parameter, the index in word where it should start
looking.

## 8.7 Looping And Counting

The following program counts the number of times the letter a appears in a string:

word = 'banana'
count = 0
for letter in word:
    if letter == 'a':
        count = count + 1
print count

This program demonstrates another pattern of computation called a counter. The variable
count is initialized to 0 and then incremented each time an a is found. When the loop exits,
count contains the result—the total number of a's.
Exercise 8.5. Encapsulate this code in a function named count, and generalize it so that it accepts
the string and the letter as arguments.
Exercise 8.6. Rewrite this function so that instead of traversing the string, it uses the three-
parameter version of find from the previous section.

## 8.8 String Methods

A **method** is similar to a function—it takes arguments and returns a value—but the syntax is different. For example, the method upper takes a string and returns a new string with all uppercase letters: Instead of the function syntax upper(word), it uses the method syntax word.upper().

>>> word = 'banana'
>>> new_word = word.upper()
>>> print new_word
BANANA

This form of dot notation specifies the name of the method, upper, and the name of the
string to apply the method to, word. The empty parentheses indicate that this method
takes no argument.

A method call is called an **invocation**; in this case, we would say that we are invoking upper on the word. As it turns out, there is a string method named find that is remarkably similar to the function we wrote:
>>> word = 'banana' >>> index = word.find('a')
>>> print index 1
In this example, we invoke find on word and pass the letter we are looking for as a parameter. Actually, the find method is more general than our function; it can find substrings, not just characters:
>>> word.find('na')
2
It can take as a second argument the index where it should start:
>>> word.find('na', 3)
4
And as a third argument the index where it should stop:
>>> name = 'bob'
>>> name.find('b', 1, 2)
-1
This search fails because b does not appear in the index range from 1 to 2 (not including 2).

Exercise 8.7. *There is a string method called* count that is similar to the function in the previous exercise. Read the documentation of this method and write an invocation that counts the number of a*s in* 'banana'.

Exercise 8.8. *Read the documentation of the string methods at* http: // docs. python. org/ 2/
library/ stdtypes. html# string-methods . You might want to experiment with some of them to make sure you understand how they work. strip *and* replace are particularly useful.

The
    documentation
                  uses
                        a
                           syntax
                                  that
                                       might
                                              be
                                                  confusing.
                                                               For
                                                                    example,
                                                                             in
find(sub[, start[, end]]), the brackets indicate optional arguments. So sub is required, but
start is optional, and if you include start, then end is optional.

## 8.9 The In Operator

The word in is a boolean operator that takes two strings and returns True if the first appears as a substring in the second:

>>> 'a' in 'banana'
True
>>> 'seed' in 'banana'
False

For example, the following function prints all the letters from word1 that also appear in
word2:

def in_both(word1, word2):
    for letter in word1:
        if letter in word2:
            print letter

With well-chosen variable names, Python sometimes reads like English. You could read
this loop, "for (each) letter in (the first) word, if (the) letter (appears) in (the second) word,
print (the) letter."

Here's what you get if you compare apples and oranges:

>>> in_both('apples', 'oranges')
a
e
s

## 8.10 String Comparison

The relational operators work on strings. To see if two strings are equal:
if word == 'banana':
print 'All right, bananas.'
Other relational operations are useful for putting words in alphabetical order:

if word < 'banana':
    print 'Your word,' + word + ', comes before banana.'
elif word > 'banana':
    print 'Your word,' + word + ', comes after banana.'
else:
    print 'All right, bananas.'

Python does not handle uppercase and lowercase letters the same way that people do. All
the uppercase letters come before all the lowercase letters, so:

Your word, Pineapple, comes before banana.

A common way to address this problem is to convert strings to a standard format, such as
all lowercase, before performing the comparison. Keep that in mind in case you have to
defend yourself against a man armed with a Pineapple.

## 8.11 Debugging

When you use indices to traverse the values in a sequence, it is tricky to get the beginning and end of the traversal right. Here is a function that is supposed to compare two words and return True if one of the words is the reverse of the other, but it contains two errors:
def is_reverse(word1, word2):
if len(word1) != len(word2):
return False i = 0 j = len(word2)

while j > 0:
    if word1[i] != word2[j]:
        return False
    i = i+1
    j = j-1

return True

The first if statement checks whether the words are the same length. If not, we can return
False immediately and then, for the rest of the function, we can assume that the words are
the same length. This is an example of the guardian pattern in Section 6.8.

i and j are indices: i traverses word1 forward while j traverses word2 backward. If we
find two letters that don't match, we can return False immediately. If we get through the
whole loop and all the letters match, we return True.

If we test this function with the words "pots" and "stop", we expect the return value True,
but we get an IndexError:

>>> is_reverse('pots', 'stop')
...

| word1   |   'pots' | word2   |   'stop' |
|---------|----------|---------|----------|
| i       |        0 | j       |        3 |

File "reverse.py", line 15, in is_reverse if word1[i] != word2[j]:
IndexError: string index out of range For debugging this kind of error, my first move is to print the values of the indices immediately before the line where the error appears.

while j > 0:
print i, j
# print here

if word1[i] != word2[j]:
    return False
i = i+1
j = j-1

Now when I run the program again, I get more information:

>>> is_reverse('pots', 'stop')
0 4
...
IndexError: string index out of range

The first time through the loop, the value of j is 4, which is out of range for the
string 'pots'. The index of the last character is 3, so the initial value for j should be
len(word2)-1.

If I fix that error and run the program again, I get:

>>> is_reverse('pots', 'stop')
0 3
1 2
2 1
True

This time we get the right answer, but it looks like the loop only ran three times, which is
suspicious. To get a better idea of what is happening, it is useful to draw a state diagram.
During the first iteration, the frame for is_reverse is shows in Figure 8.2.

I took a little license by arranging the variables in the frame and adding dotted lines to
show that the values of i and j indicate characters in word1 and word2.
Exercise 8.9. Starting with this diagram, execute the program on paper, changing the values of i
and j during each iteration. Find and fix the second error in this function.

## 8.12 Glossary

object: Something a variable can refer to. For now, you can use "object" and "value"
interchangeably.

sequence: An ordered set; that is, a set of values where each value is identified by an
integer index.
item: One of the values in a sequence. index: An integer value used to select an item in a sequence, such as a character in a string. slice: A part of a string specified by a range of indices. empty string: A string with no characters and length 0, represented by two quotation
marks.
immutable: The property of a sequence whose items cannot be assigned. traverse: To iterate through the items in a sequence, performing a similar operation on
each.
search: A pattern of traversal that stops when it finds what it is looking for. counter: A variable used to count something, usually initialized to zero and then incremented.
method: A function that is associated with an object and called using dot notation. invocation: A statement that calls a method.
Exercise 8.10. A string slice can take a third index that specifies the "step size;" that is, the number of spaces between successive characters. A step size of 2 means every other character; 3 means every third, etc.

>>> fruit = 'banana'
>>> fruit[0:5:2]
'bnn'
A step size of -1 goes through the word backwards, so the slice [::-1] generates a reversed string.

Use this idiom to write a one-line version of is_palindrome from Exercise 6.6.

Exercise 8.11. *The following functions are all* intended to check whether a string contains any lowercase letters, but at least some of them are wrong. For each function, describe what the function actually does (assuming that the parameter is a string).

def any_lowercase1(s):
    for c in s:
        if c.islower():
            return True
        else:
            return False

def any_lowercase2(s):
    for c in s:
        if 'c'.islower():
            return 'True'

else:
return 'False'

def any_lowercase3(s):
    for c in s:
        flag = c.islower()
    return flag

def any_lowercase4(s):
    flag = False
    for c in s:
        flag = flag or c.islower()
    return flag

def any_lowercase5(s):
    for c in s:
        if not c.islower():
            return False
    return True
Exercise 8.12. ROT13 is a weak form of encryption that involves "rotating" each letter in a word
by 13 places. To rotate a letter means to shift it through the alphabet, wrapping around to the
beginning if necessary, so 'A' shifted by 3 is 'D' and 'Z' shifted by 1 is 'A'.

Write a function called rotate_word that takes a string and an integer as parameters, and that
returns a new string that contains the letters from the original string "rotated" by the given amount.

For example, "cheer" rotated by 7 is "jolly" and "melon" rotated by -10 is "cubed".

You might want to use the built-in functions ord, which converts a character to a numeric code,
and chr, which converts numeric codes to characters.

Potentially offensive jokes on the Internet are sometimes encoded in ROT13. If you are not easily offended, find and decode some of them. Solution: http: // thinkpython. com/ code/ rotate.

py .

## Chapter 9 Case Study: Word Play 9.1 Reading Word Lists

For the exercises in this chapter we need a list of English words. There are lots of word lists available on the Web, but the one most suitable for our purpose is one of the word lists collected and contributed to the public domain by Grady Ward as part of the Moby lexicon project (see http://wikipedia.org/wiki/Moby_Project). It is a list of 113,809 official crosswords; that is, words that are considered valid in crossword puzzles and other word games. In the Moby collection, the filename is 113809of.fic; you can download a copy, with the simpler name words.txt, from http://thinkpython.com/code/words.txt.

This file is in plain text, so you can open it with a text editor, but you can also read it from Python. The built-in function open takes the name of the file as a parameter and returns a file object you can use to read the file.

>>> fin = open('words.txt')
>>> print fin
<open file 'words.txt', mode 'r' at 0xb7f4b380>
fin is a common name for a file object used for input. Mode 'r' indicates that this file is open for reading (as opposed to 'w' for writing).

The file object provides several methods for reading, including readline, which reads characters from the file until it gets to a newline and returns the result as a string:
>>> fin.readline()
'aa\r\n'
The first word in this particular list is "aa," which is a kind of lava. The sequence \r\n represents two whitespace characters, a carriage return and a newline, that separate this word from the next. The file object keeps track of where it is in the file, so if you call readline again, you get the next word:
>>> fin.readline()
'aah\r\n'
The next word is "aah," which is a perfectly legitimate word, so stop looking at me like that. Or, if it's the whitespace that's bothering you, we can get rid of it with the string method strip:

>>> line = fin.readline()
>>> word = line.strip()
>>> print word
aahed
You can also use a file object as part of a for loop. This program reads words.txt and
prints each word, one per line:
fin = open('words.txt')
for line in fin:
    word = line.strip()
    print word
Exercise 9.1. Write a program that reads words.txt and prints only the words with more than 20
characters (not counting whitespace).

## 9.2 Exercises

There are solutions to these exercises in the next section. You should at least attempt each one before you read the solutions.

Exercise 9.2. *In 1939 Ernest Vincent Wright published a 50,000 word novel called* Gadsby that does not contain the letter "e." Since "e" is the most common letter in English, that's not easy to do. In fact, it is difficult to construct a solitary thought without using that most common symbol. It is slow going at first, but with caution and hours of training you can gradually gain facility. All right, I'll stop now. Write a function called has_no_e *that returns* True if the given word doesn't have the letter "e" in it. Modify your program from the previous section to print only the words that have no "e" and compute the percentage of the words in the list have no "e." Exercise 9.3. *Write a function named* avoids that takes a word and a string of forbidden letters, and that returns True if the word doesn't use any of the forbidden letters.

Modify your program to prompt the user to enter a string of forbidden letters and then print the number of words that don't contain any of them. Can you find a combination of 5 forbidden letters that excludes the smallest number of words? Exercise 9.4. *Write a function named* uses_only that takes a word and a string of letters, and that returns True if the word contains only letters in the list. Can you make a sentence using only the letters acefhlo? Other than "Hoe alfalfa?" Exercise 9.5. *Write a function named* uses_all that takes a word and a string of required letters, and that returns True if the word uses all the required letters at least once. How many words are there that use all the vowels aeiou*? How about* aeiouy?

Exercise 9.6. *Write a function called* is_abecedarian *that returns* True if the letters in a word appear in alphabetical order (double letters are ok). How many abecedarian words are there?

## 9.3 Search

All of the exercises in the previous section have something in common; they can be solved with the search pattern we saw in Section 8.6. The simplest example is:

def has_no_e(word):
    for letter in word:
        if letter == 'e':
            return False
    return True

The for loop traverses the characters in word. If we find the letter "e", we can immediately
return False; otherwise we have to go to the next letter. If we exit the loop normally, that
means we didn't find an "e", so we return True.

avoids is a more general version of has_no_e but it has the same structure:

def avoids(word, forbidden):
    for letter in word:
        if letter in forbidden:
            return False
    return True

We can return False as soon as we find a forbidden letter; if we get to the end of the loop,
we return True.

uses_only is similar except that the sense of the condition is reversed:

def uses_only(word, available):
    for letter in word:
        if letter not in available:
            return False
    return True

Instead of a list of forbidden letters, we have a list of available letters. If we find a letter in
word that is not in available, we can return False.

uses_all is similar except that we reverse the role of the word and the string of letters:

def uses_all(word, required):
    for letter in required:
        if letter not in word:
            return False
    return True

Instead of traversing the letters in word, the loop traverses the required letters. If any of the
required letters do not appear in the word, we can return False.

If you were really thinking like a computer scientist, you would have recognized that
uses_all was an instance of a previously-solved problem, and you would have written:

def uses_all(word, required):
    return uses_only(required, word)

This is an example of a program development method called problem recognition, which
means that you recognize the problem you are working on as an instance of a previously-
solved problem, and apply a previously-developed solution.

## 9.4 Looping With Indices

I wrote the functions in the previous section with for loops because I only needed the characters in the strings; I didn't have to do anything with the indices.

For is_abecedarian we have to compare adjacent letters, which is a little tricky with a for loop:

def is_abecedarian(word):
    previous = word[0]
    for c in word:
        if c < previous:
            return False
        previous = c
    return True

An alternative is to use recursion:

def is_abecedarian(word):
    if len(word) <= 1:
        return True
    if word[0] > word[1]:
        return False
    return is_abecedarian(word[1:])

Another option is to use a while loop:

def is_abecedarian(word):
    i = 0
    while i < len(word)-1:
        if word[i+1] < word[i]:
            return False
        i = i+1
    return True

The loop starts at i=0 and ends when i=len(word)-1. Each time through the loop, it com-
pares the ith character (which you can think of as the current character) to the i + 1th
character (which you can think of as the next).

If the next character is less than (alphabetically before) the current one, then we have dis-
covered a break in the abecedarian trend, and we return False.

If we get to the end of the loop without finding a fault, then the word passes the test. To
convince yourself that the loop ends correctly, consider an example like 'flossy'. The
length of the word is 6, so the last time the loop runs is when i is 4, which is the index of
the second-to-last character. On the last iteration, it compares the second-to-last character
to the last, which is what we want.

Here is a version of is_palindrome (see Exercise 6.6) that uses two indices; one starts at
the beginning and goes up; the other starts at the end and goes down.

def is_palindrome(word):
    i = 0
    j = len(word)-1

while i<j:
    if word[i] != word[j]:
        return False
    i = i+1
    j = j-1

return True

Or, if you noticed that this is an instance of a previously-solved problem, you might have written:
def is_palindrome(word):
return is_reverse(word, word)
Assuming you did Exercise 8.9.

## 9.5 Debugging

Testing programs is hard. The functions in this chapter are relatively easy to test because you can check the results by hand. Even so, it is somewhere between difficult and impossible to choose a set of words that test for all possible errors.

Taking has_no_e as an example, there are two obvious cases to check: words that have an 'e' should return False; words that don't should return True. You should have no trouble coming up with one of each. Within each case, there are some less obvious subcases. Among the words that have an "e," you should test words with an "e" at the beginning, the end, and somewhere in the middle. You should test long words, short words, and very short words, like the empty string. The empty string is an example of a **special case**, which is one of the non-obvious cases where errors often lurk. In addition to the test cases you generate, you can also test your program with a word list like words.txt. By scanning the output, you might be able to catch errors, but be careful: you might catch one kind of error (words that should not be included, but are) and not another (words that should be included, but aren't). In general, testing can help you find bugs, but it is not easy to generate a good set of test cases, and even if you do, you can't be sure your program is correct. According to a legendary computer scientist:
Program testing can be used to show the presence of bugs, but never to show their absence! - Edsger W. Dijkstra

## 9.6 Glossary

file object: A value that represents an open file.

problem recognition: A way of solving a problem by expressing it as an instance of a
previously-solved problem.
special case: A test case that is atypical or non-obvious (and less likely to be handled correctly).

## 9.7 Exercises

Exercise 9.7. *This question is based on a Puzzler that was broadcast on the radio program* Car Talk (http: // www. cartalk. com/ content/ puzzlers ):
Give me a word with three consecutive double letters. I'll give you a couple of words that almost qualify, but don't. For example, the word committee, c-o-m-m-i-t-t-e-e. It would be great except for the 'i' that sneaks in there. Or Mississippi: M-i-s-s-i-s-s-ip-p-i. If you could take out those i's it would work. But there is a word that has three consecutive pairs of letters and to the best of my knowledge this may be the only word. Of course there are probably 500 more but I can only think of one. What is the word?

Write a program to find it. Solution: http: // thinkpython. com/ code/ cartalk1. py .

Exercise 9.8. *Here's another* Car Talk *Puzzler (*http: // www. cartalk. com/ content/
puzzlers ):
"I was driving on the highway the other day and I happened to notice my odometer. Like most odometers, it shows six digits, in whole miles only. So, if my car had 300,000 miles, for example, I'd see 3-0-0-0-0-0. "Now, what I saw that day was very interesting. I noticed that the last 4 digits were palindromic; that is, they read the same forward as backward. For example, 5-4-4-5 is a palindrome, so my odometer could have read 3-1-5-4-4-5. "One mile later, the last 5 numbers were palindromic. For example, it could have read 3-6-5-4-5-6. One mile after that, the middle 4 out of 6 numbers were palindromic. And you ready for this? One mile later, all 6 were palindromic! "The question is, what was on the odometer when I first looked?"
Write a Python program that tests all the six-digit numbers and prints any numbers that satisfy these requirements. Solution: http: // thinkpython. com/ code/ cartalk2. py .

Exercise 9.9. *Here's another* Car Talk *Puzzler you can solve with a search (*http: // www.

cartalk. com/ content/ puzzlers ):
"Recently I had a visit with my mom and we realized that the two digits that make up my age when reversed resulted in her age. For example, if she's 73, I'm 37. We wondered how often this has happened over the years but we got sidetracked with other topics and we never came up with an answer. "When I got home I figured out that the digits of our ages have been reversible six times so far. I also figured out that if we're lucky it would happen again in a few years, and if we're really lucky it would happen one more time after that. In other words, it would have happened 8 times over all. So the question is, how old am I now?"
Write a Python program that searches for solutions to this Puzzler. Hint: you might find the string method zfill useful. Solution: http: // thinkpython. com/ code/ cartalk3. py .

## Chapter 10 Lists 10.1 A List Is A Sequence

Like a string, a **list** is a sequence of values. In a string, the values are characters; in a list, they can be any type. The values in a list are called **elements** or sometimes **items**.

There are several ways to create a new list; the simplest is to enclose the elements in square brackets ([ and ]):
[10, 20, 30, 40]
['crunchy frog', 'ram bladder', 'lark vomit']
The first example is a list of four integers. The second is a list of three strings. The elements of a list don't have to be the same type. The following list contains a string, a float, an integer, and (lo!) another list:
['spam', 2.0, 5, [10, 20]]
A list within another list is **nested**.

A list that contains no elements is called an empty list; you can create one with empty brackets, [].

As you might expect, you can assign list values to variables:

>>> cheeses = ['Cheddar', 'Edam', 'Gouda']
>>> numbers = [17, 123]
>>> empty = []
>>> print cheeses, numbers, empty
['Cheddar', 'Edam', 'Gouda'] [17, 123] []

## 10.2 Lists Are Mutable

The syntax for accessing the elements of a list is the same as for accessing the characters of a string—the bracket operator. The expression inside the brackets specifies the index. Remember that the indices start at 0:
>>> print cheeses[0] Cheddar

list
cheeses
0
'Cheddar'
1
'Edam'
2
'Gouda'
list
numbers
17
0 1
123 5
list
empty

Unlike strings, lists are mutable. When the bracket operator appears on the left side of an assignment, it identifies the element of the list that will be assigned.

>>> numbers = [17, 123]
>>> numbers[1] = 5
>>> print numbers
[17, 5]

The one-eth element of numbers, which used to be 123, is now 5.

You can think of a list as a relationship between indices and elements. This relationship is
called a mapping; each index "maps to" one of the elements. Figure 10.1 shows the state
diagram for cheeses, numbers and empty:

Lists are represented by boxes with the word "list" outside and the elements of the list inside. cheeses refers to a list with three elements indexed 0, 1 and 2. numbers contains two elements; the diagram shows that the value of the second element has been reassigned from 123 to 5. empty refers to a list with no elements.

List indices work the same way as string indices:

- Any integer expression can be used as an index. - If you try to read or write an element that does not exist, you get an IndexError. - If an index has a negative value, it counts backward from the end of the list.
The in operator also works on lists.

>>> cheeses = ['Cheddar', 'Edam', 'Gouda']
>>> 'Edam' in cheeses
True
>>> 'Brie' in cheeses
False

## 10.3 Traversing A List

The most common way to traverse the elements of a list is with a for loop. The syntax is the same as for strings:
for cheese in cheeses:
print cheese This works well if you only need to read the elements of the list. But if you want to write or update the elements, you need the indices. A common way to do that is to combine the functions range and len:
for i in range(len(numbers)):
numbers[i] = numbers[i] * 2
This loop traverses the list and updates each element. len returns the number of elements in the list. range returns a list of indices from 0 to n − 1, where n is the length of the list.

Each time through the loop i gets the index of the next element. The assignment statement in the body uses i to read the old value of the element and to assign the new value. A for loop over an empty list never executes the body:
for x in []:
print 'This never happens.'
Although a list can contain another list, the nested list still counts as a single element. The length of this list is four:
['spam', 1, ['Brie', 'Roquefort', 'Pol le Veq'], [1, 2, 3]]

## 10.4 List Operations

The + operator concatenates lists:

>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> c = a + b
>>> print c
[1, 2, 3, 4, 5, 6]

Similarly, the * operator repeats a list a given number of times:

>>> [0] * 4
[0, 0, 0, 0]
>>> [1, 2, 3] * 3
[1, 2, 3, 1, 2, 3, 1, 2, 3]

The first example repeats [0] four times. The second example repeats the list [1, 2, 3]
three times.

## 10.5 List Slices

The slice operator also works on lists:

>>> t = ['a', 'b', 'c', 'd', 'e', 'f']
>>> t[1:3]
['b', 'c']
>>> t[:4]
['a', 'b', 'c', 'd']
>>> t[3:]
['d', 'e', 'f']

If you omit the first index, the slice starts at the beginning. If you omit the second, the slice
goes to the end. So if you omit both, the slice is a copy of the whole list.

>>> t[:]
['a', 'b', 'c', 'd', 'e', 'f']

Since lists are mutable, it is often useful to make a copy before performing operations that
fold, spindle or mutilate lists.

A slice operator on the left side of an assignment can update multiple elements:

>>> t = ['a', 'b', 'c', 'd', 'e', 'f']
>>> t[1:3] = ['x', 'y']
>>> print t
['a', 'x', 'y', 'd', 'e', 'f']

## 10.6 List Methods

Python provides methods that operate on lists. For example, append adds a new element to the end of a list:

>>> t = ['a', 'b', 'c']
>>> t.append('d')
>>> print t
['a', 'b', 'c', 'd']

extend takes a list as an argument and appends all of the elements:

>>> t1 = ['a', 'b', 'c']
>>> t2 = ['d', 'e']
>>> t1.extend(t2)
>>> print t1
['a', 'b', 'c', 'd', 'e']

This example leaves t2 unmodified.

sort arranges the elements of the list from low to high:

>>> t = ['d', 'c', 'e', 'b', 'a']
>>> t.sort()
>>> print t
['a', 'b', 'c', 'd', 'e']

List methods are all void; they modify the list and return None. If you accidentally write t
= t.sort(), you will be disappointed with the result.

## 10.7 Map, Filter And Reduce

To add up all the numbers in a list, you can use a loop like this:

def add_all(t):
    total = 0
    for x in t:
        total += x
    return total

total is initialized to 0. Each time through the loop, x gets one element from the list.

The += operator provides a short way to update a variable. This augmented assignment statement:
total += x is equivalent to:
total = total + x As the loop executes, total accumulates the sum of the elements; a variable used this way is sometimes called an **accumulator**.

Adding up the elements of a list is such a common operation that Python provides it as a built-in function, sum:
>>> t = [1, 2, 3] >>> sum(t) 6
An operation like this that combines a sequence of elements into a single value is sometimes called **reduce**.

Exercise 10.1. *Write a function called* nested_sum that takes a nested list of integers and add up the elements from all of the nested lists.

Sometimes you want to traverse one list while building another. For example, the following function takes a list of strings and returns a new list that contains capitalized strings:

def capitalize_all(t):
    res = []
    for s in t:
        res.append(s.capitalize())
    return res

res is initialized with an empty list; each time through the loop, we append the next ele-
ment. So res is another kind of accumulator.

An operation like capitalize_all is sometimes called a map because it "maps" a function
(in this case the method capitalize) onto each of the elements in a sequence.
Exercise 10.2. Use capitalize_all to write a function named capitalize_nested that takes
a nested list of strings and returns a new nested list with all strings capitalized.

Another common operation is to select some of the elements from a list and return a sublist.
For example, the following function takes a list of strings and returns a list that contains
only the uppercase strings:

def only_upper(t):
    res = []
    for s in t:

if s.isupper():
res.append(s)
return res isupper is a string method that returns True if the string contains only upper case letters.

An operation like only_upper is called a **filter** because it selects some of the elements and filters out the others. Most common list operations can be expressed as a combination of map, filter and reduce. Because these operations are so common, Python provides language features to support them, including the built-in function map and an operator called a "list comprehension."
Exercise 10.3. Write a function that takes a list of numbers and returns the cumulative sum; that is, a new list where the ith element is the sum of the first i + 1 elements from the original list. For example, the cumulative sum of [1, 2, 3] is [1, 3, 6].

## 10.8 Deleting Elements

There are several ways to delete elements from a list. If you know the index of the element
you want, you can use pop:
>>> t = ['a', 'b', 'c']
>>> x = t.pop(1)
>>> print t
['a', 'c']
>>> print x
b
pop modifies the list and returns the element that was removed. If you don't provide an
index, it deletes and returns the last element.

If you don't need the removed value, you can use the del operator:
>>> t = ['a', 'b', 'c']
>>> del t[1]
>>> print t
['a', 'c']
If you know the element you want to remove (but not the index), you can use remove:
>>> t = ['a', 'b', 'c']
>>> t.remove('b')
>>> print t
['a', 'c']
The return value from remove is None.

To remove more than one element, you can use del with a slice index:
>>> t = ['a', 'b', 'c', 'd', 'e', 'f']
>>> del t[1:5]
>>> print t
['a', 'f']
As usual, the slice selects all the elements up to, but not including, the second index.
Exercise 10.4. Write a function called middle that takes a list and returns a new list that contains
all but the first and last elements. So middle([1,2,3,4]) should return [2,3].
Exercise 10.5. Write a function called chop that takes a list, modifies it by removing the first and
last elements, and returns None.

## 10.9 Lists And Strings

A string is a sequence of characters and a list is a sequence of values, but a list of characters is not the same as a string. To convert from a string to a list of characters, you can use list:

>>> s = 'spam'
>>> t = list(s)
>>> print t
['s', 'p', 'a', 'm']

Because list is the name of a built-in function, you should avoid using it as a variable
name. I also avoid l because it looks too much like 1. So that's why I use t.

The list function breaks a string into individual letters. If you want to break a string into
words, you can use the split method:

>>> s = 'pining for the fjords'
>>> t = s.split()
>>> print t
['pining', 'for', 'the', 'fjords']

An optional argument called a delimiter specifies which characters to use as word bound-
aries. The following example uses a hyphen as a delimiter:

>>> s = 'spam-spam-spam'
>>> delimiter = '-'
>>> s.split(delimiter)
['spam', 'spam', 'spam']

join is the inverse of split. It takes a list of strings and concatenates the elements. join is
a string method, so you have to invoke it on the delimiter and pass the list as a parameter:

>>> t = ['pining', 'for', 'the', 'fjords']
>>> delimiter = ' '
>>> delimiter.join(t)
'pining for the fjords'

In this case the delimiter is a space character, so join puts a space between words. To
concatenate strings without spaces, you can use the empty string, '', as a delimiter.

## 10.10 Objects And Values

If we execute these assignment statements:

a = 'banana'
b = 'banana'
We know that a and b both refer to a string, but we don't know whether they refer to the same string. There are two possible states, shown in Figure 10.2.

In one case, a and b refer to two different objects that have the same value. In the second case, they refer to the same object. To check whether two variables refer to the same object, you can use the is operator.

>>> a = 'banana'
>>> b = 'banana'
>>> a is b
True

In this example, Python only created one string object, and both a and b refer to it.

But when you create two lists, you get two objects:

>>> a = [1, 2, 3]
>>> b = [1, 2, 3]
>>> a is b
False

So the state diagram looks like Figure 10.3.

In this case we would say that the two lists are equivalent, because they have the same el-
ements, but not identical, because they are not the same object. If two objects are identical,
they are also equivalent, but if they are equivalent, they are not necessarily identical.

Until now, we have been using "object" and "value" interchangeably, but it is more precise
to say that an object has a value. If you execute [1,2,3], you get a list object whose value is
a sequence of integers. If another list has the same elements, we say it has the same value,
but it is not the same object.

## 10.11 Aliasing

If a refers to an object and you assign b = a, then both variables refer to the same object:

>>> a = [1, 2, 3]
>>> b = a
>>> b is a
True

The state diagram looks like Figure 10.4.

The association of a variable with an object is called a reference. In this example, there are
two references to the same object.

An object with more than one reference has more than one name, so we say that the object
is aliased.

If the aliased object is mutable, changes made with one alias affect the other:

>>> b[0] = 17 >>> print a [17, 2, 3]
Although this behavior can be useful, it is error-prone. In general, it is safer to avoid aliasing when you are working with mutable objects. For immutable objects like strings, aliasing is not as much of a problem. In this example:
a = 'banana'
b = 'banana'
It almost never makes a difference whether a and b refer to the same string or not.

## 10.12 List Arguments

When you pass a list to a function, the function gets a reference to the list. If the function modifies a list parameter, the caller sees the change. For example, delete_head removes the first element from a list:
def delete_head(t):
del t[0]
Here's how it is used:

>>> letters = ['a', 'b', 'c']
>>> delete_head(letters)
>>> print letters
['b', 'c']

The parameter t and the variable letters are aliases for the same object. The stack diagram
looks like Figure 10.5.

Since the list is shared by two frames, I drew it between them.

It is important to distinguish between operations that modify lists and operations that cre-
ate new lists. For example, the append method modifies a list, but the + operator creates a
new list:

>>> t1 = [1, 2]
>>> t2 = t1.append(3)

>>> print t1 [1, 2, 3] >>> print t2
None
>>> t3 = t1 + [4] >>> print t3 [1, 2, 3, 4]
This difference is important when you write functions that are supposed to modify lists.

For example, this function *does not* delete the head of a list:
def bad_delete_head(t):
t = t[1:]
# WRONG!

The slice operator creates a new list and the assignment makes t refer to it, but none of that has any effect on the list that was passed as an argument. An alternative is to write a function that creates and returns a new list. For example, tail returns all but the first element of a list:
def tail(t):
return t[1:]
This function leaves the original list unmodified. Here's how it is used:

>>> letters = ['a', 'b', 'c']
>>> rest = tail(letters)
>>> print rest
['b', 'c']

## 10.13 Debugging

Careless use of lists (and other mutable objects) can lead to long hours of debugging. Here are some common pitfalls and ways to avoid them:

1. Don't forget that most list methods modify the argument and return None. This is
the opposite of the string methods, which return a new string and leave the original
alone.
If you are used to writing string code like this:
word = word.strip()
It is tempting to write list code like this:
t = t.sort()
# WRONG!

Because sort returns None, the next operation you perform with t is likely to fail.

Before using list methods and operators, you should read the documentation carefully and then test them in interactive mode. The methods and operators that lists share with other sequences (like strings) are documented at http://docs.python. org/2/library/stdtypes.html#typesseq. The methods and operators that only apply to mutable sequences are documented at http://docs.python.org/2/library/ stdtypes.html#typesseq-mutable.

2. Pick an idiom and stick with it.
Part of the problem with lists is that there are too many ways to do things. For example, to remove an element from a list, you can use pop, remove, del, or even a slice assignment. To add an element, you can use the append method or the + operator. Assuming that t is a list and x is a list element, these are right:
t.append(x) t = t + [x]
And these are wrong:

t.append([x])
                       # WRONG!
t = t.append(x)
                       # WRONG!
t + [x]
                       # WRONG!
t = t + x
                       # WRONG!

Try out each of these examples in interactive mode to make sure you understand
what they do. Notice that only the last one causes a runtime error; the other three are
legal, but they do the wrong thing.

3. Make copies to avoid aliasing.
If you want to use a method like sort that modifies the argument, but you need to keep the original list as well, you can make a copy.

orig = t[:] t.sort()
In this example you could also use the built-in function sorted, which returns a new, sorted list and leaves the original alone. But in that case you should avoid using sorted as a variable name!

## 10.14 Glossary

list: A sequence of values.

element: One of the values in a list (or other sequence), also called items.

index: An integer value that indicates an element in a list. nested list: A list that is an element of another list. list traversal: The sequential accessing of each element in a list. mapping: A relationship in which each element of one set corresponds to an element of
another set. For example, a list is a mapping from indices to elements.
accumulator: A variable used in a loop to add up or accumulate a result. augmented assignment: A statement that updates the value of a variable using an operator like +=.
reduce: A processing pattern that traverses a sequence and accumulates the elements into
a single result.
map: A processing pattern that traverses a sequence and performs an operation on each
element.
filter: A processing pattern that traverses a list and selects the elements that satisfy some
criterion.
object: Something a variable can refer to. An object has a type and a value. equivalent: Having the same value.

identical: Being the same object (which implies equivalence).

reference: The association between a variable and its value. aliasing: A circumstance where two or more variables refer to the same object. delimiter: A character or string used to indicate where a string should be split.

## 10.15 Exercises

Exercise 10.6. *Write a function called* is_sorted *that takes a list as a parameter and returns* True if the list is sorted in ascending order and False otherwise. You can assume (as a precondition) that the elements of the list can be compared with the relational operators <, >, etc.

For example, is_sorted([1,2,2]) *should return* True *and* is_sorted(['b','a']) should return False. Exercise 10.7. Two words are anagrams if you can rearrange the letters from one to spell the other. Write a function called is_anagram *that takes two strings and returns* True if they are anagrams.

