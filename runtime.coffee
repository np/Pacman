ret = (_) -> (a) -> ->
  a

getCanvas = ->
  document.getElementById 'myCanvas'

getCtx = (c) -> ->
  c.getContext '2d'

alert = (s) -> ->
  window.alert s

consoleLog = (s) -> ->
  console.log s

addEventListner = (cb) -> ->
  document.addEventListener 'keydown', (e) ->
    cb(e)()

mkRef = (_A) -> (v) -> ->
  ref: v

readRef = (_A) -> (r) -> ->
  r.ref

writeRef = (_A) -> (r) -> (v) -> ->
  r.ref = v

fillStyle = (ctx) -> (col) -> ->
  ctx.fillStyle = col

fillRect = (ctx) -> (x) -> (y) -> (w) -> (h) -> ->
  ctx.fillRect x, y, w, h

setScoreText = (s) -> ->
  document.getElementById('score').innerHTML = s

pacman = (ctx) -> (cx) -> (cy) -> (r) -> (rot) -> ->
  ctx.beginPath()
  ctx.moveTo cx, cy
  ctx.arc cx, cy, r, Math.PI / 6 + rot * Math.PI / 2, 2 * Math.PI - Math.PI / 6 + rot * Math.PI / 2, false
  ctx.fill()

bind = (_A) -> (_B) -> (a) -> (b) -> -> b(a())()

module.exports =
  {
    ret
    getCanvas
    getCtx
    alert
    consoleLog
    addEventListner
    mkRef
    readRef
    writeRef
    fillStyle
    fillRect
    setScoreText
    pacman
    bind
    mkJSSym: (r) ->
      r["mkJSSym"](ret, getCanvas, getCtx, alert, consoleLog, addEventListner, mkRef, readRef, writeRef, fillStyle, fillRect, setScoreText, pacman, bind)
  }
