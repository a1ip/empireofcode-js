/*
Pawn Brotherhood

Chess is the perfect game to train our troops how to think strategically. For this mission, simple pawns can be used to teach our snipers how to choose targets effectively.

Chess is a two-player strategy game played on a square checkered game board laid out in eight rows called ranks which are denoted with numbers 1 to 8, and eight columns called files and denoted with letters a to h. Each square of the chessboard is identified by a unique coordinate pair — a letter and a number (ex, "a1", "h8", "d6"). To train the snipers, we only need to concern ourselves with pawns for now. A pawn may capture an opponent's piece on a square diagonally in front of it on an adjacent file, by moving to that square. For white pawns the front squares are squares with greater row than their.

A pawn is generally a weak unit, but we have 8 of them which we can use to build a pawn defense wall. With this strategy, one pawn defends the others. A pawn is safe if another pawn can capture a unit on that square. We have several white pawns on the chess board and only white pawns. You should design your code to find how many pawns are safe.

S - Safe pawn
U - Unsafe pawn

   |---|---|---|---|---|---|---|---|
8  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
7  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
6  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
5  |   |   |   |   |   |   | S |   |
   |---|---|---|---|---|---|---|---|
4  |   | S |   | S |   | S |   |   |
   |---|---|---|---|---|---|---|---|
3  |   |   | S |   | S |   |   |   |
   |---|---|---|---|---|---|---|---|
2  |   |   |   | U |   |   |   |   |
   |---|---|---|---|---|---|---|---|
1  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
     a   b   c   d   e   f   g   h


   |---|---|---|---|---|---|---|---|
8  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
7  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
6  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
5  |   |   |   |   | S |   |   |   |
   |---|---|---|---|---|---|---|---|
4  |   | U | U | U | U | U | U |   |
   |---|---|---|---|---|---|---|---|
3  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
2  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
1  |   |   |   |   |   |   |   |   |
   |---|---|---|---|---|---|---|---|
     a   b   c   d   e   f   g   h
Input: Placed pawns coordinates as an array of strings.

Output: The number of safe pawns as a number.

Example:

safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]) === 6
safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]) === 1
Precondition:

0 < |pawns| ≤ 8

How it is used:

For game AI, the the important task is the ability to understand the game state. This mission will show how you can do this using simple chess figure positions.
*/
"use strict";

function safePawns(pawns) {
    return 0;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
    assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
    console.log("Use 'Check' to earn sweet rewards!");
}
