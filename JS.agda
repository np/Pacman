
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

record JSSym (R : Set → Set) : Set1 where
  field
    ret : ∀ {A} → A → R A
    getCanvas : R Canvas
    getCtx : Canvas → R Context
    alert : String → R ⊤
    addEventListner : (Event → R ⊤) → R ⊤
    mkRef : ∀ {A} → A → R (Ref A)
    readRef : ∀ {A} → Ref A → R A
    writeRef : ∀ {A} → Ref A → A → R ⊤
    fillStyle : Context → String → R ⊤
    fillRect : Context → ℕ → ℕ → ℕ → ℕ → R ⊤
    setScoreText : String → R ⊤
    pacman : Context → ℕ → ℕ → ℕ → ℕ → R ⊤
    bind : {A B : Set} → R B → (B → R A) → R A

  infixr 5 _>>_ _>>=_

  _>>_ : {A : Set} → R A → R A → R A
  m >> f = bind m (λ _ → f)

  _>>=_ : {A B : Set} → R A → (A → R B) → R B
  _>>=_ = bind

open module JSSym' = JSSym {{...}} public

JSCmd : Set → Set₁
JSCmd A = ∀ {R : Set → Set}{{_ : JSSym R}} → R A
