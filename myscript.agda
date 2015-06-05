open import JS

module myscript where

_∘_ : ∀ {A B C : Set}(f : B → C)(g : A → B)(x : A) → C
f ∘ g = λ x → f (g x)

id : ∀ {A : Set} → A → A
id x = x

data Maybe (A : Set) : Set where
  nothing : Maybe A
  just : (x : A) → Maybe A

maybe : ∀ {A B : Set} → B → (A → B) → Maybe A → B
maybe b f nothing = b
maybe b f (just x) = f x

mmap : ∀ {A B : Set} → (A → B) → Maybe A → Maybe B
mmap f = maybe nothing (just ∘ f)

_+_ : ℕ → ℕ → ℕ
0 + n = n
suc m + n = suc (m + n)
{-# COMPILED_JS _+_ function (x) {
  return function (y) { return (x + y); };
} #-}

infixr 5 _+_
infixr 6 _*_
_*_ : ℕ → ℕ → ℕ
zero * n = 0
suc m * n = n + (m * n)
{-# COMPILED_JS _*_ function (x) {
  return function (y) { return (x * y);};
} #-}

_==_ : ℕ → ℕ → Bool
zero == zero = true
zero == suc n = false
suc m == zero = false
suc m == suc n = m == n
{-# COMPILED_JS _==_ function (x) {
  return function (y) { return (x == y); };
} #-}

msg : JSCmd String
msg = ret "hello"

makeFlag : Context → String → String → JSCmd ⊤
makeFlag ctx fc cc =
  fillStyle ctx fc >>
  fillRect ctx 0 0 (2 * 400) 500 >>
  fillStyle ctx cc >>
  fillRect ctx 250 0 100 500 >>
  fillRect ctx 0 200 800 100

data ⊥ : Set where

Assert : Bool → Set
Assert true = ⊤
Assert false = ⊥

_≤_ : ℕ → ℕ → Set
zero ≤ n = ⊤
suc m ≤ zero = ⊥
suc m ≤ suc n = m ≤ n

_<_ : ℕ → ℕ → Set
m < n = suc m ≤ n

data Tile : Set where
  W E O : Tile

{-
data Fin (n : ℕ): Set where
  !_ : (val : ℕ) {{isFin : val < n}} → Fin n
-}

abort : ∀ {A : Set}n → n < 0 → A
abort zero ()
abort (suc n) p = abort n p

data Fin : (n : ℕ) → Set where
  zero : {n : ℕ} → Fin (suc n)
  suc  : {n : ℕ} → Fin n → Fin (suc n)

!_ : {n : ℕ} → Fin n → ℕ
! zero = zero
! suc n₁ = suc (! n₁)

¡_ : {n : ℕ}(m : ℕ){prf : m < n} → Fin n
¡_ {zero}  n₁       {v}   = abort n₁ v
¡_ {suc n} zero     {_}   = zero
¡_ {suc n} (suc n₁) {prf} = suc (¡_ n₁ {prf})


Row : Set
Row = Fin 31

Col : Set
Col = Fin 28

inject : ∀ {n} → Fin n → Fin (suc n)
inject zero = zero
inject (suc n₁) = suc (inject n₁)

mpred : ∀ {n} → Fin n → Maybe (Fin n)
mpred zero = nothing
mpred (suc f) = just (inject f)

msuc : ∀ {n} → Fin n → Maybe (Fin n)
msuc (zero {zero}) = nothing
msuc (zero {suc n}) = just (suc zero)
msuc (suc n₁) = mmap suc (msuc n₁)

max : ∀ {n} → Fin (suc n)
max {zero} = zero
max {suc n} = suc max

infixr 4 _∷_
infixr 4 _++_

data Vec (A : Set) : ℕ → Set where
  [] : Vec A 0
  _∷_ : {n : ℕ} → A → Vec A n → Vec A (suc n)

lookup : {A : Set}{n : ℕ} → Vec A n → Fin n → A
lookup [] ()
lookup (x ∷ xs) zero = x
lookup (x ∷ xs) (suc i) = lookup xs i

_[_≔_] : {A : Set}{n : ℕ} → Vec A n → Fin n → A → Vec A n
[] [ () ≔ x ]
(x ∷ xs) [ zero ≔ x₁ ] = x₁ ∷ xs
(x ∷ xs) [ suc i ≔ x₁ ] = x ∷ xs [ i ≔ x₁ ]

foldl : {A : Set}{P : ℕ → Set}{n : ℕ}(xs : Vec A n)
  → P 0 → (∀ {n} → A  → P n → P (suc n))
  → P n
