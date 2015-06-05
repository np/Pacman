define ["exports"], (runtime) ->
  runtime.ret = (_) -> (a) -> ->
    a
  runtime.getCanvas = ->
    document.getElementById 'myCanvas'
  runtime.getCtx = (c) -> ->
    c.getContext '2d'
  runtime.alert = (s) -> ->
    alert s
  runtime.addEventListner = (cb) -> ->
    document.addEventListener 'keydown', (e) ->
      cb(e)()
  runtime.mkRef = (_A) -> (v) -> ->
    ref: v
  runtime.readRef = (_A) -> (r) -> ->
    r.ref
  runtime.writeRef = (_A) -> (r) -> (v) -> ->
    r.ref = v
  runtime.fillStyle = (ctx) -> (col) -> ->
    ctx.fillStyle = col
  runtime.fillRect = (ctx) -> (x) -> (y) -> (w) -> (h) -> ->
    ctx.fillRect x, y, w, h
  runtime.setScoreText = (s) -> ->
    document.getElementById('score').innerHTML = s
  runtime.pacman = (ctx) -> (cx) -> (cy) -> (r) -> (rot) -> ->
    ctx.beginPath()
    ctx.moveTo cx, cy
    ctx.arc cx, cy, r, Math.PI / 6 + rot * Math.PI / 2, 2 * Math.PI - Math.PI / 6 + rot * Math.PI / 2, false
    ctx.fill()
  runtime.bind = (_A) -> (_B) -> (a) -> (b) -> -> b(a())()
  return runtime
