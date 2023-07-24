# Codecademy Challenge Project: Mysterious Organism

## Description
Repo for the Mysterious Organism Codecademy challenge project.

### Why'd I build this?
I'm working on the codecademy full stack path and realized I need to start putting my projects on github. 

### What problem does this solve?
This helps me learn more about javascript, git, and is great practice.

### What did I learn?
I'll come back to this section later.

### What makes this special? 
Nothing yet, but I'll 'build it for real' as I go through it so I think I can contribute something unique.

----------------------

## Overview

Look over the starter code. There are two helper functions: `returnRandBase()` and `mockUpStrand()`.

DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When `returnRandBase()` is called, it will randomly select a base and return the base ('A','T','C', or 'G').

`mockUpStrand()` is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

You’ll use these helper functions later to create your objects that represent P. aequor.

## Requirements

- [x] Since you need to create multiple objects, create a factory function `pAequorFactory()` that has two parameters:
    - [x] The first parameter is a number (no two organisms should have the same number).
    - [x] The second parameter is an array of 15 DNA bases.
    - [x] `pAequorFactory()` should return an object that contains the properties `specimenNum` and `dna` that correspond to the parameters provided.
    - [x] You’ll also add more methods to this returned object in the later steps, so *keep modularity in mind*.

- [x] Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
    - [x] To simulate a mutation, in `pAequorFactory()`‘s returned object, add the method `.mutate()`.
    - [x] `.mutate()` is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then `.mutate()` will return the object’s dna.
    - [x] For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

- [x] Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (`.compareDNA()`) to the returned object of the factory function.
    - [x] `.compareDNA()` has one parameter, another pAequor object.
    - [x] The behavior of `.compareDNA()` is to compare the current pAequor‘s `.dna` with the passed in pAequor‘s `.dna` and compute how many bases are identical and in the same locations. `.compareDNA()` does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the `.specimenNum` to identify which pAequor objects are being compared. For example:
                     
            ex1 = ['A', 'C', 'T', 'G']
            ex2 = ['C', 'A', 'T', 'T']
        
        ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.

- [x] P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
- [x] In the returned object of pAequorFactory(), add another method `.willLikelySurvive()`.
- [x] `.willLikelySurvive()` returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, `.willLikelySurvive()` returns false.

- [x] With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.

## Project Extensions
- [ ] Create a `.complementStrand()` method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details)
- [ ] Use the `.compareDNA()` to find the two most related instances of pAequor.