foldl [] b c = b
foldl {P = P} (x ∷ xs) b c = foldl {P = λ n → P (suc n)} xs (c x b)
  (λ {n} → c {suc n})

_++_ : ∀ {A n m} → Vec A n → Vec A m → Vec A (n + m)
[] ++ ys = ys
(x ∷ xs) ++ ys = x ∷ xs ++ ys

module _ {A} where
  reverse : ∀ {n} → Vec A n → Vec A n
  reverse xs = foldl {P = Vec A} xs [] (_∷_)

Maze : Set
Maze = Vec (Vec Tile 28) 31

rep : ∀ {A : Set}(n : ℕ)(x : A) → Vec A n
rep zero x = []
rep (suc n) x = x ∷ rep _ x

refl : ∀ (m : ℕ) → m ≤ m
refl zero = _
refl (suc m) = refl m

mkRow : Vec Tile 14 → Vec Tile 28
mkRow xs = xs ++ reverse xs

maze : Maze
maze = rep 28 W
     ∷ mkRow (W ∷ rep 12 O ++ W ∷ [])
     ∷ mkRow (W ∷ O ∷ rep 4 W ++ O ∷ rep 5 W ++ O ∷ W ∷ [])
     ∷ mkRow (W ∷ O ∷ rep 4 W ++ O ∷ rep 5 W ++ O ∷ W ∷ [])
     ∷ mkRow (W ∷ O ∷ rep 4 W ++ O ∷ rep 5 W ++ O ∷ W ∷ [])
     ∷ mkRow (W ∷ rep 13 O)
     ∷ mkRow (W ∷ O ∷ rep 4 W ++ O ∷ W ∷ W ∷ O ∷ rep 4 W)
     ∷ mkRow (W ∷ O ∷ rep 4 W ++ O ∷ W ∷ W ∷ O ∷ rep 4 W)
     ∷ mkRow (W ∷ rep 6 O ++ W ∷ W ∷ rep 4 O ++ W ∷ [])
     ∷ mkRow (rep 6 W ++ O ∷ rep 5 W ++ O ∷ W ∷ [])
     ∷ mkRow (rep 5 E ++ W ∷ O ∷ rep 5 W ++ O ∷ W ∷ [])
     ∷ mkRow (rep 5 E ++ W ∷ O ∷ W ∷ W ∷ rep 5 O)
     ∷ mkRow (rep 5 E ++ W ∷ O ∷ W ∷ W ∷ O ∷ rep 3 W ++ E ∷ [])
     ∷ mkRow (rep 6 W ++ O ∷ W ∷ W ∷ O ∷ W ∷ rep 3 E)
     ∷ mkRow (rep 10 O ++ W ∷ rep 3 E)
     ∷ mkRow (rep 6 W ++ O ∷ W ∷ W ∷ O ∷ W ∷ rep 3 E)
     ∷ mkRow (rep 5 E ++ W ∷ O ∷ W ∷ W ∷ O ∷ rep 4 W)
     ∷ mkRow (rep 5 E ++ W ∷ O ∷ W ∷ W ∷ rep 5 O)
     ∷ mkRow (rep 5 E ++ W ∷ O ∷ W ∷ W ∷ O ∷ rep 4 W)
     ∷ mkRow (rep 6 W ++ O ∷ W ∷ W ∷ O ∷ rep 4 W)
     ∷ mkRow (W ∷ rep 12 O ++ W ∷ [])
     ∷ mkRow (W ∷ O ∷ rep 4 W ++ O ∷ rep 5 W ++ O ∷ W ∷ [])
     ∷ mkRow (W ∷ O ∷ rep 4 W ++ O ∷ rep 5 W ++ O ∷ W ∷ [])
     ∷ mkRow (W ∷ rep 3 O ++ W ∷ W ∷ rep 8 O)
     ∷ mkRow (rep 3 W ++ O ∷ W ∷ W ∷ O ∷ W ∷ W ∷ O ∷ rep 4 W)
     ∷ mkRow (rep 3 W ++ O ∷ W ∷ W ∷ O ∷ W ∷ W ∷ O ∷ rep 4 W)
     ∷ mkRow (W ∷ rep 6 O ++ W ∷ W ∷ rep 4 O ++ W ∷ [])
     ∷ mkRow (W ∷ O ∷ rep 10 W ++ O ∷ W ∷ [])
     ∷ mkRow (W ∷ O ∷ rep 10 W ++ O ∷ W ∷ [])
     ∷ mkRow (W ∷ rep 13 O)
     ∷ rep 28 W
     ∷ []

