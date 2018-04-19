dockerrun(){
  sudo docker run -v $PWD:/app -w /app "$@"
}

unalias npm &>/dev/null || :
unset npm &>/dev/null || :
npm(){
  dockerrun node npm "$@"
}

build(){
  agda --js --compile-dir=jagda myscript.agda &&
  npm install &&
  npm run build
}

dev(){
  agda --js --compile-dir=jagda myscript.agda &&
  npm run dev
}
