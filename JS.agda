{-# OPTIONS --type-in-type #-}

module JS where

record ⊤ : Set where

data Bool : Set where
  true false : Bool

¬ : Bool → Bool
¬ true = false
¬ false = true

{-# COMPILED_JS Bool function (x , v) {
  if (x) { return v.true();} else {return v.false();}
} #-}
{-# COMPILED_JS true true #-}
{-# COMPILED_JS false false #-}

if_then_else_ : ∀ {A : Set} → Bool → A → A → A
if true then t else f = t
if false then t else f = f

data ℕ : Set where
  zero : ℕ
  suc  : ℕ → ℕ

{-# BUILTIN NATURAL ℕ #-}
{-# COMPILED_JS ℕ function (x,v) {
  if (x < 1) { return v.zero();} else {return v.suc (x-1);}
} #-}
{-# COMPILED_JS zero 0 #-}
{-# COMPILED_JS suc function (x) {return x+1; } #-}

postulate
  String : Set
  showNat : ℕ → String

{-# BUILTIN STRING String #-}
{-# COMPILED_JS showNat function(x) {return x.toString();} #-}

private
  primitive
    primStringAppend : String → String → String

_&_ : String → String → String
_&_ = primStringAppend

{-# COMPILED_JS _&_ function(x) { return function (y) { return x + y;};} #-}

postulate
  Canvas : Set
  Context : Set
  Event : Set
  keyCode : Event → ℕ
  Ref : Set → Set

{-# COMPILED_JS keyCode function (e) { return e.keyCode; } #-}

data JSCmd : (A : Set) → Set where
  ret : ∀ {A} → A → JSCmd A
  getCanvas : JSCmd Canvas
  getCtx : Canvas → JSCmd Context
  alert : String → JSCmd ⊤
  addEventListner : (Event → JSCmd ⊤) → JSCmd ⊤
  mkRef : ∀ {A} → A → JSCmd (Ref A)
  readRef : ∀ {A} → Ref A → JSCmd A
  writeRef : ∀ {A} → Ref A → A → JSCmd ⊤
  fillStyle : Context → String → JSCmd ⊤
  fillRect : Context → ℕ → ℕ → ℕ → ℕ → JSCmd ⊤
  setScoreText : String → JSCmd ⊤
  pacman : Context → ℕ → ℕ → ℕ → ℕ → JSCmd ⊤
  bind : {A B : Set} → JSCmd B → (B → JSCmd A) → JSCmd A