do : ∀ {n A} → Vec A n → (Fin n → A → JSCmd ⊤) → JSCmd ⊤
do [] f = ret _
do (x ∷ xs) f = f zero x >> do xs (λ m x → f (suc m) x)

doMaze : Maze → (Row → Col → Tile → JSCmd ⊤) → JSCmd ⊤
doMaze m f = do m λ { r cs → do cs λ { c x → f r c x } }

yellow = "#fecc00"
blue = "#006aa7"
black = "#000000"
white = "#ffffff"

getTileColor : Tile → String
getTileColor W = blue
getTileColor O = black
getTileColor E = black

getBulletColor : Tile → String
getBulletColor O = white
getBulletColor t = getTileColor t

printTile : Context → Row → Col → Tile → JSCmd ⊤
printTile ctx r c t =
     fillStyle ctx (getTileColor t)
  >> fillRect ctx (15 * ! c ) (15 * ! r) 15 15
  >> fillStyle ctx (getBulletColor t)
  >> fillRect ctx (15 * ! c + 6) (15 * ! r + 6) 3 3

printMaze : Context → Maze → JSCmd ⊤
printMaze ctx m = doMaze m (printTile ctx)

Points = ℕ

data KeyPress : Set where
  ku kd kl kr : KeyPress

record GameState : Set where
  constructor GS
  field
    m : Maze
    pr : Row
    pc : Col
    p : Points

getPoints : GameState → Points
getPoints = GameState.p -- (GS _ _ _ p) = p

getDirection : Maybe KeyPress → ℕ
getDirection nothing = 0
getDirection (just ku) = 3
getDirection (just kd) = 1
getDirection (just kl) = 2
getDirection (just kr) = 0

printPlayer : Context → Row → Col → Maybe KeyPress → JSCmd ⊤
printPlayer ctx r c kp
   = fillStyle ctx yellow
  >> pacman ctx (15 * ! c + 8) (15 * ! r + 8) 8 (getDirection kp)

printGS : Context → GameState → Maybe KeyPress → JSCmd ⊤
printGS ctx (GS m r c points) kp
   = printMaze ctx m
  >> printPlayer ctx r c kp


modify : ∀ {A} → Ref A → (A → A) → JSCmd ⊤
modify ref f
   = readRef ref >>= λ r →
     writeRef ref (f r)

printState : Context → Ref GameState → KeyPress → JSCmd ⊤
printState ctx ref kp
   = readRef ref >>= λ gs →
     setScoreText (showNat (getPoints gs)) >>
     printGS ctx gs (just kp)

isValid : GameState → Bool
isValid (GS m pr pc p) with lookup (lookup m pr) pc
... | W = false
... | _ = true

checkScore : GameState → GameState
checkScore (GS m pr pc p) with lookup (lookup m pr) pc
... | O = GS (m [ pr ≔ lookup m pr [ pc ≔ E ] ]) pr pc (1 + p)
... | _ = GS m pr pc p

updateGS updateGS' : KeyPress → GameState → GameState
updateGS' ku (GS m pr pc p) = GS m (maybe max id (mpred pr)) pc p
updateGS' kd (GS m pr pc p) = GS m (maybe zero id (msuc pr)) pc p
updateGS' kl (GS m pr pc p) = GS m pr (maybe max id (mpred pc)) p
updateGS' kr (GS m pr pc p) = GS m pr (maybe zero id (msuc pc)) p

updateGS kp gs = let gs' = updateGS' kp gs in if isValid gs' then checkScore gs' else gs

getKeyCode : Event → Maybe KeyPress
getKeyCode e = if keyCode e == 37 then just kl
          else if keyCode e == 38 then just ku
          else if keyCode e == 39 then just kr
          else if keyCode e == 40 then just kd
          else nothing

update : ∀{R}{{_ : JSSym R}} → Context → Ref GameState → Event → R ⊤
update ctx r e with getKeyCode e
... | nothing = ret _
... | just kc = modify r (updateGS kc) >> printState ctx r kc

initGS : GameState
initGS = GS maze (¡ 1) (¡ 1) 0

main : JSCmd ⊤
main =
  getCanvas >>= λ c →
  getCtx c >>= λ ctx →
  -- makeFlag ctx blue yellow
  printGS ctx initGS nothing >>
  mkRef initGS >>= λ st →
  addEventListner (update ctx st)

-- -}
-- -}
-- -}
-- -}
